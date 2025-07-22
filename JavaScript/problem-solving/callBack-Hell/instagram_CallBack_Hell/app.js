function fstcall() {
  setTimeout(() => {
    console.log("Img Uploaded!");
    sndcall();
  }, 4000);
}

function sndcall() {
  setTimeout(() => {
    console.log("Filter was added!");
    trdcall();
  }, 2000);
}

function trdcall() {
  setTimeout(() => {
    console.log("Caption was Added!");
    fthcall();
  }, 5000);
}

function fthcall() {
  setTimeout(() => {
    console.log("Post Uploaded!");
  }, 3000);
}

fstcall()