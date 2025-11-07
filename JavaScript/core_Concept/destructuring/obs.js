// --------- EXAMPLE 4 ---------
// EXTRACT VALUES FROM OBJECTS

const person_1 = {
  Firstname: "Anbumani",
  Mother: "Sarojini",
  Father: "DharamaLingam",
  Age: 55,
  Job: "Dying Master",
};
const person_2 = {
  firstName: "Rajithlingam",
  mother: "Vishalakshi",
  father: "Anbumani",
  age: 22,
};

const { Firstname, Mother, Father, Age, Job = "unemployed" } = person_1;
console.log(
  `Hi I'm: ${Firstname} S\\O ${
    "MRS." + Mother + " and MR." + Father
  } My Age:${Age} and My_Job: ${Job}`
);

// --------- EXAMPLE 5 ---------
// DESTRUCTURING IN FUNCTION PARAMETERS

function person({ firstName, mother, father, age, job = "unemployed" }) {
  console.log(
    `Hi I'm: ${firstName} S\\O ${
      "MRS." + mother + " and MR." + father
    } My Age:${age} and My_Job: ${job}`
  );
}
person(person_2);
