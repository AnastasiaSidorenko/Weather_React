import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./Pages/Index";
import { Cities } from "./Pages/Cities";
import { Auth } from "./Pages/Auth";
import { LogIn } from "./Pages/LogIn";
import { LogOut } from "./Pages/LogOut";
import { UserContext } from "./UserContext";
//HashRouter

function AppRouter() {
   const [isAuthed, setIsAuthed] = useState(null);

   useEffect(() => {
      //getCities from LocalStorage
      localStorage.getItem('isAuthed') !== undefined
         ? setIsAuthed(localStorage.getItem('isAuthed'))
         : setIsAuthed(false);
   }, []);

   const value = useMemo(() => ({ isAuthed, setIsAuthed }), [isAuthed, setIsAuthed]);

   return (
      <Router>
         <UserContext.Provider value={value} >
            <div>
               <nav className="nav">
                  <div className="container_nav">
                     <Link className="link" to="/">Home</Link>
                     <Link className="link" to="/cities">Cities</Link>
                     {isAuthed
                        ? <Link className="link auth-link aside" to="/logOut">Sign Out</Link>
                        : <Link className="link auth-link aside" to="/logIn">Sign In</Link>
                     }
                  </div>
               </nav>
            </div>
            <div className="container__content">
               <Route path="/" exact component={Index} />
               <Route path="/cities" component={Cities} />
               <Route path="/logOut" component={LogOut} />
               <Route path="/logIn" component={LogIn} />
            </div>
         </UserContext.Provider>
      </Router >
   )
}

export default AppRouter;