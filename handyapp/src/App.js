import React from "react";
import { withRouter, Route } from "react-router-dom";
import Register from "./components/Register";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Route exact path="/register" component={Register} />
        </div>
    );
}

export default withRouter(App);
