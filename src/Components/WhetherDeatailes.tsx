// import React from 'react'
import React from 'react';
import Currentwheather from './Currentwheather';
import WeeklyForcast from './WeeklyForcast'
import { CurrentWeather } from '../Utilities/model/Currentweather.model';
import { ForecastWeatherModel } from '../Utilities/model/Forecastweather.model';

interface Props {
  currentWeather:CurrentWeather,
  ForecastWeather:ForecastWeatherModel[];
}

const WhetherDeatailes:React.FC<Props> = ({currentWeather,ForecastWeather}) => {
  return (
    <div className='full h-full flex flex-col md:flex-row gap-6 md:gap-0'>
        <Currentwheather currentWeather={currentWeather} ForecastWeather={ForecastWeather}/>
        <WeeklyForcast ForecastWeather={ForecastWeather}/>
    </div>
  )
}

export default WhetherDeatailes