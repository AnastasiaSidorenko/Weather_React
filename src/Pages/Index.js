import React, { useEffect, useState } from "react";

export function Index() {
   const [city, setCity] = useState(null);
   const [temp, setTemp] = useState(null);

   const API_key = "c47a67513f793be01fd78b932ab39567";

   const getWeather = () => {
      fetch("http://ip-api.com/json/?lang=ru&fields=status,lat,lon,city")
         .then(response => response.json())
         .then(data => {
            console.log(data);
            if (data.status === "success") {
               setCity(data.city)
               fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${API_key}&units=metric`)
                  .then(response => response.json())
                  .then(data => {
                     console.log(data);
                     console.log("temp", data.main.temp);
                     setTemp(data.main.temp);
                  });
            }
         })
   }

   useEffect(() => {
      getWeather();
   }, [])

   return (
      <div>
         <h1>Current weather</h1>
         {(city && temp) ? <h1>{city} {temp}</h1> : ""}
      </div>
   )
}