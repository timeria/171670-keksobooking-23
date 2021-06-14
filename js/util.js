const LATITUDE = {
    min: 35.65000,
    max: 35.70000,
};
  
const LONGITUDE = {
    min: 139.70000,
    max: 139.80000,
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

export {getRandomInteger};
export {getRandomFloat};
export {getRandomArrayElement};
export {getLocation};
