let email = document.querySelector("#email");
let password = document.querySelector("#password");
let emailmsgg = document.querySelector("#emailmsgg");
let passwordmsgg = document.querySelector("#passwordmsgg");
let btn = document.querySelector("#btn");
// console.log(email.value)

btn.addEventListener("click", (e) => {
  e.preventDefault();
  passwordLenght();
  // console.log(emailChecking());
  finalmsgg();
});

function passwordLenght() {
  let value = password.value.length;
  // console.log(value);
  if (value < 8) {
    passwordmsgg.innerText = `password should be greater then 8 characer`;
    return false;
  } else {
    passwordmsgg.innerText = ``;
    return true;
  }
}
function emailChecking() {
  let len = email.value.length;
  let emailvalue = email.value;
  if (len <= 3) {
    emailmsgg.innerText = `Make sure email is more than 3 characters and has @ and a .`
    return false;
  } else {
    let a = false;
    let ch = false;
    for (let i = 0; i < len; i++) {
      if (emailvalue.charAt(i) == "a") {
        a = true;
      } else if (emailvalue.charAt(i) == "@") {
        ch = true;
      }
    }
    if(ch == false && a == false){
      emailmsgg.innerText = `your email does't contain "@" and "a"`
    } 
   else if(a == false){
      emailmsgg.innerText = `your email does't contain "a"`
    }
    else if(ch == false){
      emailmsgg.innerText = `your email does't contain "@"`
    }
    else if(ch && a){
      emailmsgg.innerText = ``;
    }
    return ch && a;
  }
}

function finalmsgg(){

  if(emailChecking() && passwordLenght()){
    emailmsgg.innerText = ``;
    passwordmsgg.innerText = `All good to go!`
    clear();
  }
}

function clear (){
  email.value = "";
  password.value = "";
}