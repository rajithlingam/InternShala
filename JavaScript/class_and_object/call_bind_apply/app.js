const obj1 = {
  name: "RAJITHLINGAM",
  greet: function () {
    console.log(`Hi This is ${obj1.name} and Vanakkam ${this.name}`);
  },
};

const obj2 = {
  name: "AnbuMani",
};

obj1.greet.call(obj2);

obj1.greet.apply(obj2);

const boundGreet = obj1.greet.bind(obj2);
boundGreet();