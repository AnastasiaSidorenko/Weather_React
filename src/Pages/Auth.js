import React, { useContext } from "react";//{ useContext } from "react";
import { Redirect } from 'react-router';
import { UserContext } from "../UserContext";

export function Auth() {

   const { isAuthed, setIsAuthed } = useContext(UserContext);

   /*const signIn = () => {
      //updateAuthStatus(true);
      localStorage.setItem('isAuthed', true);
      setIsAuthed(true);
      return <Redirect to="/cities" />
   }*/

   /*const updateAuthStatus = (bool) => {
       localStorage.setItem('isAuthed', bool);
       console.log(bool);
       setIsAuthed(bool);
    }*/

   if (isAuthed) {
      localStorage.setItem('isAuthed', false);
      setIsAuthed(false);
      console.log("isAuthed");
      //updateAuthStatus(false);
      return <Redirect to="/" />
   }

   //if (!isAuthed) {
   else {
      return (
         <div>
            <h2>Sign in</h2>
            <form className="form">
               <input onChange={event => { this.handleChange(event, "title") }} value="user"
                  className="form__input" placeholder="Login"></input>
               <input onChange={event => { this.handleChange(event, "title") }} value="password1234"
                  className="form__input" type="password" placeholder="Password"></input>
               <div className="form__submit-container">
                  <button className="form__submit-button" onClick={() => {
                     localStorage.setItem('isAuthed', true);
                     setIsAuthed(true);
                     return <Redirect to="/cities" />
                  }}>
                     Sign in
               </button>
               </div>
            </form>
         </div >)
   }
}