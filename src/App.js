import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./Pages/Index";
import { Cities } from "./Pages/Cities";
import { Auth } from "./Pages/Auth";
//HashRouter

function AppRouter() {
   return (
      <div className="container">
         <Router>
            <div>
               <nav className="nav">
                  <Link className="link" to="/">Home</Link>
                  <Link className="link" to="/cities">Cities</Link>
                  <Link className="link auth-link aside" to="/auth">Auth</Link>
               </nav>
            </div>

            <Route path="/" exact component={Index} />
            <Route path="/cities" component={Cities} />
            <Route path="/auth" component={Auth} />
         </Router>
      </div>
   )
}

export default AppRouter;