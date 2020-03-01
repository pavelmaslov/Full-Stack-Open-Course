import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Weather = ({country}) => {
    console.log('executing weather component');
    const [weather, setWeather] = useState(undefined);

    const getForecastHook = () => {
        console.log('asking for weather');
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const city = country.capital;
        const weatherUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
        axios
            .get(weatherUrl)
            .then(res => {
                // console.log(res.data);
                setWeather(res.data);
            })
            .catch(error => {
                console.log(error);
            });
        // fetch(weatherUrl)  
        //     .then(  
        //         function(response) {  
        //             if (response.status !== 200) {  
        //                 console.log('Looks like there was a problem. Status Code: ' +  
        //                 response.status);  
        //                 return;  
        //             }

        //             // Examine the text in the response  
        //             response.json().then(function(data) {  
        //                 console.log(data);  
        //             });  
        //         }  
        //     )  
        //     .catch(function(err) {  
        //         console.log('Fetch Error :-S', err);  
        //     });
        };

    useEffect(getForecastHook,[country.capital]);

    let res = (weather === undefined || weather.success === false) ? 
                    null : 
                    (
                        <div>
                            <h1>Weather in {country.capital}</h1>
                            <h2>temperature: </h2> <p>{weather.current.temperature} Celsius</p>
                            <img src={weather.current.weather_icons} alt="Погода"/> <p>{weather.current.weather_descriptions.reduce((acc, curVal) => acc + curVal,'')}</p>
                            <h2>wind: </h2> <p>{weather.current.wind_speed} kph, direction {weather.current.wind_dir}</p>
                        </div>
                    );

    return res;
};


export default Weather;