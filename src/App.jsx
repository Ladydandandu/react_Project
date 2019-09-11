import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import routes from './config/routes';
class App extends Component {
    render() {
        return (
            <Router>
                {
                    routes.map((route,index)=>{
                        return <Route {...route} key={index}/>
                    })
                }
            </Router>
        )
    }
}

export default App;