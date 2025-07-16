const txtArea = document.querySelector("#textarea");
const addBtn = document.querySelector("#buttoninput");
const recordList = document.querySelector(".record");

addBtn.addEventListener("click", listItemOfToDO);

function listItemOfToDO() {
  const todoText = txtArea.value.trim();
  if (!todoText) return;

  const recordItem = document.createElement("div");
  recordItem.classList.add("record-item-container");

  recordItem.innerHTML = `
    <span class="record-list">${todoText}</span>
    <span class="record-but">
      <button class="record-but-check">&#128505;</button>
      <button class="record-but-cross">&#10540;</button>
    </span>
    <span class="delete-btn">
      <button class="record-but-delete">&#9940;</button>
    </span>
  `;

  recordItem
    .querySelector(".record-but-delete")
    .addEventListener("click", () => {
      recordItem.remove();
    });

  recordItem
    .querySelector(".record-but-cross")
    .addEventListener("click", () => {
      const actionSpan = recordItem.querySelector(".record-but");
      actionSpan.innerHTML = `<p class="not-done">Task Not Completed</p>`;
    });

  recordItem
    .querySelector(".record-but-check")
    .addEventListener("click", () => {
      const actionSpan = recordItem.querySelector(".record-but");
      actionSpan.innerHTML = `<p class="done">Task Completed</p>`;
    });

  recordList.appendChild(recordItem);
  txtArea.value = "";
}
