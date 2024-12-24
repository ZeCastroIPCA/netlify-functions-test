// Hello Function
document.getElementById('hello').addEventListener('click', async () => {
  const responseElement = document.getElementById('response');

  try {
    const response = await fetch('/.netlify/functions/hello');
    const data = await response.json();
    responseElement.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    responseElement.textContent = `Error: ${error.message}`;
  }
});

// Weather Function
document.getElementById("getWeather").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;
    const responseElement = document.getElementById("weatherResponse");
  
    if (!city) {
      responseElement.textContent = "Please enter a city name.";
      return;
    }
  
    try {
      const response = await fetch(`/.netlify/functions/getWeather?city=${city}`);
      const data = await response.json();
  
      if (response.ok) {
        responseElement.textContent = `Weather in ${data.city}:
  Temperature: ${data.temperature}°C
  Description: ${data.description}
  Timestamp: ${data.timestamp}`;
      } else {
        responseElement.textContent = `Error: ${data.error}`;
      }
    } catch (error) {
      responseElement.textContent = `Error: ${error.message}`;
    }
  });
  