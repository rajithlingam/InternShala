console.log("functional Hoisting;");

//learning();

//function diclaration
// function learning(user) {
//   console.log("print-1: " + user);
//   user = "8*3=24";
//   console.log("print-2: " + user);
// }
//learning();

// -----------------------------------------------------------------------

//function exprection
//learning();
let learning = (user) => {
  console.log(user);
  user = "work 8hrs, other-stuff's 8hrs, sleep 8hrs.";
  console.log(user);
};
learning();
