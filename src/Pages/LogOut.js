import React, { useContext, useEffect } from "react";//{ useContext } from "react";
import { Redirect } from 'react-router';
import { UserContext } from "../UserContext";

export function LogOut() {

   const { setIsAuthed } = useContext(UserContext);

   useEffect(() => {
      localStorage.setItem('isAuthed', false);
      setIsAuthed(false);
   }, []);

   return <Redirect to="/" />
}