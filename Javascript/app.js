const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

//This function checks the inputs of the form
function checkInput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === '')
  {
    //show error
    //add error class
    setErrorFor(username, "Username cannot be blank");
  } else
  {
    //add success class
    setSuccessFor(username);
  }

  //checking the email
  if (emailValue === ''){
    setErrorFor(email, 'Email cannot be blank');
  }else if(!isEmail(emailValue)){
    setErrorFor(email, 'Email is not valid');
  }else{
    setSuccessFor(username);
  }

  //check password
  if(passwordValue ===''){
    setError(password, 'Password cannot be blank');
  }else{
    setSuccessFor(password);
  }

  //check password2
  if(password2Value === ''){
    setErrorFor(password2,'Password2 cannot be blank');
  } else if (passwordValue !== password2Value2){
    setErrorFor(password2, 'Password does not match');
  }else{
    setSuccessFor(password2);
  }

  //code to show success message after successful submit
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;//the.form-control
    const small = formControl.querySelector('small');

    //adding error message inside small
    small.innerHTMLText = message;

    //adding error class
    formControl.className = 'form-control error'; 
}
  
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return//regex here...will comeback on it
}

