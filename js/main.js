import {validateMinPrice, validateRoomsInput, addForm, onTimeChange, setUserFormSubmit, addSuccess, addError} from './form.js';
import './map.js';

addForm.type.addEventListener('change', validateMinPrice);

addForm.rooms.addEventListener('change', validateRoomsInput);

addForm.timein.addEventListener('change', onTimeChange.bind(null, addForm.timein, addForm.timeout));
addForm.timeout.addEventListener('change', onTimeChange.bind(null, addForm.timeout, addForm.timein));

setUserFormSubmit(addSuccess, addError);
