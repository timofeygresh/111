function createCounter() {
  let count = 0;
  function increment() {
    count++; 
    return count;
  }
  return increment;
}
let counter = createCounter();
console.log('1'); 
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
///////////
function createRandomNumberGenerator() {
let result = []; 
  function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 50) + 1; 
    if (result.includes(randomNumber)) {
      return 'Это число уже есть в массиве!';
    }
    result.push(randomNumber); 
    return result;
  }
  return generateRandomNumber;
}

let randomNumberGenerator = createRandomNumberGenerator();
console.log('2'); 
console.log(randomNumberGenerator()); // [42]
console.log(randomNumberGenerator()); // [42, 17]
console.log(randomNumberGenerator()); // [42, 17, 35]
console.log(randomNumberGenerator()); // [42, 17, 35, 23]
console.log(randomNumberGenerator()); // [42, 17, 35, 23, 49]
console.log(randomNumberGenerator()); // "Это число уже есть в массиве"
///////////