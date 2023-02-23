const mail = document.querySelector(`.login-form[type="email"]`);
const password = document.querySelector(`.login-form[type="password"]`);
const button = document.querySelector(`.login-form[type="submit"]`);

const form = document.querySelector('.login-form');
//----------------1-variant---------------
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
event.preventDefault();

const formElements = event.currentTarget.elements;

const mail = formElements.email.value;
const password = formElements.password.value;

//console.log(mail, password);

if (mail === "" || password === "") {
    return alert("Будь-ласка введіть необхідні відомості!");
  }

const formData = new FormData(event.currentTarget);
formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
})
};
//----------------2-variant----------------
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const {
//       elements: { email, password }
//     } = event.currentTarget;
//     console.log(email.value, password.value);
  
//     if (email.value === "" || password.value === "") {
//         return alert("Будь-ласка введіть необхідні відомості!");
//       }
    
//       console.log(`Email: ${email.value}, 
//       Password: ${password.value}`);
//       event.currentTarget.reset();   

// });