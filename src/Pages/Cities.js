import React, { useState, useEffect, useContext } from "react";//{ useContext } from "react";
import { UserContext } from "../UserContext";
import { Redirect } from 'react-router';

const API_key = "c47a67513f793be01fd78b932ab39567";

export function Cities() {
   const [city_name, setCityName] = useState("");
   const [favCities, setFavCities] = useState([]);
   const { isAuthed, setIsAuthed } = useContext(UserContext);

   useEffect(() => {
      //getCities from LocalStorage
      localStorage.getItem('favCities') ? setFavCities(JSON.parse(localStorage.getItem('favCities'))) : setFavCities([]);
   }, []);

   const handleSubmit = e => {
      e.preventDefault();
      console.log(city_name);
      let currentListOfCities = [...favCities, city_name];
      updateCitiesList(currentListOfCities);
      setCityName("");
   }

   const updateCitiesList = (currentListOfCities) => {
      setFavCities(currentListOfCities);
      localStorage.setItem('favCities', JSON.stringify(currentListOfCities));
   }

   const removefavCity = idx => {
      let currentListOfCities = favCities.filter((value, index) => index !== idx);
      updateCitiesList(currentListOfCities);
   }

   if (isAuthed === true) {
      return (
         <div id="grid_2-columns">
            <div className="left_column">
               <form onSubmit={handleSubmit} className="form">
                  <input
                     className="form__input"
                     name="text"
                     value={city_name}
                     onChange={e => setCityName(e.target.value)}
                     placeholder="Введите название города..."
                  />
                  <button onClick={handleSubmit}>Добавить</button>
               </form>
            </div>

            <div>
               {favCities.map((city, idx) => {
                  return <Card city={city} key={`${city}${idx}`} removeCard={() => removefavCity(idx)} />
               }
               )}
            </div>
         </div>
      )
   }
   else {
      return <Redirect to="/logIn" />;
   }
}

function Card(props) {
   const [temp, setTemp] = useState(null);

   useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${API_key}&units=metric `)
         .then(response => response.json())
         .then(data => {
            if (data.main) {
               data.main.temp > 0 ? setTemp(`+${data.main.temp}`) : setTemp(`+${data.main.temp}`);
            }
            else {
               setTemp("не найден");
            }
         });

   }, [])

   return (
      <div className="cityCard">
         <button className="cityCard__remove" onClick={props.removeCard}>x</button>
         <div className="cityCard__info">
            <span >{props.city}</span>
            <span className="cityCard__temp">{temp}</span>
         </div>
      </div >
   )
}