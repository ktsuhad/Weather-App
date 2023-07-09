# Weather App

This is a simple weather app that retrieves current weather and forecast information for cities using the OpenWeatherMap API.

## Features

- Fetches a list of cities based on user input and minimum population.
- Retrieves the current weather information for a specific city.
- Retrieves the forecast weather information for a specific city.

## Technologies Used

- JavaScript
- Axios: A promise-based HTTP client for making API requests.
- OpenWeatherMap API: Provides weather data and forecast information.

## Setup

1. Clone the repository:

```
git clone https://github.com/ktsuhad/Weather-App
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```
VITE_RAPIDAPI_HOST=<Your RapidAPI Host>
VITE_RAPIDAPI_KEY=<Your RapidAPI Key>
VITE_API_KEY=<Your OpenWeatherMap API Key>
VITE_GEO_API_URL=<Your Geo API URL>
```

4. Start the development server:

```
npm run dev
```

5. Open the app in your browser:

```
http://localhost:3000
```

## Usage

1. Enter a city name in the search bar to fetch a list of cities that match the name.
2. Click on a city from the list to retrieve the current weather and forecast information for that city.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Thank you for using the Food Recipe App! If you have any questions or feedback, please don't hesitate to contact us.

