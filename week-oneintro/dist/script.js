let person = {
  firstName: "Daoquan", // String
  lastName: "Li", //String
  age: 26, // Number
  dob: new Date(1996, 1, 29), // Date
  isSmoking: false, // Boolean
  degrees: ["BE", "ME", "MA", "EdD"], // Arrary
  courseTaught: { courseName: "mstu5003", year: 2022 } // Object
};

let persons = [
  {
    firstName: "Daoquan", // String
    lastName: "Li", //String
    isSmoking: false // Boolean
  },
  {
    firstName: "JIN", // String
    lastName: "Kuwata", //String
    isSmoking: null // Boolean
  },
  {
    firstName: "Yiran", // String
    lastName: "Du", //String
    isSmoking: false // Boolean
  },
  {
    firstName: "David", // String
    lastName: "Zikovitz", //String
    isSmoking: null // Boolean
  }
];

// the onclick event triggers a method showResult
function showResult() {
  
  console.log(person.dob); // print the dob to console
  console.log(person.firstName + "'s DOB is: " + person.dob.toDateString());  // print more with the combo of properties.
  document.querySelector("#displayResult").innerHTML =
    person.firstName + "'s DOB is: " + person.dob.toDateString(); // print to the web page.

}