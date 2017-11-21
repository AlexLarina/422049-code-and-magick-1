'use strict';

window.renderStatistics = function (ctx, names, times) {
  /**
   * Параметры облака
   * @const
   * @type {number}
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
   * @const
   * @type {number}
   */
  var MessageParams = {
    X: 120,
    Y: 40,
    INDENT: 20
  };
  /**
   * Параметры гистограммы
   * @const
   * @type {number}
   */
  var HistogramParams = {
    HEIGHT: 150,
    INDENT: 50,
    X: 120,
    Y: 90,
    MAX: -1,
    BAR_WIDTH: 40,
    LINE_HEIGHT: 20
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(CloudParams.X + CloudParams.INDENT, CloudParams.Y + CloudParams.INDENT, CloudParams.WIDTH, CloudParams.HEIGHT);
  ctx.fillRect(CloudParams.X + CloudParams.INDENT, CloudParams.Y + CloudParams.INDENT, CloudParams.WIDTH, CloudParams.HEIGHT);

  ctx.fillStyle = 'white';
  ctx.strokeRect(CloudParams.X, CloudParams.Y, CloudParams.WIDTH, CloudParams.HEIGHT);
  ctx.fillRect(CloudParams.X, CloudParams.Y, CloudParams.WIDTH, CloudParams.HEIGHT);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', MessageParams.X, MessageParams.Y);
  ctx.fillText('Список результатов:', MessageParams.X, MessageParams.Y + MessageParams.INDENT);

  HistogramParams.MAX = Math.max.apply(null, times);
  var step = HistogramParams.HEIGHT / (HistogramParams.MAX - 0);
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), HistogramParams.X + (HistogramParams.INDENT + HistogramParams.BAR_WIDTH) * i, HistogramParams.HEIGHT + HistogramParams.Y - times[i] * step - HistogramParams.LINE_HEIGHT / 2);
    ctx.fillStyle = (names[i] === 'Вы') ? 'red' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(HistogramParams.X + (HistogramParams.INDENT + HistogramParams.BAR_WIDTH) * i, HistogramParams.HEIGHT + HistogramParams.Y - times[i] * step, HistogramParams.BAR_WIDTH, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], HistogramParams.X + (HistogramParams.INDENT + HistogramParams.BAR_WIDTH) * i, HistogramParams.Y + HistogramParams.HEIGHT + HistogramParams.LINE_HEIGHT);
  }
};
