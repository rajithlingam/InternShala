const {num, numb} = require("./bloking_&_Non-bloking");

console.log(num(2));

numb(1, (userCall) => {
  console.log(userCall);
});
