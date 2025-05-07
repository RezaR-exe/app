import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCityWeatherInfo = createAsyncThunk(
    'cityWeather/fetchCityWeather',
    async (searchData) => {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${searchData.lat}&lon=${searchData.lon}&units=metric&appid=bad46dfee1ae1125ec4faf31e63449de`);
        return response.data
    }
)

export { fetchCityWeatherInfo };
