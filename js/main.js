// Результат: целое число из диапазона "от...до"
function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  if( max <= min ) {
    throw new Error('getRandomInteger — максимальное число меньше или равно минимальному');
  }
  return Math.floor(rand);
}
getRandomInteger(1, 3);


// Результат: случайное число с плавающей точкой число из диапазона "от...до"
function getRandomFloat(min, max, fraction) {
  const rand = min + Math.random() * (max - min);
  if( max <= min ) {
    throw new Error('getRandomInteger — максимальное число меньше или равно минимальному');
  }
  return parseFloat(rand).toFixed(fraction);
}

getRandomFloat(1.1, 2.3, 2);

