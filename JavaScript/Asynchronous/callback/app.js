function print(callPrint) {
  const Me = prompt("Kindly Enter Your Name:");
  const dad = prompt("Kindly Enter Your Daddy Name:");
  const Mom = prompt( "Kindly Enter Your Mommy Name:" );
  return callPrint(Me, dad, Mom);
}

function callLog(myName, daddyName, MommyName) {
  document.querySelector(
    "#output"
  ).innerHTML = `Hi I'm <span class="name">${myName}</span> Son-Of Thiru <span class="name">${daddyName}</span> And ThiruMathi <span class="name">${MommyName}</span>`;
}

print(callLog);
