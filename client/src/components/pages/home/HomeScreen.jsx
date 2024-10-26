import React from 'react';
import WeatherDayList from '../../molecules/weather/WeatherDayList';
import WeatherReport from '../../molecules/weather/WeatherReport';
import WeatherSearch from '../../molecules/weather/WeatherSearch';

const HomeScreen = () => {

    return (
        <main>
            <WeatherReport />
            <WeatherDayList />
            <WeatherSearch />
        </main>
    )
}
export default HomeScreen;