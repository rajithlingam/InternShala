import express from "express";

const app = express();

const PORT = 5100;

app.listen(PORT, () => {
  console.log(`🚀 Server is up and running on port ${PORT}`);
});
