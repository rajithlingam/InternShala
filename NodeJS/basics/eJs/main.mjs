import { num, numb } from "./bloking_&_Non-bloking.js";

console.log(" sync:", num(1));
numb(2, (userCall) => {
  console.log("async:", userCall);
});
