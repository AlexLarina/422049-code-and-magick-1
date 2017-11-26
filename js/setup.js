'use strict';
// переменные и enam
var WIZARDS_NUMBER = 4;
var WizardParams = {
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYE_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};
// функции

function generateRand(range) {
  return Math.floor(Math.random() * range);
}

function createWizard() {
  var wizard = {};

  var rand = generateRand(WizardParams.NAMES.length);
  wizard.name = WizardParams.NAMES[rand] + ' ' + WizardParams.SURNAMES[rand];

  rand = generateRand(WizardParams.COAT_COLORS.length);
  wizard.coatColor = WizardParams.COAT_COLORS[rand];

  rand = generateRand(WizardParams.EYE_COLORS.length);
  wizard.eyesColor = WizardParams.EYE_COLORS[rand];
  return wizard;
}

function createWizardsArray(wizardsNumber) {
  var wizards = [];
  for (var i = 0; i < wizardsNumber; i++) {
    wizards[i] = createWizard();
  }
  return wizards;
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

function createFragment(wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
}

// махинации с отрисовкой

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardsArray = createWizardsArray(WIZARDS_NUMBER);

similarListElement.appendChild(createFragment(wizardsArray));
userDialog.querySelector('.setup-similar').classList.remove('hidden');
