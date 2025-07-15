const API_URL = "https://dummyjson.com/comments";

const fetchAndLogComments = async () => {
  try {
    const response = await fetch(API_URL);
    const { comments } = await response.json();
    let div = document.querySelector("#comment-container");
    comments.map(({ id, user, body, likes }) => {
      if (likes >= 5) {
        let childDiv = document.createElement("div");
        childDiv.innerHTML = `<p>
       <span">Likes:${likes}<br></span> 
        <span>Comment ID: ${id}<br></span> 
       <span>User: @${user.username}<br></span> 
        <span>Comment: ${body}</span>
          </p>`;
        div.appendChild(childDiv);
        // console.log(`Likes:${likes}`);
        // console.log(`Comment ID: ${id}`);
        // console.log(`User: @${user.username}`);
        // console.log(`Comment: ${body}`);
      }
    });
  } catch (error) {
    console.error("Failed to fetch comments:", error);
  }
};

fetchAndLogComments();
