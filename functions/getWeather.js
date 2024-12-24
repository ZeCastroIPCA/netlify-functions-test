require("dotenv").config();
exports.handler = async (event, context) => {
  const { city } = event.queryStringParameters;

  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "City name is required" }),
    };
  }

  const API_KEY = process.env.WEATHER_API_KEY
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        timestamp: new Date().toISOString(),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
