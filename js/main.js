import {OFFERS_COUNT, generateOffer} from './data.js';
import {generateAds} from './offer.js';
import {validateMinPrice, validateRoomsInput, addForm} from './form.js';

const mapCanvas = document.querySelector('#map-canvas');

const offersList = new Array(OFFERS_COUNT).fill(null).map(generateOffer);

const allOffersFragment = generateAds(offersList); // тут фрагмент с разметкой 10 карточек

mapCanvas.appendChild(allOffersFragment.firstChild);

addForm.type.addEventListener('change', validateMinPrice);

addForm.rooms.addEventListener('change', validateRoomsInput);

//togglePageActiveState(true);
