
// Getting the DOM elements
const dogimage = document.getElementById('img');
const name = document.getElementById('name');
const gender = document.getElementById('gender');
const age = document.getElementById('age');
const nationality = document.getElementById('nationality');
const predict = document.querySelector('.btn');

// Inializing functions

// function to get dog images
let dog = () => {fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => dogimage.src=data["message"]
);};

// function to get user's gender
let usergender = (username) => {fetch('https://api.genderize.io/?name='+username+'')
  .then((response) => response.json())
  .then((data) => gender.value=data["gender"]
);

};
// function to get user's age
let userage = (username) => {fetch('https://api.agify.io/?name='+username+'')
  .then((response) => response.json())
  .then((data) => age.value=data["age"]
);

};
// function to get user's nationality
let usernationality = (username) => {fetch('https://api.nationalize.io/?name='+username+'')
  .then((response) => response.json())
  .then((data) => nationality.value = data["country"][0]["country_id"] + " ," + data["country"][1]["country_id"]
);

};



dog();
// Setting the button event listener
predict.addEventListener("click", () => {
// Getting the value given by the user
const username = name.value;
usergender(username);
userage(username);
usernationality(username);
});


















// fetch('https://api.genderize.io/?name=rio')
//   .then((response) => response.json())
//   .then((data) => console.log(data['gender']));
