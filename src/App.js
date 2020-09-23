import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./Pages/Index";
import { Cities } from "./Pages/Cities";
import { Auth } from "./Pages/Auth";
//HashRouter

function AppRouter() {
   //<div className="container"></div>
   return (
      <Router>
         <div>
            <nav className="nav">
               <div className="container">
                  <Link className="link" to="/">Home</Link>
                  <Link className="link" to="/cities">Cities</Link>
                  <Link className="link auth-link aside" to="/auth">Auth</Link>
               </div>
            </nav>
         </div>
         <div className="container__content">
            <Route path="/" exact component={Index} />
            <Route path="/cities" component={Cities} />
            <Route path="/auth" component={Auth} />
         </div>
      </Router>
   )
}

export default AppRouter;