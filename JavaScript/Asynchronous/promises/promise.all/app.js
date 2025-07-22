function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from fetchData1");
    }, 1000); // 1 second
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from fetchData2");
    }, 2000); // 2 seconds
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from fetchData3");
    }, 3000); // 3 seconds
  });
}

function fetchAllData() {
  Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((results) => {
      console.log(results); // ["Data from fetchData1", "Data from fetchData2", "Data from fetchData3"]
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Run the function
fetchAllData();
