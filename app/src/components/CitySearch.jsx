import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCityWeatherInfo } from "../store/store";
import axios from "axios";


function CitySearch() {
    const [searchInput, setSearchInput] = useState("");
    const dispatch = useDispatch();
    const API_KEY = "bad46dfee1ae1125ec4faf31e63449de";


    const handleCityNameConverter = async (cityName) => {
        try {
            const nameConverter = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`)
            const neededData = nameConverter.data.length === 0 ? "" : {lat: nameConverter.data[0].lat, lon: nameConverter.data[0].lon}
            return neededData;
        } catch(err) {
            if (err.response) {
                console.error('Status:', err.response.status);
                console.error('Data:', err.response.data);
              } else {
                console.error('Error:', err.message);
              }
        }
    }

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();        
        const dataToSearch = await handleCityNameConverter(searchInput);
        dispatch(fetchCityWeatherInfo({lat: dataToSearch.lat, lon: dataToSearch.lon}));
        setSearchInput("")
    };

    return(
        <div className="search-container">
            <h1>Search for city:</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleSearchInput} value={searchInput} />
                <button className="btn">Submit</button>
            </form>
        </div>
    )
};



export default CitySearch;
