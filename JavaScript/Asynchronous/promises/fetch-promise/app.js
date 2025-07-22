const API = fetch("https://dummyjson.com/products/1");
const apiJson = API.then((response) =>
  response.json().then((data) => console.log(data.reviews[0]))
);
apiJson.catch((err) => console.error("Error:", err));
