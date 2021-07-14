import './map.js';
import {validateMinPrice, validateRoomsInput, adForm, onTimeChange, resetButton, closePopup, resetForm} from './form.js';
import {keyCode} from './data.js';
import './filter.js';

adForm.type.addEventListener('change', validateMinPrice);

adForm.rooms.addEventListener('change', validateRoomsInput);

adForm.timein.addEventListener('change', onTimeChange);
adForm.timeout.addEventListener('change', onTimeChange);

document.addEventListener('click', closePopup);
document.addEventListener('keyup', (e) => {
  if (e.keyCode === keyCode) {
    closePopup();
  }
});

resetButton.addEventListener('click', resetForm);

