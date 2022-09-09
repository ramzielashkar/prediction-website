
// Getting the DOM elements
const dogimage = document.getElementById('img');
const name = document.getElementById('name');
const gender = document.getElementById('gender');
const age = document.getElementById('age');
const nationality = document.getElementById('nationality');
const predict = document.querySelector('.btn');

// Inializing functions
let dog = () => {fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => dogimage.src=data["message"]
);};


// Setting the button event listener
predict.addEventListener("click", () => {
  console.log("hello");
});


















// fetch('https://api.genderize.io/?name=rio')
//   .then((response) => response.json())
//   .then((data) => console.log(data['gender']));
