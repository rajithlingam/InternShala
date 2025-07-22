function processNumbers(numbers, callback) {
	callback(numbers);
}

function square(number) {
  let result = [];
  for (let index = 0; index < number.length; index++) {
    result.push(number[index] * number[index]);
  }
  console.log(result);
}

const numbers = [1, 2, 3, 4, 5];
processNumbers(numbers, square);
