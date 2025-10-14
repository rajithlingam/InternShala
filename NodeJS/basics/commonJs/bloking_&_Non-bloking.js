/*Synchronous || Blocking */
let num = (numBlock) => {
  const userData = {
    1: { name: "jhon", age: "41", id: "1" },
    2: { name: "smith", age: "26", id: "2" },
  };
  return userData[numBlock];
};

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

/* ------------------------- EXPORT ------------------------- */
module.exports = {
  num,
  numb,
};
/* ------------------------- EXPORT ------------------------- */
