'use strict';

window.renderStatistics = function (ctx, names, times) {
  var max = -1;
  var histogramHeight = 150;
  var indent = 50;
  var barWidth = 40;
  var initialX = 120;
  var initialY = 90;
  var lineHeight = 20;
  var cloudWidth = 420;
  var cloudHeight = 270;
  var cloudX = 100;
  var cloudY = 10;
  var cloudShadowIndent = 10;
  var messageX = 120;
  var messageY = 40;
  var messageIndent = 20;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(cloudX + cloudShadowIndent, cloudY + cloudShadowIndent, cloudWidth, cloudHeight);
  ctx.fillRect(cloudX + cloudShadowIndent, cloudY + cloudShadowIndent, cloudWidth, cloudHeight);

  ctx.fillStyle = 'white';
  ctx.strokeRect(cloudX, cloudY, cloudWidth, cloudHeight);
  ctx.fillRect(cloudX, cloudY, cloudWidth, cloudHeight);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', messageX, messageY);
  ctx.fillText('Список результатов:', messageX, messageY + messageIndent);

  for (var i = 0; i < times.length; i++) {
    max = times.reduce(function (a, b) {
      return Math.max(a, b);
    });
  }
  var step = histogramHeight / (max - 0);
  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), initialX + (indent + barWidth) * i, histogramHeight + initialY - times[i] * step - lineHeight / 2);
    ctx.fillStyle = (names[i] === 'Вы') ? 'red' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(initialX + (indent + barWidth) * i, histogramHeight + initialY - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + histogramHeight + lineHeight);
  }
};
