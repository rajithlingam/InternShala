const API = "https://api.tvmaze.com/search/shows?q=girls";

async function getScores() {
  try {
    const res = await fetch(API);
    const data = await res.json();
    const scores = data.map((item) => item.score);
    console.log("Scores:", scores);
  } catch (err) {
    console.log("Error fetching data:", err);
  }
}

getScores();
