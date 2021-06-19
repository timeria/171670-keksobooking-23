import { getLocation, getRandomInteger, getRandomArrayElement } from './util.js';

const OFFERS_COUNT = 10;

const TYPE_HOUSES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const PRICE = {
  min: 0,
  max: 100000,
};

const ROOMS = {
  min: 0,
  max: 10,
};

const GUESTS = {
  min: 0,
  max: 100,
};

const LATITUDE = {
  min: 35.65000,
  max: 35.70000,
};

const LONGITUDE = {
  min: 139.70000,
  max: 139.80000,
};

const offerType = (type) => {
  if(type === 'flat') {
    return 'Квартира';
  }else if(type === 'bungalow'){
    return 'Бунгало';
  }else if(type === 'house'){
    return 'Дом';
  }else if(type === 'palace'){
    return 'Дворец';
  }else if(type === 'hotel'){
    return 'Отель';
  }
};

const generateOffer = () => {
  const CURRENT_LOCATION = getLocation(LATITUDE, LONGITUDE);
  return {
    author: {
      avatar: getRandomInteger(1, 8),
    },
    offer: {
      title: 'Заголовок',
      address: `${CURRENT_LOCATION.lat}, ${CURRENT_LOCATION.lng}`,
      price: getRandomInteger(PRICE.min, PRICE.max),
      type: getRandomArrayElement(TYPE_HOUSES),
      rooms: getRandomInteger(ROOMS.min, ROOMS.max),
      guests: getRandomInteger(GUESTS.min, GUESTS.max),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: FEATURES.slice(getRandomInteger(0, 2), getRandomInteger(3, 6)),
      description: 'Новое описание',
      photos: PHOTOS.slice(getRandomInteger(0, 1), getRandomInteger(1, 2)),
    },
    location: CURRENT_LOCATION,
  };
};

export {generateOffer, offerType};
export {OFFERS_COUNT};
