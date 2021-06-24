const adForm = document.querySelector('.ad-form');
const adFormElement = document.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = document.querySelectorAll('select');
const mapFiltersFeatures = document.querySelectorAll('fieldset');
const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const cardNameInput = adForm.querySelector('input[name="title"]');
const cardPrice = adForm.querySelector('input[name="price"]');
const PRICE_MIN  = {
  palace: '10000',
  flat: '1000',
  house: '5000',
  bungalow: '0',
  hotel: '3000',
};

const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const typeHousesSelect = adForm.querySelector('select[name="type"]');
//Деактивация формы
const formDisabled = () => {
  mapFiltersFeatures.disabled = true;

  for(let i=0; i<adFormElement.length; i++) {
    adFormElement[i].disabled = true;
  }

  for(let i=0; i<mapFiltersSelect.length; i++) {
    mapFiltersSelect[i].disabled = true;
  }

  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');
};
//Активация формы
const formActivate = () => {
  mapFiltersFeatures.disabled = false;

  for(let i=0; i<adFormElement.length; i++) {
    adFormElement[i].disabled = false;
  }

  for(let i=0; i<mapFiltersSelect.length; i++) {
    mapFiltersSelect[i].disabled = false;
  }

  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
};
//Валидация заголовка
const cardNameValidate = cardNameInput.addEventListener('input', () => {
  const valueLength = cardNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    cardNameInput.setCustomValidity(`Ещё ${  MIN_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    cardNameInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else {
    cardNameInput.setCustomValidity('');
  }

  cardNameInput.reportValidity();
});
//Подмена минимального значения цены за жилье в завичисимости от типа
const addMinPrice = () => {
  const typeValue = typeHousesSelect.value;
  const priceMin = PRICE_MIN[typeValue];
  cardPrice.placeholder = priceMin;
  cardPrice.min = priceMin;
};

//Валидация количества гостей и комнат
const validateRoomsAndGuests = () => {
  switch (roomNumberSelect.value) {
    case '1':
      if (capacitySelect.value === '3' || capacitySelect.value === '2' || capacitySelect.value === '0') {
        roomNumberSelect.setCustomValidity('Только для 1 гостя');
      } else {
        roomNumberSelect.setCustomValidity('');
      }
      break;

    case '2':
      if (capacitySelect.value === '3' || capacitySelect.value === '0') {
        roomNumberSelect.setCustomValidity('Только для 1-го или 2-х гостей');
      } else {
        roomNumberSelect.setCustomValidity('');
      }
      break;

    case '3':
      if (capacitySelect.value === '0') {
        roomNumberSelect.setCustomValidity('Только для 1-го, 2-х или 3-х гостей');
      } else {
        roomNumberSelect.setCustomValidity('');
      }
      break;

    case '100':
      if (capacitySelect.value !== '0') {
        roomNumberSelect.setCustomValidity('Не для гостей');
      } else {
        roomNumberSelect.setCustomValidity('');
      }
      break;

    default:
      roomNumberSelect.setCustomValidity('');
      break;
  }
};

export {formDisabled, formActivate, cardNameValidate, addMinPrice, validateRoomsAndGuests, typeHousesSelect, roomNumberSelect, capacitySelect};
