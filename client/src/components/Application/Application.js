// import react
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

// import styles
import './application.css';

// push profile info to autofill?

class Application extends Component {

   constructor(props){
    super(props)
   }

   navigate = () => {
        const history = this.props.history.replace('/post')
   }

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Dashboard</h1>
                <button onClick={this.navigate}>nav</button>
            </div>
        )
    }
}

// export 
export default withRouter(Application);