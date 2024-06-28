import { useEffect, useState } from "react";
import {
    Title,
    Card,
} from "@tremor/react";
import styles from "./weather.module.scss";
function DashWeather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = "dd6e2d43d6883cdc5451370a909cd69a";
            const city = "Barrie,CA"; 
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Failed to fetch weather data", error);
            }
        };

        fetchWeather();
    }, []);
    console.log("The weather data::>>", weather, !!weather);

    return (
        <Card className="max-w-3xl" decoration="top" decorationColor="blue">
            <Title>Weather Data API</Title>
            {weather ? (
                <div className={styles.widgetContainer}>
                    <h2 className={styles.header}>Location: {weather.name}</h2>
                    <p className={styles.paragraph}>Temperature: {weather.main ? (weather.main.temp - 273.15).toFixed(2) : "--"}°C</p>
                    <p className={styles.paragraph}>Condition: {weather.weather && weather.weather.length > 0 ? weather.weather[0].description.toUpperCase() : "--"}</p>
                </div>
            ) : (
                <div className={styles.paragraph}>Loading weather...</div>
            )}
        </Card>
    );
}

export default DashWeather;
