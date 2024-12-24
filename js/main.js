document.getElementById('callFunction').addEventListener('click', async () => {
  const responseElement = document.getElementById('response');

  try {
    const response = await fetch('/.netlify/functions/hello');
    const data = await response.json();
    responseElement.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    responseElement.textContent = `Error: ${error.message}`;
  }
});