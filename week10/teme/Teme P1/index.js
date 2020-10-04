//creare formular cu DOM manipulation

const createform = document.getElementById('myForm');

const labelUserName = document.createElement('label');
labelUserName.setAttribute("id", "labelUserName");
labelUserName.innerHTML = "USERNAME: ";
createform.appendChild(labelUserName);

const linebreak = document.createElement('br');
createform.appendChild(linebreak);

//error user name
const errUserName = document.createElement('p');
errUserName.setAttribute('id', 'errUserName');
createform.appendChild(errUserName);

//creare input username
const input1 = document.createElement('input');
input1.setAttribute("type", "text");
input1.setAttribute("id", "username");
createform.appendChild(input1);

const linebreak1 = document.createElement('br');
createform.appendChild(linebreak1);

const label2 = document.createElement('label');
label2.innerHTML = "(Must pe at least 4 characters , letters and numbers only.) ";
createform.appendChild(label2);

const linebreak2 = document.createElement('br');
createform.appendChild(linebreak2);


const label3 = document.createElement('label');
label3.innerHTML = "EMAIL ADDRESS:";
label3.setAttribute("id", "labelEmail");
createform.appendChild(label3);

const linebreak3 = document.createElement('br');
createform.appendChild(linebreak3);

// error Email
const errorEmail = document.createElement('p');
errorEmail.setAttribute('id', 'errEmail');
createform.appendChild(errorEmail);

//creare input email
const input2 = document.createElement('input');
input2.setAttribute("type", "email");
input2.setAttribute("id", "email");
createform.appendChild(input2);

const linebreak4 = document.createElement('br');
createform.appendChild(linebreak4);

const label4 = document.createElement('label');
label4.innerHTML = "FIRST NAME:";
createform.appendChild(label4);

const linebreak5 = document.createElement('br');
createform.appendChild(linebreak5);

// error first name
const errorFirstName = document.createElement('p');
errorFirstName.setAttribute('id', 'errFirstName');
createform.appendChild(errorFirstName);

//creare input firstname
const input3 = document.createElement('input');
input3.setAttribute("type", "text");
input3.setAttribute("id", "firstname");
createform.appendChild(input3);

const linebreak6 = document.createElement('br');
createform.appendChild(linebreak6);

const label5 = document.createElement('label');
label5.innerHTML = "LAST NAME:";
createform.appendChild(label5);

const linebreak7 = document.createElement('br');
createform.appendChild(linebreak7);

// error last name
const errorLastName = document.createElement('p');
errorLastName.setAttribute('id', 'errLastName');
createform.appendChild(errorLastName);

//creare input last name
const input4 = document.createElement('input');
input4.setAttribute("type", "text");
input4.setAttribute("id", "lastname");
createform.appendChild(input4);

const label6 = document.createElement('label');
label6.innerHTML = "(Must be input.)";
createform.appendChild(label6);

const linebreak8 = document.createElement('br');
createform.appendChild(linebreak8);

const label7 = document.createElement('label');
label7.innerHTML = "NICKNAME:";
createform.appendChild(label7);

// error nick name
const errorNickName = document.createElement('p');
errorNickName.setAttribute('id', 'errNickName');
createform.appendChild(errorNickName);

//creare input nickname
const input5 = document.createElement('input');
input5.setAttribute("type", "text");
input5.setAttribute("id", "nickname");
createform.appendChild(input5);

const linebreak9 = document.createElement('br');
createform.appendChild(linebreak9);

const label8 = document.createElement('label');
label8.innerHTML = "PHONE:";
label8.setAttribute = ("id", "labelPhone");
createform.appendChild(label8);

// error phone
const errorPhone = document.createElement('p');
errorPhone.setAttribute('id', 'errPhone');
createform.appendChild(errorPhone);


//creare input phone
const input6 = document.createElement('input');
input6.setAttribute("type", "tel");
input6.setAttribute("id", "phone");
createform.appendChild(input6);

const linebreak10 = document.createElement('br');
createform.appendChild(linebreak10);

const label9 = document.createElement('label');
label9.innerHTML = "(Must be at least 10 characters, numbers only.)";
createform.appendChild(label9);

const linebreak11 = document.createElement('br');
createform.appendChild(linebreak11);

//creare input radio
const input7 = document.createElement('input');
input7.setAttribute("type", "radio");
input7.setAttribute("name", "getsite");
input7.setAttribute("value", "GIMME A SITE!");
createform.appendChild(input7);

const label10 = document.createElement('label');
label10.innerHTML = "GIMME A SITE!";
createform.appendChild(label10);

const linebreak12 = document.createElement('br');
createform.appendChild(linebreak12);

//creare input radio
const input8 = document.createElement('input');
input8.setAttribute("type", "radio");
input8.setAttribute("name", "getsite");
input8.setAttribute("value", "JUST AN USERNAME, PLEASE!");
createform.appendChild(input8);

const label11 = document.createElement('label');
label11.innerHTML = "JUST AN USERNAME, PLEASE!";
createform.appendChild(label11);

const linebreak13 = document.createElement('br');
createform.appendChild(linebreak13);

const submitBtn = document.createElement('input');
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "NEXT");
submitBtn.setAttribute("id", "myBtn");
submitBtn.setAttribute("submit", "Validate()");
createform.appendChild(submitBtn);


// ---------------------------------------------------------
// validare formular

  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const firstname = document.getElementById('firstname');
  const lastname = document.getElementById('lastname');
  const nickname = document.getElementById('nickname');
  const phone = document.getElementById('phone');

  const errUserName1 = document.getElementById('errUserName');
  const errEmail1 = document.getElementById('errEmail');
  const errFirstName1 = document.getElementById('errFirstName');
  const errLastName1 = document.getElementById('errLastName');
  const errNickName1 = document.getElementById('errNickName');
  const errPhone1 = document.getElementById('errPhone');

  // adugare evenimente cand input value este valid

username.addEventListener("input", userValid, true);
email.addEventListener("input", emailValid, true);
firstname.addEventListener("input", firstnameValid, true);
lastname.addEventListener("input", lastnameValid, true);
nickname.addEventListener("input", nicknameValid, true);
phone.addEventListener("input", phoneValid, true);

// adaugare eroare cand input-uturile nu sunt valide
  function Validate() {
    
  if (username.value == "" || username.value.length <4) {
    errUserName1.textContent = "Introduceti un user valid";
    errUserName1.style.border = '1px solid red';
    errUserName1.style.backgroundColor = 'pink';
    return false;
  }
  if (email.value == "") {
    errEmail1.textContent = "Introduceti un email valid";
    errEmail1.style.border = '1px solid red';
    errEmail1.style.backgroundColor = 'pink';
    return false;
  }
  
  
  if (firstname.value == "") {
    errFirstName1.textContent = "Introduceti un First Name";
    errFirstName1.style.border = '1px solid red';
    errFirstName1.style.backgroundColor = 'pink';
    return false;
  }
  if (lastname.value == "") {
    errLastName1.textContent = "Introduceti un Last Name";
    errLastName1.style.border = '1px solid red';
    errLastName1.style.backgroundColor = 'pink';
    return false;
  }
  if (nickname.value == "") {
    errNickName1.textContent = "Introduceti un nickname";
    errNickName1.style.border = '1px solid red';
    errNickName1.style.backgroundColor = 'pink';
    return false;
  }
  if (phone == "" || isNaN(phone) || phone.value.length < 10) {
    errPhone1.textContent = "Introduceti un numar de telefon valid";
    errPhone1.style.border = '1px solid red';
    errPhone1.style.backgroundColor = 'pink';
    return false;
  }
}

// eliminare eroare cand input-uturile sunt valide
function userValid () {
  if (username.value != "" && username.value.length > 4) {
    errUserName1.innerHTML = "";
    errUserName1.style.backgroundColor = '';
    errUserName1.style.border = '';
    return true;
}
}
function emailValid () {
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (email.value != "" && email.value.match(mailformat) ) {
  errEmail1.innerHTML = "";
  errEmail1.style.border = '';
  errEmail1.style.backgroundColor = '';
  return true;
}
}
function firstnameValid () {
  if (firstname != "") {
    errFirstName1.innerHTML = "";
    errFirstName1.style.border = '';
    errFirstName1.style.backgroundColor = '';
    return true;
}
}
function lastnameValid () {
  if (firstname.value != "") {
    errLastName1.innerHTML = "";
    errLastName1.style.border = '';
    errLastName1.style.backgroundColor = '';
    return true;
}
}
function nicknameValid () {
  if (firstname.value != "") {
    errNickName1.innerHTML = "";
    errNickName1.style.border = '';
    errNickName1.style.backgroundColor = '';
    return true;
}
}
function phoneValid () {
  if (phone.value != "" && phone.value.length >= 10) {
    errPhone1.innerHTML = "";
    errPhone1.style.border = '';
    errPhone1.style.backgroundColor = '';
    return true;
}
}

