const users = {
  name: ["sdskdlcmc", "dmnlqsxqsxlkn", "djqocnccjcpqij", "smco;scmskc"],
  age: [21, 25, 30, 28],
  dob: ["2003-01-15", "1999-07-09", "1994-03-28", "1996-12-11"],
  gender: ["Male", "Female", "Other", "Male"],
};

users.name.map((name, index) => {
  console.log(`User ${index + 1}`);
  console.log("Name:", name);
  console.log("Age:", users.age[index]);
  console.log("DOB:", users.dob[index]);
  console.log("Gender:", users.gender[index]);
  console.log("--------");
});
