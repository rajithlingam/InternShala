function simplePromiseDemo(success) {

    console.log( "promise is pending..." );

  return new Promise((itsTrue, itsFalse) => {
    setTimeout(() => {
      if (success) {
        itsTrue(`Test Result: ${success} its Full-Filed.`);
      } else {
        itsFalse(`Test Result: ${success} its Rejected.`);
      }
    }, 3000);
  });
}
simplePromiseDemo(true).then((output) => console.log(output));
setTimeout(() => {
  simplePromiseDemo(false).catch((output) => console.log(output));
}, 5000);

//console.log("idu Kadavul Vaaku! ஓம் நற்பவி 🌟");
