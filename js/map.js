import {adForm, togglePageActiveState, addErrorLoad} from './form.js';
import {OFFERS_COUNT, TOKIO_CENTER, pinSetting, fetchUrl} from './data.js';
import {generateAd} from './offer.js';

const mainPinIcon = L.icon(pinSetting.MAIN);

togglePageActiveState(true);

const map = L.map('map-canvas')
  .on('load', () => {
    togglePageActiveState(false);
  })
  .setView(TOKIO_CENTER, 13);

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


fetch(fetchUrl.GET)
  .then((response) => response.json())
  .then((offers) => {
    offers.slice(0, OFFERS_COUNT).forEach((offer) => {
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
  .catch(() => {
    addErrorLoad();
  });

export {map, markerMain};
