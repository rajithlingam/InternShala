function createHelloWorld() {
  return function ansName() {
  return "Hello World";
}

}

const f = createHelloWorld();

console.log(f());                     
console.log(f("OM Sakthi OM"));       
console.log( f( {}, null, 42 ) );  

