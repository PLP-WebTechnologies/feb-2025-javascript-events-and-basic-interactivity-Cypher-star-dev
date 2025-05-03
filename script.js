var btn = document.getElementById('btn');
var secret = document.getElementById('secret');
var timer;

btn.onclick = function() {
  btn.innerHTML = 'Clicked!';
  btn.style.backgroundColor = 'green';
  setTimeout(function() {
    btn.innerHTML = 'Click Me!';
    btn.style.backgroundColor = '#007bff';
  }, 1000);
};

btn.ondblclick = function() {
  showSecret();
};

btn.onmousedown = function() {
  timer = setTimeout(showSecret, 800);
};

btn.onmouseup = function() {
  clearTimeout(timer);
};

btn.onmouseleave = function() {
  clearTimeout(timer);
};

function showSecret() {
  secret.style.display = 'block';
  setTimeout(function() {
    secret.style.display = 'none';
  }, 2000);
}

var inputKey = document.getElementById('inputKey');
var keyResult = document.getElementById('keyResult');

inputKey.onkeydown = function(e) {
  keyResult.innerHTML = 'You pressed: ' + e.key;
};

var gallery = document.getElementById('gallery');
var mainPic = document.getElementById('mainPic');

gallery.onclick = function(e) {
  if(e.target.tagName == 'IMG') {
    var newSrc = e.target.src.replace('200/140', '400/280');
    mainPic.src = newSrc;
  }
};

var tabs = document.getElementById('tabButtons').getElementsByTagName('button');
var tabContent = document.getElementById('tabContent');

for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function() {
    for (var j = 0; j < tabs.length; j++) {
      tabs[j].style.backgroundColor = '#ddd';
      tabs[j].style.fontWeight = 'normal';
      tabs[j].style.borderBottom = '1px solid #ccc';
    }
    this.style.backgroundColor = 'white';
    this.style.fontWeight = 'bold';
    this.style.borderBottom = 'none';

    var num = this.getAttribute('data-num');
    if(num == '1') {
      tabContent.innerHTML = 'This is Tab One content.';
    } else if(num == '2') {
      tabContent.innerHTML = 'This is Tab Two content.';
    } else {
      tabContent.innerHTML = 'This is Tab Three content.';
    }
  };
}

var form = document.getElementById('form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');

var nameErr = document.getElementById('nameErr');
var emailErr = document.getElementById('emailErr');
var passErr = document.getElementById('passErr');

function checkName() {
  if(nameInput.value.trim() == '') {
    nameErr.innerHTML = 'Name is required';
    nameInput.style.borderColor = 'red';
    return false;
  } else {
    nameErr.innerHTML = '';
    nameInput.style.borderColor = 'green';
    return true;
  }
}

function checkEmail() {
  var email = emailInput.value.trim();
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(email == '') {
    emailErr.innerHTML = 'Email is required';
    emailInput.style.borderColor = 'red';
    return false;
  } else if(!regex.test(email)) {
    emailErr.innerHTML = 'Email format is wrong';
    emailInput.style.borderColor = 'red';
    return false;
  } else {
    emailErr.innerHTML = '';
    emailInput.style.borderColor = 'green';
    return true;
  }
}

function checkPass() {
  if(passwordInput.value.length < 8) {
    passErr.innerHTML = 'Password must be 8 or more chars';
    passwordInput.style.borderColor = 'red';
    return false;
  } else {
    passErr.innerHTML = '';
    passwordInput.style.borderColor = 'green';
    return true;
  }
}

nameInput.oninput = checkName;
emailInput.oninput = checkEmail;
passwordInput.oninput = checkPass;

form.onsubmit = function(e) {
  e.preventDefault();

  var validName = checkName();
  var validEmail = checkEmail();
  var validPass = checkPass();

  if(validName && validEmail && validPass) {
    alert('Form sent!');
    form.reset();

    nameInput.style.borderColor = '';
    emailInput.style.borderColor = '';
    passwordInput.style.borderColor = '';

    nameErr.innerHTML = '';
    emailErr.innerHTML = '';
    passErr.innerHTML = '';
  }
};
