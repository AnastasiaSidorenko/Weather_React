import React, { useEffect, useState } from "react";

export function Index() {
   const [city, setCity] = useState(null);
   const [{ temp, description }, setInfo] = useState({ temp: null, description: null });

   const API_key = "c47a67513f793be01fd78b932ab39567";

   const getWeather = () => {
      fetch("https://ipwhois.app/json/?lang=ru&objects=city,latitude,longitude,success")
         .then(response => response.json())
         .then(data => {
            if (data.success === true) {
               setCity(data.city)
               fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${API_key}&units=metric&lang=ru`)
                  .then(response => response.json())
                  .then(data => {
                     if (data.main) {
                        data.main.temp > 0
                           ? setInfo({ temp: `+${data.main.temp}`, description: data.weather[0].description })
                           : setInfo({ temp: `+${data.main.temp}`, description: data.weather[0].description });
                     }
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