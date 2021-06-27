import {TYPES_OF_HOUSING} from './data.js';

const addForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
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

const togglePageActiveState = (isDisabled) => {
  addForm.classList.toggle('ad-form--disabled', isDisabled);
  [addForm, filterForm].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
};

export {togglePageActiveState, validateMinPrice, validateRoomsInput, addForm, roomNumberSelect, capacitySelect};
