import './map.js';
import {onPriceValidate, onRoomsValidate, adForm, onTimeChange, resetButton, onPopupClose, onFormReset, onPopupKeyup} from './form.js';
import './filter.js';

adForm.type.addEventListener('change', onPriceValidate);

adForm.rooms.addEventListener('change', onRoomsValidate);

adForm.timein.addEventListener('change', onTimeChange);
adForm.timeout.addEventListener('change', onTimeChange);

document.addEventListener('click', onPopupClose);

document.addEventListener('keyup', onPopupKeyup);

resetButton.addEventListener('click', onFormReset);

