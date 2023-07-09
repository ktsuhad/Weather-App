import axios from "axios";

const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const CLIMATE_API_KEY = import.meta.env.VITE_API_KEY;
const GEO_API_URL = import.meta.env.VITE_GEO_API_URL;

export const fetchCities = async (city: string) => {
  try {
    const { data } = await axios.get(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${city}`,
      {
        // method:"get",
        headers: {
          "X-RapidAPI-Key": RAPIDAPI_KEY,
          "X-RapidAPI-Host": RAPIDAPI_HOST,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// current weather api
export const getWeather = async (lat: number, lon: number) => {
  try {
    const CurrentWeatherApi = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${CLIMATE_API_KEY}&units=metric`
    );

    return CurrentWeatherApi.data;
  } catch (error) {
    console.log(error);
  }
};

export const getForecastWeather = async (lat: number, lon: number) => {
  try {
    const ForecastApi = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${CLIMATE_API_KEY}&units=metric`
    );

    return ForecastApi.data;
  } catch (error) {
    console.log(error);
  }
};
