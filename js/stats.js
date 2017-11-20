'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var indent = 50;
  var barWidth = 40;
  var initialX = 120;
  var initialY = 90;
  var lineHeight = 20;
  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), initialX + (indent + barWidth) * i, histogramHeight + initialY - times[i] * step - lineHeight / 2);
    ctx.fillStyle = (name === 'Вы') ? 'red' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(initialX + (indent + barWidth) * i, histogramHeight + initialY - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + histogramHeight + lineHeight);
  }
};
