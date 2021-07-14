import {filterForm} from './form.js';
import {OFFERS_COUNT, fetchUrl, pinSetting} from './data.js';
import {map, markerGroup} from './map.js';
import {generateAd} from './offer.js';

const filterTypeHousing = filterForm.querySelector('#housing-type');
const filterPriceHousing = filterForm.querySelector('#housing-price');
const VALUE_OF_ALL_ADS = 'any';
const PRICE_MAP = {
  any: {
    min: -Infinity,
    max: Infinity,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  low: {
    min: 0,
    max: 10000,
  },
  high: {
    min: 50000,
    max: Infinity,
  },
};

const filterPinsByType = (dataElement) =>
  filterForm['housing-type'].value === dataElement.offer.type || filterForm['housing-type'].value === VALUE_OF_ALL_ADS;

const filterPinsByPrice = (dataElement) =>
  PRICE_MAP[filterForm['housing-price'].value].min < dataElement.offer.price && PRICE_MAP[filterForm['housing-price'].value].max > dataElement.offer.price;

const compare = (wizardA, wizardB) => {
  const rankA = filterPinsByType(wizardA);
  const rankB = filterPinsByType(wizardB);

  return rankB - rankA;
}

const setFilter = (elem) => fetch(fetchUrl.GET)
  .then((response) => response.json())
  .then((offers) => {
    offers.slice().sort(elem).slice(0, OFFERS_COUNT).forEach((offer) => {
      const regularPinIcon = L.icon(pinSetting.REGULAR);
      const marker = L.marker(
        offer.location,
        {
          icon: regularPinIcon,
        },
      );
      marker.addTo(map)
        .bindPopup(generateAd(offer));
    });
  })


filterForm.addEventListener('change', () => {
  markerGroup.clearLayers();
  setFilter(compare);
});




