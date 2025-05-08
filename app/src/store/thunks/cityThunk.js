import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCityWeatherInfo = createAsyncThunk(
    'cityWeather/fetchCityWeather',
    async (searchData) => {
        try {
            if (searchData.lat != undefined || searchData.lon != undefined) {
                const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${searchData.lat}&lon=${searchData.lon}&units=metric&appid=bad46dfee1ae1125ec4faf31e63449de`);
                return response.data
            } else {
                return false;
            }
            
        } catch(err) {
            if (err.response) {
                console.error('Status:', err.response.status);
                console.error('Data:', err.response.data);
              } else {
                console.error('Error:', err.message);
              }
        }
        
    }
)

export { fetchCityWeatherInfo };
