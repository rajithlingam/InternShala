/*Synchronous || Blocking */
let num = (numBlock) => {
  const userData = {
    1: { name: "jhon", age: "41", id: "1" },
    2: { name: "smith", age: "26", id: "2" },
  };
  return userData[numBlock];
};

let getBlock = num(2);
console.log(getBlock);

/* ------------------------- EXPORT ------------------------- */
module.export = {
  numb: numb,
};
/* ------------------------- EXPORT ------------------------- */

/* Asynchronous || Non-Blocking */

let numb = (aNumBlock, callBack) => {
  const userDetail = {
    1: { name: "jhon", age: "41", id: "1" },
    2: { name: "smith", age: "26", id: "2" },
  };
  setTimeout(() => {
    callBack(userDetail[aNumBlock]);
  }, 2000);
};

numb(1, (userCall) => {
  console.log(userCall);
});

/* ------------------------- EXPORT ------------------------- */

/* ------------------------- EXPORT ------------------------- */
