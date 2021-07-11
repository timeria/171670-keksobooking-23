import {validateMinPrice, validateRoomsInput, addForm, onTimeChange, resetButton, closePopup, resetForm} from './form.js';
import './map.js';
import {keyCode} from './data.js';

addForm.type.addEventListener('change', validateMinPrice);

addForm.rooms.addEventListener('change', validateRoomsInput);

addForm.timein.addEventListener('change', onTimeChange);
addForm.timeout.addEventListener('change', onTimeChange);

document.addEventListener('click', closePopup);
document.addEventListener('keyup', (e) => {
  if (e.keyCode === keyCode) {
    closePopup();
  }
});

resetButton.addEventListener('click', resetForm);

