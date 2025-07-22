const promises = new Promise((itsTrue, itsFalse) => {
  let TestResult;
  setTimeout(() => {
    TestResult = true;
    if (TestResult) {
      itsTrue(`Test Result: ${TestResult}`);
    } else {
      itsFalse(`Test Result: ${TestResult}`);
    }
  }, 3000);
});

promises.then((output) => console.log(output));
promises.catch((output) => console.log(output));

console.log("idu Kadavul Vaaku! ஓம் நற்பவி 🌟");
