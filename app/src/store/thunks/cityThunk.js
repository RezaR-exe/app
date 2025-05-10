import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_KEY = "bad46dfee1ae1125ec4faf31e63449de";

const fetchCityWeatherInfo = createAsyncThunk(
    'cityWeather/fetchCityWeather',
    async (searchData) => {
        try {
            if (searchData.lat != undefined || searchData.lon != undefined) {
                const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${searchData.lat}&lon=${searchData.lon}&units=metric&appid=${API_KEY}`);
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
