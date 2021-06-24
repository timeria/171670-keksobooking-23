import {OFFERS_COUNT, generateOffer} from './data.js';
import {generateAds} from './offer.js';
import {addMinPrice, validateRoomsAndGuests, typeHousesSelect, roomNumberSelect, capacitySelect} from './form.js';

const mapCanvas = document.querySelector('#map-canvas');

const offersList = new Array(OFFERS_COUNT).fill(null).map(generateOffer);

const allOffersFragment = generateAds(offersList); // тут фрагмент с разметкой 10 карточек

mapCanvas.appendChild(allOffersFragment.firstChild);

typeHousesSelect.addEventListener('change', () => {
  addMinPrice();
});

roomNumberSelect.addEventListener('change', () => {
  validateRoomsAndGuests();
});

capacitySelect.addEventListener('change', () => {
  validateRoomsAndGuests();
});
