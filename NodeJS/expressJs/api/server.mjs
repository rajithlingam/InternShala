import express from "express";

const app = express();
app.use(express.json());

const PORT = 5001;

const books = [
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
  res.send(books);
});

app.post("/addBook", (req, res) => {
  const { title, author, category, description, rating, imageUrl } = req.body;

  const newBook = {
    id: Math.floor(Math.random() * 10000),
    title,
    author,
    category,
    description,
    rating,
    imageUrl,
  };

  books.push(newBook);
  res.status(201).json(books);
});

app.put("/book/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const foundBook = books.find((b) => b.id === bookId);

  if (!foundBook) {
    return res.status(404).json({ message: "Book ID not found" });
  }

  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    foundBook[key] = req.body[key];
  });

  res.json({ message: "Book updated successfully", updated: foundBook });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is up and running on port ${PORT}`);
});
