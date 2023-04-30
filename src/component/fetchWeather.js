const getFormattedWeatherData = async (lat, lon) => {
  //   const URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=20&appid=${process.env.WEATHER_API_KEY}`;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&limit=20&appid=713f964a0a59c33b670434c772385769`;

  const weatherData = await fetch(weatherURL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = weatherData;
  const { description, icon } = weather[0];

  return {
    description,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { getFormattedWeatherData };
