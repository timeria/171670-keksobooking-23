import {TYPES_OF_HOUSING} from './data.js';

const mapCard = document.querySelector('#card');

const addFeatures = (items, container) => {
  if (items) {
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      const element = document.createElement('li');
      element.className = `popup__feature popup__feature--${item}`;
      fragment.appendChild(element);
    });

    container.appendChild(fragment);
  } else {
    container.classList.add('hidden');
  }

};

const addPhotos = (items, container) => {
  if (items) {
    const photoItem = container.querySelector('.popup__photo');
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      const photo = photoItem.cloneNode(true);
      photo.src = item;
      fragment.appendChild(photo);
    });

    container.appendChild(fragment);
  } else {
    container.classList.add('hidden');
  }
};

const generateAd = ({offer, author}) => {

  const offerClone = mapCard.content.querySelector('.popup').cloneNode(true);

  offerClone.querySelector('.popup__title').textContent = offer.title;

  offerClone.querySelector('.popup__text--address').textContent = offer.address;

  offerClone.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

  offerClone.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[offer.type].name;

  offerClone.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  offerClone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  addFeatures(offer.features, offerClone.querySelector('.popup__features'));

  if (offer.description) {
    offerClone.querySelector('.popup__description').textContent  = offer.description;
  } else {
    offerClone.querySelector('.popup__description').classList.add('hidden');
  }

  addPhotos(offer.photos, offerClone.querySelector('.popup__photos'));

  offerClone.querySelector('.popup__avatar').src = author.avatar;


  return offerClone;

};

export {generateAd};
