import React, { useContext } from "react";//{ useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";

export function LogIn() {

   const { setIsAuthed } = useContext(UserContext);

   const history = useHistory();

   const signIn = () => {
      localStorage.setItem('isAuthed', true);
      setIsAuthed(true);
      history.push("/cities");
   }

   return (
      <div>
         <h2>Sign in</h2>
         <form className="form">
            <input onChange={event => { this.handleChange(event, "title") }} value="user"
               className="form__input" placeholder="Login"></input>
            <input onChange={event => { this.handleChange(event, "title") }} value="password1234"
               className="form__input" type="password" placeholder="Password"></input>
            <div className="form__submit-container">
               <button className="form__submit-button" onClick={signIn}>
                  Sign in
               </button>
            </div>
         </form>
      </div >
   )
}