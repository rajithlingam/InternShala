function fetchPromise() {
  return new Promise((isTrue, isFalse) => {
    setTimeout(() => {
      let API = fetch("https://dummyjson.com/products/1");
      API = API.then((response) => response.json());

      console.log(API);
      API.then((apiJson) => {
        console.log(apiJson.reviews?.[1]);
        isTrue("Done");
      }).catch((err) => {
        console.error("Fetch failed", err);
        isFalse("Failed");
      });
    }, 3000);
  });
}

fetchPromise()
  .then((res) => console.log("Promise Resolved:", res))
  .catch((err) => console.log("Promise Rejected:", err));
