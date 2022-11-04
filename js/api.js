const form = document.querySelector('#sheetdb-form')
const btn = document.querySelector('.sheetdb-form-btn')
const input = document.querySelector('#sheetdb-form-input')
const inputDate = document.querySelector('#sheetdb-form-input-date');
/*
  Primeiro Formulario
*/

function changeContentBtn(value) {
  btn.textContent = value;
}

function clearInput() {
  input.value = "";
}

function fetchSheetDB() {
  fetch(form.action, {
    method: 'POST',
    body: new FormData(document.getElementById('sheetdb-form'))
  }).then(response => response.json());
}

form.addEventListener("submit", function (e) {
  e.p0
  changeContentBtn('Enviando ...')
  inputDate.value = new Date();
  setTimeout(function () {
    fetchSheetDB()
    changeContentBtn('Enviar')
    clearInput();
  }, 2000);
})


/*
  Secondo Formulario
*/

const formSecond = document.querySelector('#sheetdb-form-2')
const btnSecond = document.querySelector('.sheetdb-form-btn-second')
const inputSecond = document.querySelector('#sheetdb-form-input-second')
const inputDateSecond = document.querySelector('#sheetdb-form-input-date-second');

function changeContentBtnSecond(value) {
  btnSecond.textContent = value;
}

function clearInputSecond() {
  inputSecond.value = "";
}

function fetchSheetDBSecond() {
  fetch(formSecond.action, {
    method: 'POST',
    body: new FormData(document.getElementById('sheetdb-form-2'))
  }).then(response => response.json());
}

formSecond.addEventListener("submit", function (e) {
  e.preventDefault();
  changeContentBtnSecond('Enviando ...')
  inputDateSecond.value = new Date();
  setTimeout(function () {
    fetchSheetDBSecond()
    changeContentBtnSecond('Enviar')
    clearInputSecond();
  }, 2000);
})