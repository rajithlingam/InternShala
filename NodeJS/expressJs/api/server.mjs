import express from "express";

const app = express();

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server is up and running on port ${PORT}`);
});

const book = [
  {
    id: 10,
    title: "DDLJ",
    author: "Aditya Chopra",
    category: "Romance",
    description: "Classic Bollywood romance.",
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
  },
];

app.get("/", (req, res) => {
  res.send("I'm Learning nodeJs-In-expressJs");
});

app.get("/book", (req, res) => {
  res.send(book);
});
