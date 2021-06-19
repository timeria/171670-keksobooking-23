import {offerType} from './data.js';
import {typeFeatures, renderPhotos} from './util.js';

const mapCanvas = document.querySelector('#map-canvas');

const mapCanvasCard = document.querySelector('#card').content;

const mapCanvasTemplate = mapCanvasCard.querySelector('.popup');

const renderCards = (element) => {
  element.forEach(({author, offer}) => {
    const mapCanvasElement = mapCanvasTemplate.cloneNode(true);

    const popupFeatures = mapCanvasElement.querySelector('.popup__features');

    const popupPhotos = mapCanvasElement.querySelector('.popup__photos');

    mapCanvasElement.querySelector('.popup__title').textContent = offer.title;

    mapCanvasElement.querySelector('.popup__text--address').textContent = offer.address;

    mapCanvasElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

    mapCanvasElement.querySelector('.popup__type').textContent = `${offerType(offer.type)}`;

    mapCanvasElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

    mapCanvasElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

    typeFeatures(offer.features, popupFeatures);

    if (offer.description !== 0) {
      mapCanvasElement.querySelector('.popup__description').textContent  = offer.description;
    } else {
      mapCanvasElement.querySelector('.popup__description').classList.add('hidden');
    }

    renderPhotos(offer.photos, popupPhotos);

    mapCanvasElement.querySelector('.popup__avatar').setAttribute('src', `img/avatars/user0${author.avatar}.png`);

    mapCanvas.appendChild(mapCanvasElement);
  });
};

export {renderCards};
