import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// import navbar
import Navbar from './components/Navbar';
import Application from './components/Application';
import Post from './components/Post'


const App = () => {
        return(
                <Router>
                        <div>
                        <Navbar />
                        <Switch>
                                <Route exact path="/post" component={Post} />
                                <Route exact path="/dash" component={Application} />
                        </Switch>
                        </div>
                </Router>
        )
}




export default App;