import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function CityResultChart() {
    const [weatherData, setWeatherData] = useState([]);
    const cityData = useSelector((state) => state.city.data);


    useEffect(() => {
        const newDataArray = [];
        if (typeof cityData === "object" && cityData !== null && !Array.isArray(cityData)) {
            for (let i = 0;i < cityData.list.length;i += 8) {
                newDataArray.push({
                    date: cityData.list[i].dt_txt.split(" ")[0],
                    temperature: Math.floor(cityData.list[i].main.temp),
                    humidity: cityData.list[i].main.humidity,
                    weather: cityData.list[i].weather[0].main
                })
            };
            setWeatherData(newDataArray);
        }
    }, [cityData])

    const chartRender = (
    <div style={{ width: "100%", height: 300 }}>
        {cityData.city ? <h2>Here's the weather information for {cityData.city.name} city: </h2> : <h2>Couldn't find the specified city, please watch for typos or try again later.</h2>}
        <ResponsiveContainer>
            <LineChart data={weatherData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" label={{ value: '°C / %', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#8884d8" name="Temperature (°C)" activeDot={{ r: 8 }} />
                <Line yAxisId="left" type="monotone" dataKey="humidity" stroke="#82ca9d" name="Humidity (%)" />
            </LineChart>
        </ResponsiveContainer>
    </div>
    )

    return(
        <div>
            {typeof cityData === "object" && cityData !== null && !Array.isArray(cityData) ? chartRender : ""}
        </div>
    )
}

export default CityResultChart;
