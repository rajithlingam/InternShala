const studentForm = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");

let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = null;

function renderTable() {
  tableBody.innerHTML = "";
  students.forEach((student, index) => {
    const row = `
      <tr>
        <td class="px-4 py-2">${student.name}</td>
        <td class="px-4 py-2">${student.studentId}</td>
        <td class="px-4 py-2">${student.email}</td>
        <td class="px-4 py-2">${student.contact}</td>
        <td class="px-4 py-2 space-x-2 text-center">
          <button onclick="editStudent(${index})" class="bg-yellow-400 px-2 py-1 rounded">Edit</button>
          <button onclick="deleteStudent(${index})" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </td>
      </tr>`;
    tableBody.innerHTML += row;
  });
}

function saveToLocal() {
  localStorage.setItem("students", JSON.stringify(students));
}

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const studentId = document.getElementById("studentId").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();

  if (!name || !studentId || !email || !contact)
    return alert("All fields are required");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!/^[a-zA-Z ]+$/.test(name))
    return alert("Name should contain only letters.");
  if (!/^\d+$/.test(studentId))
    return alert("Student ID should contain only numbers.");
  if (!emailRegex.test(email)) return alert("Invalid email format.");
  if (!/^\d+$/.test(contact))
    return alert("Contact number should contain only numbers.");

  const newStudent = { name, studentId, email, contact };

  if (editIndex !== null) {
    students[editIndex] = newStudent;
    editIndex = null;
  } else {
    students.push(newStudent);
  }

  saveToLocal();
  renderTable();
  studentForm.reset();
});

function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("studentId").value = student.studentId;
  document.getElementById("email").value = student.email;
  document.getElementById("contact").value = student.contact;
  editIndex = index;
}

function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this record?")) {
    students.splice(index, 1);
    saveToLocal();
    renderTable();
  }
}

renderTable();
