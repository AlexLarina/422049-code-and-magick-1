'use strict';
// переменные и enam
var WIZARDS_NUMBER = 4;
var wizards = [];
var WizardParams = {
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYE_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};
var fragment;
// функции
function createWizardsArray(wizardsNumber) {
  for (var i = 0; i < wizardsNumber; i++) {
    wizards[i] = {
      name: '',
      coatColor: '',
      eyesColor: ''
    };
  } return wizards;
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

function createFragment() {
  fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    var rand = Math.floor(Math.random() * WizardParams.NAMES.length);
    wizards[i].name = WizardParams.NAMES[rand] + ' ' + WizardParams.SURNAMES[rand];

    rand = Math.floor(Math.random() * WizardParams.COAT_COLORS.length);
    wizards[i].coatColor = WizardParams.COAT_COLORS[rand];

    rand = Math.floor(Math.random() * WizardParams.EYE_COLORS.length);
    wizards[i].eyesColor = WizardParams.EYE_COLORS[rand];

    fragment.appendChild(renderWizard(wizards[i]));
  }
}
//

// махинации с отрисовкой

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

createWizardsArray(WIZARDS_NUMBER);
createFragment();

/* var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  var rand = Math.floor(Math.random() * WizardParams.NAMES.length);
  wizards[i].name = WizardParams.NAMES[rand] + ' ' + WizardParams.SURNAMES[rand];

  rand = Math.floor(Math.random() * WizardParams.COAT_COLORS.length);
  wizards[i].coatColor = WizardParams.COAT_COLORS[rand];

  rand = Math.floor(Math.random() * WizardParams.EYE_COLORS.length);
  wizards[i].eyesColor = WizardParams.EYE_COLORS[rand];

  fragment.appendChild(renderWizard(wizards[i]));
}*/
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
