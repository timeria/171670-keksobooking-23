import {TYPES_OF_HOUSING, fetchUrl, TOKIO_CENTER} from './data.js';

const addForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
const formSuccessPopup = document.querySelector('#success').content.querySelector('.success');
const formErrorPopup = document.querySelector('#error').content.querySelector('.error');
const loadErrorPopup = document.querySelector('#noload').content.querySelector('.noload');
const resetButton = addForm.querySelector('.ad-form__reset');

const ROOMS_FOR_GUESTS_MAP = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};
const roomNumberSelect = addForm.rooms;
const capacitySelect = addForm.capacity;

//Подмена минимального значения цены за жилье в завичисимости от типа
const validateMinPrice = () => {
  addForm.price.min = TYPES_OF_HOUSING[addForm.type.value].minPrice;
  addForm.price.placeholder = TYPES_OF_HOUSING[addForm.type.value].minPrice;
};

//Валидация количества гостей и комнат
const validateRoomsInput = (evt) => {
  const capacityList = ROOMS_FOR_GUESTS_MAP[evt.target.value];
  const capacityElement = addForm.capacity.children;
  for(let i=0; i<capacityElement.length; i++) {
    if(capacityList.includes(capacityElement[i].value)) {
      capacityElement[i].disabled = false;
    } else {
      capacityElement[i].disabled = true;
    }
  }
  addForm.capacity.value = capacityElement[0];
};
//Активация, деактивация формы
const togglePageActiveState = (isDisabled) => {
  addForm.classList.toggle('ad-form--disabled', isDisabled);
  [addForm, filterForm].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
};
//Время заезда, выезда
const onTimeChange = function (evt) {
  if (evt.target === addForm.timein) {
    addForm.timeout.value = addForm.timein.value;
  } else {
    addForm.timein.value = addForm.timeout.value;
  }
};

const addSuccessPopup = () => {
  document.body.append(formSuccessPopup);
};

const addErrorPopup = () => {
  document.body.append(formErrorPopup);
};

const resetForm = () => {
  markerMain.setLatLng(TOKIO_CENTER);
  map.setView(TOKIO_CENTER, 13);
  addForm.reset();
  filterForm.reset();
};

addForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  fetch(fetchUrl.POST,
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  ).then((response) => {
    if(response.ok) {
      addSuccessPopup();
      resetForm();
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

const closePopup =() => {
  formSuccessPopup.remove();
  formErrorPopup.remove();
  loadErrorPopup.remove();
};

export {togglePageActiveState, validateMinPrice, validateRoomsInput, addForm, resetButton, roomNumberSelect, capacitySelect, onTimeChange, closePopup, filterForm, resetForm, addErrorLoad};
