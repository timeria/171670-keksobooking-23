// Результат: целое число из диапазона "от...до"
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  if( max <= min ) {
    return false;
  }
  return Math.floor(rand);
}
randomInteger(1, 3);


// Результат: случайное число с плавающей точкой число из диапазона "от...до"
function randomFloat(min, max, fraction) {
  let rand = min + Math.random() * (max + 1 - min);
  if( max <= min ) {
    return false;
  }
  return parseFloat(rand).toFixed(fraction);
}

randomFloat(1, 3, 1);

