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

const LATITUDE = {
  min: 35.65000,
  max: 35.70000,
};

const LONGITUDE = {
  min: 139.70000,
  max: 139.80000,
};

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

// Результат: целое число из диапазона "от...до"
const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  if( max <= min ) {
    throw new Error('getRandomInteger — максимальное число меньше или равно минимальному');
  }
  return Math.floor(rand);
};

// Результат: случайное число с плавающей точкой число из диапазона "от...до"
const getRandomFloat = (min, max, fraction) => {
  const rand = min + Math.random() * (max - min);
  if( max <= min ) {
    throw new Error('getRandomFloat — максимальное число меньше или равно минимальному');
  }
  return parseFloat(rand).toFixed(fraction);
};

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const getLocation =  () => ({
  lat: getRandomFloat(LATITUDE.min, LATITUDE.max, 5),
  lng: getRandomFloat(LONGITUDE.min, LONGITUDE.max, 5),
});

const generateOffer = () => {
  const CURRENT_LOCATION = getLocation();
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
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

const listOffer = new Array(OFFERS_COUNT).fill(null).map(generateOffer);

listOffer;
