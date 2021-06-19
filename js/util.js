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

const getLocation =  (lat, lng) => ({
  lat: getRandomFloat(lat.min, lat.max, 5),
  lng: getRandomFloat(lng.min, lng.max, 5),
});

const typeFeatures = ((items, container) => {
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

});

const renderPhotos = ((items, container) => {
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
});

export {getRandomInteger, getRandomArrayElement, getLocation, typeFeatures, renderPhotos};
