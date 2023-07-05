// var apiCall = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0dd4cbd914758a59dc9d430158538886";

// My Notes : Mohon maaf karena saya sudah mencoba hit API key ini menggunakan postman, tetapi selalu tidak berhasil dan selalu Error seperti ini :

// Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.

// Jadi dengan sangat terpaksa untuk API Key nya akan saya ganti dengan data Harcode dari contoh yg ada di openweathermap :(

var apiCall = {
  city: {
    id: 1642911,
    name: "Jakarta",
    coord: {
      lon: 106.8456,
      lat: -6.2146,
    },
    country: "ID",
    population: 8540121,
    timezone: 25200,
  },
  cod: "200",
  message: 0.0582563,
  cnt: 10,
  list: [
    {
      dt: 1665000000,
      sunrise: 1664979182,
      sunset: 1665021275,
      temp: {
        day: 30.8,
        min: 25.7,
        max: 31.5,
        night: 27.9,
        eve: 30.2,
        morn: 25.7,
      },
      feels_like: {
        day: 32.4,
        night: 29.2,
        eve: 31.6,
        morn: 26.1,
      },
      pressure: 1013,
      humidity: 61,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      speed: 3.21,
      deg: 183,
      gust: 4.12,
      clouds: 24,
      pop: 0,
    },
    {
      dt: 1665086400,
      sunrise: 1665065586,
      sunset: 1665107685,
      temp: {
        day: 30.9,
        min: 26.1,
        max: 32.3,
        night: 28.4,
        eve: 31.7,
        morn: 26.1,
      },
      feels_like: {
        day: 32.7,
        night: 29.6,
        eve: 33.1,
        morn: 26.6,
      },
      pressure: 1013,
      humidity: 59,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      speed: 3.06,
      deg: 197,
      gust: 4.31,
      clouds: 7,
      pop: 0,
    },
    {
      dt: 1665172800,
      sunrise: 1665151989,
      sunset: 1665194094,
      temp: {
        day: 31.4,
        min: 26.3,
        max: 32.9,
        night: 28.8,
        eve: 31.7,
        morn: 26.3,
      },
      feels_like: {
        day: 33.2,
        night: 29.9,
        eve: 33.3,
        morn: 26.9,
      },
      pressure: 1012,
      humidity: 57,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      speed: 3.11,
      deg: 198,
      gust: 4.22,
      clouds: 18,
      pop: 0,
    },
    {
      dt: 1665259200,
      sunrise: 1665238392,
      sunset: 1665280503,
      temp: {
        day: 31.8,
        min: 26.5,
        max: 33.4,
        night: 29.3,
        eve: 32.2,
        morn: 26.5,
      },
      feels_like: {
        day: 33.6,
        night: 30.4,
        eve: 33.8,
        morn: 27.1,
      },
      pressure: 1011,
      humidity: 55,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      speed: 3.07,
      deg: 194,
      gust: 4.29,
      clouds: 4,
      pop: 0,
    },
    {
      dt: 1665345600,
      sunrise: 1665324796,
      sunset: 1665366912,
      temp: {
        day: 31.6,
        min: 26.7,
        max: 33.5,
        night: 29.2,
        eve: 32.3,
        morn: 26.7,
      },
      feels_like: {
        day: 33.3,
        night: 30.3,
        eve: 33.9,
        morn: 27.2,
      },
      pressure: 1011,
      humidity: 55,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      speed: 3.03,
      deg: 193,
      gust: 4.15,
      clouds: 6,
      pop: 0,
    },
    {
      dt: 1665432000,
      sunrise: 1665411199,
      sunset: 1665453320,
      temp: {
        day: 31.5,
        min: 26.7,
        max: 33.7,
        night: 29.3,
        eve: 32.4,
        morn: 26.7,
      },
      feels_like: {
        day: 33.1,
        night: 30.4,
        eve: 33.9,
        morn: 27.1,
      },
      pressure: 1011,
      humidity: 56,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      speed: 3.06,
      deg: 191,
      gust: 4.23,
      clouds: 3,
      pop: 0,
    },
    {
      dt: 1665518400,
      sunrise: 1665497602,
      sunset: 1665539729,
      temp: {
        day: 31.7,
        min: 26.6,
        max: 33.7,
        night: 29.3,
        eve: 32.7,
        morn: 26.6,
      },
      feels_like: {
        day: 33.3,
        night: 30.3,
        eve: 34.2,
        morn: 27.2,
      },
      pressure: 1011,
      humidity: 57,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      speed: 3.08,
      deg: 192,
      gust: 4.32,
      clouds: 1,
      pop: 0,
    },
    {
      dt: 1665604800,
      sunrise: 1665584005,
      sunset: 1665626137,
      temp: {
        day: 31.8,
        min: 26.8,
        max: 33.8,
        night: 29.3,
        eve: 32.8,
        morn: 26.8,
      },
      feels_like: {
        day: 33.4,
        night: 30.4,
        eve: 34.2,
        morn: 27.3,
      },
      pressure: 1011,
      humidity: 57,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      speed: 3.08,
      deg: 190,
      gust: 4.35,
      clouds: 0,
      pop: 0,
    },
    {
      dt: 1665691200,
      sunrise: 1665670408,
      sunset: 1665712545,
      temp: {
        day: 32.1,
        min: 26.9,
        max: 34.1,
        night: 29.5,
        eve: 33,
        morn: 26.9,
      },
      feels_like: {
        day: 33.7,
        night: 30.6,
        eve: 34.4,
        morn: 27.3,
      },
      pressure: 1010,
      humidity: 58,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      speed: 3.15,
      deg: 192,
      gust: 4.43,
      clouds: 18,
      pop: 0,
    },
    {
      dt: 1665777600,
      sunrise: 1665756812,
      sunset: 1665798953,
      temp: {
        day: 32.2,
        min: 27,
        max: 34.2,
        night: 29.6,
        eve: 33,
        morn: 27,
      },
      feels_like: {
        day: 33.8,
        night: 30.7,
        eve: 34.4,
        morn: 27.4,
      },
      pressure: 1010,
      humidity: 58,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      speed: 3.11,
      deg: 193,
      gust: 4.43,
      clouds: 21,
      pop: 0,
    },
  ],
};

/**
 * Calls the weatherChecker function with the apiCall parameter.
 */
function hitWeather() {
  weatherChecker(apiCall);
}

/**
+ * Refactors the weatherChecker function to improve readability and adhere to the given rules.
+ * @param {Object} apiResponse
+ */
function weatherChecker(apiResponse) {
  const cityName = apiResponse.city.name;
  const weatherData = apiResponse.list.slice(0, 5).map((day) => {
    const date = new Date(day.dt * 1000).toLocaleDateString();
    const weatherDescription = day.weather[0].description;
    const temperature = {
      min: day.temp.min,
      max: day.temp.max,
    };
    const windSpeed = day.speed;
    const humidity = day.humidity;
    const weatherIcon = day.weather[0].icon;
    return {
      date,
      weatherDescription,
      temperature,
      windSpeed,
      humidity,
      weatherIcon,
    };
  });

  weatherData.forEach((day) => {
    const dayName = new Date(day.date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    const formattedDate = formatDate(day.date);

    const result = `
        <div class="col">
            <div class="card h-100">
            <div class="card-body">
                <span class="card-text">${dayName}, </span>
                <span class="card-text">${formattedDate}</span>
                <span class="card-text">: ${day.temperature.min} - ${day.temperature.max} °C</span>
            </div>
            </div>
        </div>
        `;
    document.getElementById("weather-info").innerHTML += result;
  });
}

/**
 * Formats Date for display
 * @param {string}
 * @returns {string}
 */
function formatDate(date) {
  const dateObj = new Date(date);
  const dayOfMonth = dateObj.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    dateObj
  );
  const year = dateObj.getFullYear();
  const formattedDate = `${dayOfMonth} ${month} ${year}`;
  return formattedDate;
}
