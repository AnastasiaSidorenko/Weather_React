import React, { useEffect, useState } from "react";

export function Index() {
   const [city, setCity] = useState(null);
   const [{ temp, description }, setInfo] = useState({ temp: null, description: null });

   const API_key = "c47a67513f793be01fd78b932ab39567";

   const getWeather = () => {
      fetch("http://ip-api.com/json/?lang=ru&fields=status,lat,lon,city")
         .then(response => response.json())
         .then(data => {
            console.log(data);
            if (data.status === "success") {
               setCity(data.city)
               fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${API_key}&units=metric&lang=ru`)
                  .then(response => response.json())
                  .then(data => {
                     console.log(data);
                     console.log("temp", data.main.temp);
                     data.main.temp > 0
                        ? setInfo({ temp: `+${data.main.temp}`, description: data.weather[0].description })
                        : setInfo({ temp: `+${data.main.temp}`, description: data.weather[0].description });
                     //setTemp(data.main.temp);
                  });
            }
         })
   }

   useEffect(() => {
      getWeather();
   }, [])

   return (
      <div id="weather">
         {(city && temp) ?
            (<div><p id="weather__title">Текущая погода</p>
               <p>{city}
                  <span id="weather__description">{temp} ({description})</span>
               </p></div>)
            : ""}
      </div>
   )
}