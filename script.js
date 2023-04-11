let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}

function handleGetFormData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;

  return {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status
  };
}

function isNumber(zipCode) {
  return /^\d+$/.test(zipCode);
}

function checkboxIsChecked() {
  const statusCheckbox = document.getElementById('status');
  return statusCheckbox.checked;
}

function validateFormData(formData) {
  if (formData === null) {
    return false;
  }
  if (!isNumber(formData.zipCode)) {
    return false;
  }
  if (!checkboxIsChecked()) {
    return false;
  }
  return true;
}

function submit() {
  event.preventDefault();
  const formData = handleGetFormData();
  if (validateFormData(formData)) {
    document.getElementById('warning').innerHTML = "";
  } else {
    document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi';
  }
}

const form = document.getElementById('my-form');
form.addEventListener('submit', submit);
