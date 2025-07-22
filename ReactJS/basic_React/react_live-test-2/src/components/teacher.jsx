const data = {
  teacher: ["samarth", "ankitha"],
  studentsSamarth: ["Rajithlingam", "chandan", "ankith", "anshu"],
  studentsAnkitha: ["krish", "manoj"],
};

function TeacherStudent() {
  return (
    <div>
      {data.teacher.map((teacher) => (
        <div>
          <h3>{teacher}</h3>
          <ul>
            {data["students" + teacher.charAt(0).toUpperCase() + teacher.slice(1)].map((student) => (
              <li>{student}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TeacherStudent;
