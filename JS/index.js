
// Getting the DOM elements
const dogimage = document.getElementById('img');
const name = document.getElementById('name');
const gender = document.getElementById('gender');
const age = document.getElementById('age');
const nationality = document.getElementById('nationality');
const predict = document.querySelector('#btn');
const ip = document.getElementById('ip');
const boredbtn = document.getElementById('bored');
const randomactivity = document.getElementById('activity');
const loginbtn = document.getElementById('login-btn');
const signupbtn = document.getElementById('signup-btn');
const loginform = document.getElementById('login-form');
const signupform = document.getElementById('signup-form');
const usernameinput = document.getElementById('user');
const passinput =  document.getElementById('password');
const login_btn = document.getElementById('lcontinue-btn');
const signup_btn = document.getElementById('scontinue-btn');
const fnameinput = document.getElementById('fullname');
const predictionpage = document.querySelector('.container');
const toggle = document.querySelector('.toggle');
const loginuserinput = document.getElementById('luser');
const loginpassinput = document.getElementById('lpassword');
const msg = document.getElementById('message');






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

// function to get the ip address
let ipaddress = () => {
  axios.get("https://api.ipify.org/?format=json").then((response) => {
        const ip_address = response.data.ip;
        ip.textContent = "IP: " +ip_address;
      }).catch((error) =>console.error(error));
};

// function to get a random activity
let activity = () => {
  axios.get("https://www.boredapi.com/api/activity").then((response) => {
        const r_activity = response.data.activity;
        randomactivity.value = r_activity;
      }).catch((error) =>console.error(error));
};

//Signup function
let signupfunction = () => {
  const fullname = fnameinput.value;
  const user_name = usernameinput.value;
  const pass = passinput.value;
  var person = {
    name: user_name,
    pass: pass
  };
signupform.classList.toggle("hidden");
predictionpage.classList.remove("hidden");
toggle.classList.add("hidden");
localStorage.setItem(user_name,JSON.stringify(person));
};

// login function
let loginfunction = () => {
const loginuser = loginuserinput.value;
const loginpass = loginpassinput.value;
const p =JSON.parse((localStorage.getItem(loginuser)));
if(p==null){
  msg.textContent = "Access Denied, Try Again!"
  msg.style.color = "red";
}
else if(loginuser == p.name && loginpass == p.pass){
  loginform.classList.toggle("hidden");
  predictionpage.classList.remove("hidden");
  toggle.classList.add("hidden");

}

else{
msg.textContent = "Access Denied, Try Again!"
msg.style.color = "red";
}

};

// buttons to toggle between signup and login form
loginbtn.addEventListener('click', () => {
signupform.classList.toggle("hidden");
loginform.classList.toggle("hidden");
});

signupbtn.addEventListener('click', () => {
signupform.classList.toggle("hidden");
loginform.classList.toggle("hidden");
});


// buttons to login and signup
login_btn.addEventListener("click", () => {
  const user_name = usernameinput.value;
  const pass = passinput.value;
  loginfunction();
});

signup_btn.addEventListener("click", () => {
  signupfunction();

});


dog();
ipaddress();
// Setting the predict button event listener
predict.addEventListener("click", () => {
// Getting the value given by the user
const username = name.value;
usergender(username);
userage(username);
usernationality(username);
});

// setting "bored" button event listener
boredbtn.addEventListener("click", () => {
activity();
});

















// fetch('https://api.genderize.io/?name=rio')
//   .then((response) => response.json())
//   .then((data) => console.log(data['gender']));
