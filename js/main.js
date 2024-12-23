async function getParameter(parameter) {
  const response = await fetch('/.netlify/functions/getParameter?parameter=' + parameter);
  const data = await response.json();
  return data.message;
}

// when form is submitted, get the value of the input and call getParameter
const form = document.getElementById('form');
const parameter = document.getElementById('parameter').value;
const response = document.getElementById('response');
form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const message = await getParameter(parameter);
  response.innerText = message;
});
