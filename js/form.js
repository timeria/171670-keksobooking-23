import {TYPES_OF_HOUSING, fetchUrl, TOKIO_CENTER, keyCode} from './data.js';
import {map, markerMain} from './map.js';

const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
const formSuccessPopup = document.querySelector('#success').content.querySelector('.success');
const formErrorPopup = document.querySelector('#error').content.querySelector('.error');
const loadErrorPopup = document.querySelector('#noload').content.querySelector('.noload');
const resetButton = adForm.querySelector('.ad-form__reset');

const ROOMS_FOR_GUESTS_MAP = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

//Подмена минимального значения цены за жилье в завичисимости от типа
const onPriceValidate = () => {
  adForm.price.min = TYPES_OF_HOUSING[adForm.type.value].minPrice;
  adForm.price.placeholder = TYPES_OF_HOUSING[adForm.type.value].minPrice;
};

//Валидация количества гостей и комнат
const onRoomsValidate = (evt) => {
  const capacityList = ROOMS_FOR_GUESTS_MAP[evt.target.value];
  const capacityElement = adForm.capacity.children;
  for(let i=0; i<capacityElement.length; i++) {
    if(capacityList.includes(capacityElement[i].value)) {
      capacityElement[i].disabled = false;
    } else {
      capacityElement[i].disabled = true;
    }
  }
  adForm.capacity.value = capacityElement[0];
};
//Активация, деактивация формы
const togglePageActiveState = (isDisabled) => {
  adForm.classList.toggle('ad-form--disabled', isDisabled);
  [adForm, filterForm].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
};
//Время заезда, выезда
const onTimeChange = function (evt) {
  if (evt.target === adForm.timein) {
    adForm.timeout.value = adForm.timein.value;
  } else {
    adForm.timein.value = adForm.timeout.value;
  }
};

const addSuccessPopup = () => {
  document.body.append(formSuccessPopup);
};

const addErrorPopup = () => {
  document.body.append(formErrorPopup);
};

const onFormReset = () => {
  markerMain.setLatLng(TOKIO_CENTER);
  map.setView(TOKIO_CENTER, 13);
  adForm.reset();
  filterForm.reset();
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  fetch(fetchUrl.POST,
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  ).then((response) => {
    if(response.ok) {
      addSuccessPopup();
      onFormReset();
    } else {
      addErrorPopup();
    }
  })
    .catch(() => {
      addErrorPopup();
    });
});

const addErrorLoad = () => {
  document.body.append(loadErrorPopup);
};

const popupClose = () => {
  formSuccessPopup.remove();
  formErrorPopup.remove();
  loadErrorPopup.remove();
};

const onPopupClose = () => {
  popupClose();
  document.removeEventListener('click', popupClose);
};

const onPopupKeyup = (e) => {
  if (e.keyCode === keyCode) {
    popupClose();
    document.removeEventListener('click', popupClose);
  }
};
export {togglePageActiveState, onPriceValidate, onRoomsValidate, adForm, resetButton, onTimeChange, onPopupClose, onPopupKeyup, filterForm, onFormReset, addErrorLoad};
