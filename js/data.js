const OFFERS_COUNT = 10;

const TYPES_OF_HOUSING = {
  palace: {
    name: 'Дворец',
    minPrice: 10000,
  },
  flat: {
    name: 'Комната',
    minPrice: 1000,
  },
  house: {
    name: 'Дом',
    minPrice: 5000,
  },
  bungalow: {
    name: 'Бунгало',
    minPrice: 0,
  },
  hotel: {
    name: 'Отель',
    minPrice: 3000,
  },
};

const TOKIO_CENTER = {
  lat: 35.68656,
  lng: 139.74842,
};

const pinSetting = {
  MAIN: {
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
  REGULAR: {
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
};

const fetchUrl = {
  GET: 'https://23.javascript.pages.academy/keksobooking/data',
  POST: 'https://23.javascript.pages.academy/keksobooking',
};

const keyCode = 27;

const mapZoom = 13;

export {OFFERS_COUNT, TYPES_OF_HOUSING, TOKIO_CENTER, pinSetting, fetchUrl, keyCode, mapZoom};
