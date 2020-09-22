import React, { useState, useEffect } from "react";//{ useContext } from "react";

const API_key = "c47a67513f793be01fd78b932ab39567";

export function Cities() {
   const [city_name, setCityName] = useState("");
   const [favCities, setFavCities] = useState(["Севастополь", "Tel-aviv"]);

   useEffect(() => {
      //getCities from LocalStorage
   }, []);

   const handleSubmit = e => {
      e.preventDefault();
      console.log(city_name);
      setFavCities([...favCities, city_name]);
      setCityName("");
   }

   return (
      <div>
         <h2>Cities</h2>

         <form onSubmit={handleSubmit}>
            <input
               name="text"
               value={city_name}
               onChange={e => setCityName(e.target.value)}
               placeholder="Введите город"
            />
         </form>

         <div>
            {favCities.map((city, idx) => <Card city={city} key={idx} />
            )}
         </div>
      </div>
   )
}

function Card(props) {
   const [temp, setTemp] = useState(null);

   useEffect(() => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${API_key}&units=metric `)
         .then(response => response.json())
         .then(data => {
            console.log(data);
            console.log("temp", data.main.temp);
            data.main.temp > 0 ? setTemp(`+${data.main.temp}`) : setTemp(`+${data.main.temp}`);
         });

   }, [])
   return (
      <div className="cityCard">
         <button className="cityCard__remove">x</button>
         <div className="cityCard__info">
            <span >{props.city}</span>
            <span className="cityCard__temp">{temp}</span>
         </div>
      </div >
   )
}