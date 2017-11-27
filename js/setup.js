'use strict';
/**
 * количество магов
 * @const
 * @type {number}
 */
var WIZARDS_NUMBER = 4;
/**
 * Параметры магов
 * @readonly
 * @enum {number}
 */
var WizardParams = {
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYE_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};

/**
 * генерация случайного индекса
 * @param {number} range
 * @return {number}
 */
function getRandFromRange(range) {
  return Math.floor(Math.random() * range);
}
/**
 * заполнение поля "имя" объекта маг
 * @return {string}
 */
function createWizardName() {
  return WizardParams.NAMES[getRandFromRange(WizardParams.NAMES.length)] + ' ' + WizardParams.SURNAMES[getRandFromRange(WizardParams.NAMES.length)];
}
/**
 * заполнение поля "цвет плаща" объекта маг
 * @return {string}
 */
function createWizardCoatColor() {
  return WizardParams.COAT_COLORS[getRandFromRange(WizardParams.COAT_COLORS.length)];
}
/**
 * заполнение поля "цвет глаз" объекта маг
 * @return {string}
 */
function createWizardEyeColor() {
  return WizardParams.EYE_COLORS[getRandFromRange(WizardParams.EYE_COLORS.length)];
}
/**
 * заполнение всех полей объекта маг
 * @return {Object}
 */
function createWizard() {
  return {
    name: createWizardName(),
    coatColor: createWizardCoatColor(),
    eyesColor: createWizardEyeColor()
  };
}
/**
 * заполнение всех полей объекта маг
 * @param {number} wizardsNumber - количество магов для отрисовки
 * @return {Array}
 */
function createWizardsArray(wizardsNumber) {
  var wizards = [];
  for (var i = 0; i < wizardsNumber; i++) {
    wizards[i] = createWizard();
  }
  return wizards;
}
/**
 * заполнение всех полей объекта маг
 * @param {Object} wizard - объект "маг"
 * @return {HTMLELement}
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};
/**
 * заполнение всех полей объекта маг
 * @param {Array} wizards - массив магов
 * @return {DocumentFragment}
 */
function createFragment(wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
}

/**
 * Отрисовка массива магов с использование шаблона
 */

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardsArray = createWizardsArray(WIZARDS_NUMBER);

similarListElement.appendChild(createFragment(wizardsArray));
userDialog.querySelector('.setup-similar').classList.remove('hidden');
