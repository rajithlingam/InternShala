function Intro() {
  const myData = {
    myName: "RL-75",
    myDob: "02-December-2002",
    myAge: "22",
    myEyeType: "Amber eyes",
  };

  return (
    <div>
      {Object.entries(myData).map(([key, value], index) => (
        <div key={index}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
}
export default Intro;
