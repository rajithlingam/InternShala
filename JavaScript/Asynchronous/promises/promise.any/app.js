function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error from fetchData1");
    }, 1000); // Reject after 1 second
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from fetchData2");
    }, 2000); // Resolve after 2 seconds
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from fetchData3");
    }, 3000); // Resolve after 3 seconds
  });
}

function fetchAnyData() {
  Promise.any([fetchData1(), fetchData2(), fetchData3()])
    .then((result) => {
      console.log("First successful response:", result);
    })
    .catch((error) => {
      console.error("All Promises rejected:", error);
    });
}

fetchAnyData();
