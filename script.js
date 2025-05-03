var btn = document.getElementById('btn');
var secret = document.getElementById('secret');
var timer;

btn.addEventListener('click', function() {
  btn.textContent = 'Clicked!';
  btn.classList.add('clicked');
  setTimeout(function() {
    btn.textContent = 'Click Me!';
    btn.classList.remove('clicked');
  }, 1000);
});

btn.addEventListener('dblclick', function() {
  showSecret();
});

btn.addEventListener('mousedown', function() {
  timer = setTimeout(showSecret, 800);
});

btn.addEventListener('mouseup', function() {
  clearTimeout(timer);
});

btn.addEventListener('mouseleave', function() {
  clearTimeout(timer);
});

function showSecret() {
  secret.style.display = 'block';
  setTimeout(function() {
    secret.style.display = 'none';
  }, 2000);
}

var inputKey = document.getElementById('inputKey');
var keyResult = document.getElementById('keyResult');

inputKey.addEventListener('keydown', function(e) {
  keyResult.textContent = 'You pressed: ' + e.key;
});

var gallery = document.getElementById('gallery');
var mainPic = document.getElementById('mainPic');

gallery.addEventListener('click', function(e) {
  if(e.target.tagName === 'IMG') {
    mainPic.src = e.target.src.replace('200/140', '400/280');
  }
});

var tabs = document.querySelectorAll('#tabButtons .tab');
var tabContent = document.getElementById('tabContent');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    tabs.forEach(function(t) { t.classList.remove('active'); });
    tab.classList.add('active');

    var num = tab.getAttribute('data-num');
    if(num === '1') {
      tabContent.innerHTML = 'This is Tab One content.';
    } else if(num === '2') {
      tabContent.innerHTML = 'This is Tab Two content.';
    } else {
      tabContent.innerHTML = 'This is Tab Three content.';
    }
  });
});

var form = document.getElementById('form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');

var nameErr = document.getElementById('nameErr');
var emailErr = document.getElementById('emailErr');
var passErr = document.getElementById('passErr');

function checkName() {
  if(nameInput.value.trim() === '') {
    nameErr.textContent = 'Name is required';
    nameInput.classList.add('error');
    nameInput.classList.remove('success');
    return false;
  } else {
    nameErr.textContent = '';
    nameInput.classList.remove('error');
    nameInput.classList.add('success');
    return true;
  }
}

function checkEmail() {
  var email = emailInput.value.trim();
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(email === '') {
    emailErr.textContent = 'Email is required';
    emailInput.classList.add('error');
    emailInput.classList.remove('success');
    return false;
  } else if(!regex.test(email)) {
    emailErr.textContent = 'Email format is wrong';
    emailInput.classList.add('error');
    emailInput.classList.remove('success');
    return false;
  } else {
    emailErr.textContent = '';
    emailInput.classList.remove('error');
    emailInput.classList.add('success');
    return true;
  }
}

function checkPass() {
  if(passwordInput.value.length < 8) {
    passErr.textContent = 'Password must be 8 or more chars';
    passwordInput.classList.add('error');
    passwordInput.classList.remove('success');
    return false;
  } else {
    passErr.textContent = '';
    passwordInput.classList.remove('error');
    passwordInput.classList.add('success');
    return true;
  }
}

nameInput.addEventListener('input', checkName);
emailInput.addEventListener('input', checkEmail);
passwordInput.addEventListener('input', checkPass);

form.addEventListener('submit', function(e) {
  e.preventDefault();

  var validName = checkName();
  var validEmail = checkEmail();
  var validPass = checkPass();

  if(validName && validEmail && validPass) {
    alert('Form sent!');
    form.reset();

    nameInput.classList.remove('success');
    emailInput.classList.remove('success');
    passwordInput.classList.remove('success');
  }
});
