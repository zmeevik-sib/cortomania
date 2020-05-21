var today = new Date();

var dd = today.getDate();

var mm = today.getMonth() + 2;

var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd
};
if (mm < 10) {
  mm = '0' + mm
};
var today = dd + '/' + mm + '/' + yyyy;

if (document.querySelector('#block_gratuito')) {
  var renderedRow = 'No habra gastos antes del <strong>' + today+ '</strong>'
  document.querySelector('#block_gratuito').insertAdjacentHTML('afterbegin', renderedRow);
}

if (document.querySelector('#gratuito_error')) {
  var renderedRow = 'No habra gastos antes del <strong>' + today+ '</strong>'
  document.querySelector('#gratuito_error').insertAdjacentHTML('afterbegin', renderedRow);
}

if (document.querySelector('#no_pagar')) {
  var renderedRow = 'Darse de baja antes del <strong>' + today+ ' para no pagar.</strong>'
  document.querySelector('#no_pagar').insertAdjacentHTML('afterbegin', renderedRow);
}