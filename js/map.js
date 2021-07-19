import {debounce} from './debounce.js';
import {adForm, togglePageActiveState, addErrorLoad, filterForm} from './form.js';
import {OFFERS_COUNT, TOKIO_CENTER, pinSetting, fetchUrl, mapZoom} from './data.js';
import {generateAd} from './offer.js';
import {filterMapPins} from './filter.js';

const mainPinIcon = L.icon(pinSetting.MAIN);

togglePageActiveState(true);

const map = L.map('map-canvas')
  .on('load', () => {
    togglePageActiveState(false);
  })
  .setView(TOKIO_CENTER, mapZoom);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const markerMain = L.marker(
  TOKIO_CENTER,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

markerMain.addTo(map);

markerMain.on('move', (evt) => {
  adForm.address.value = `${evt.latlng.lat.toFixed(5)}, ${evt.latlng.lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const addPoints = (ads) => {
  ads.forEach((offer) => {
    const regularPinIcon = L.icon(pinSetting.REGULAR);
    const marker = L.marker(
      offer.location,
      {
        icon: regularPinIcon,
      },
    );
    marker.addTo(markerGroup)
      .bindPopup(generateAd(offer));
  });
};


fetch(fetchUrl.GET)
  .then((response) => response.json())
  .then((offers) => {
    const allOffersArr = offers.slice(0, OFFERS_COUNT);
    addPoints(allOffersArr);
    filterForm.addEventListener('change', debounce(() => {
      markerGroup.clearLayers();
      addPoints(filterMapPins(allOffersArr));
    }));
    filterForm.addEventListener('reset', () => {
      markerGroup.clearLayers();
      addPoints(allOffersArr);
    });
  })
  .catch(() => {
    addErrorLoad();
  });

export {map, markerMain, markerGroup};
