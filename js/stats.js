'use strict';

window.renderStatistics = function (ctx, names, times) {
  /**
   * Параметры облака
   * @readonly
   * @enum {number}
   */
  var CloudParams = {
    WIDTH: 420,
    HEIGHT: 270,
    X: 100,
    Y: 10,
    INDENT: 10
  };
  /**
   * Параметры текста
   * @readonly
   * @enum {number}
   */
  var MessageParams = {
    MAX_WIDTH: 200,
    LINE_HEIGHT: 20,
    MARGIN_LEFT: 150,
    MARGIN_TOP: 30
    //X: 120,
    //Y: 40,
    //INDENT: 20
  };
  /**
   * Параметры гистограммы
   * @readonly
   * @enum {number}
   */
  var HistogramParams = {
    HEIGHT: 150,
    INDENT: 50,
    X: 120,
    Y: 90,
    BAR_WIDTH: 40,
    LINE_HEIGHT: 20,
    MAX: -1
  };
  /**
   * Отрисовка тени облака результатов.
   */
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(CloudParams.X + CloudParams.INDENT, CloudParams.Y + CloudParams.INDENT, CloudParams.WIDTH, CloudParams.HEIGHT);
  ctx.fillRect(CloudParams.X + CloudParams.INDENT, CloudParams.Y + CloudParams.INDENT, CloudParams.WIDTH, CloudParams.HEIGHT);
  /**
   * Отрисовка облака результатов.
   */
  ctx.fillStyle = 'white';
  ctx.strokeRect(CloudParams.X, CloudParams.Y, CloudParams.WIDTH, CloudParams.HEIGHT);
  ctx.fillRect(CloudParams.X, CloudParams.Y, CloudParams.WIDTH, CloudParams.HEIGHT);
  /**
   * Отрисовка сообщений.
   */
  function wrapText(ctx, text, marginLeft, marginTop, maxWidth, lineHeight) {
    var words = text.split(' ');
    var countWords = words.length;
    var line = '';
    for (var n = 0; n < countWords; n++) {
      var testLine = line + words[n] + ' ';
      var testWidth = ctx.measureText(testLine).width;
      if (testWidth > maxWidth) {
        ctx.fillText(line, marginLeft, marginTop);
        line = words[n] + ' ';
        marginTop += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, marginLeft, marginTop);
  }

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  var message = 'Ура вы победили! Список результатов:';
  wrapText(ctx, message, MessageParams.MARGIN_LEFT, MessageParams.MARGIN_TOP, MessageParams.MAX_WIDTH, MessageParams.LINE_HEIGHT);
  //ctx.fillText('Ура вы победили! Список результатов:', MessageParams.X, MessageParams.Y);
  //ctx.fillText('Список результатов:', MessageParams.X, MessageParams.Y + MessageParams.INDENT);
  /**
   * Отрисовка гистограммы результатов участников.
   */

  function drawRect(ctx, time, columnName, index) {
    ctx.fillRect(HistogramParams.X + (HistogramParams.INDENT + HistogramParams.BAR_WIDTH) * index, HistogramParams.HEIGHT + HistogramParams.Y - time * step, HistogramParams.BAR_WIDTH, time * step);
  }
  function randomOpacity(min, max) {
    return Math.random() * (max - min) + min;
  }
  HistogramParams.MAX = Math.max.apply(null, times);
  var step = HistogramParams.HEIGHT / (HistogramParams.MAX - 0);

  times.forEach(function (time, index) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(time), HistogramParams.X + (HistogramParams.INDENT + HistogramParams.BAR_WIDTH) * index, HistogramParams.HEIGHT + HistogramParams.Y - time * step - HistogramParams.LINE_HEIGHT / 2);
    ctx.fillStyle = (names[index] === 'Вы') ? 'red' : 'rgba(0, 0, 255, ' + randomOpacity(0.1, 1) + ')';
    drawRect(ctx, time, name[index], index);
    // ctx.fillRect(HistogramParams.X + (HistogramParams.INDENT + HistogramParams.BAR_WIDTH) * index, HistogramParams.HEIGHT + HistogramParams.Y - time * step, HistogramParams.BAR_WIDTH, time * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[index], HistogramParams.X + (HistogramParams.INDENT + HistogramParams.BAR_WIDTH) * index, HistogramParams.Y + HistogramParams.HEIGHT + HistogramParams.LINE_HEIGHT);
  });
};
