const form = document.querySelector('#sheetdb-form-2')
const btn = document.querySelector('.sheetdb-form-btn-second')
const input = document.querySelector('#sheetdb-form-input-second')
const inputDate = document.querySelector('#sheetdb-form-input-date-second');
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
    body: new FormData(document.getElementById('sheetdb-form-2'))
  }).then(response => response.json());
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  changeContentBtn('Enviando ...')
  inputDate.value = new Date();
  setTimeout(function () {
    fetchSheetDB()
    changeContentBtn('Enviar')
    clearInput();
  }, 2000);
})


