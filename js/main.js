// Результат: целое число из диапазона "от...до"
function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  if( max <= min ) {
    throw new Error('getRandomInteger — максимальное число меньше или равно минимальному');
  }
  return Math.floor(rand);
}


// Результат: случайное число с плавающей точкой число из диапазона "от...до"
function getRandomFloat(min, max, fraction) {
  const rand = min + Math.random() * (max - min);
  if( max <= min ) {
    throw new Error('getRandomFloat — максимальное число меньше или равно минимальному');
  }
  return parseFloat(rand).toFixed(fraction);
}

const TYPE_HOUSE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FACILITIES = [
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

const greatFacilities = new Array(getRandomInteger(0, 5)).fill(null).map(() => FACILITIES);

const SIMILAR_WIZARD_COUNT = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const createObject = () => {
  return {
    author: {
      avatar: 'img/avatars/user0'+ getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: 'Заголовок',
      address: '{{location.x}}, {{location.y}}',
      price: getRandomInteger(0, 100000),
      type: getRandomArrayElement(TYPE_HOUSE),
      rooms: getRandomInteger(0, 10),
      guests: getRandomInteger(0, 100),
      checkin: getRandomArrayElement(CHECKIN_CHECKOUT),
      checkout: getRandomArrayElement(CHECKIN_CHECKOUT),
      features: getRandomArrayElement(FACILITIES),
      description: 'Новое описание',
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      lat: getRandomFloat(35.65000, 35.70000, 5),
      lng: getRandomFloat(139.70000, 139.80000, 5),
    }
  };
};

const similarObject = new Array(SIMILAR_WIZARD_COUNT).fill(null).map(() => createObject());

console.log(similarObject);