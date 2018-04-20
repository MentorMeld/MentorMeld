import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css';


class Dashboard extends Component {
    

    getData() {
        axios.get('/api/dashboard')
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return(
            <div>Dashboard</div>
        )
    }
}
export default Dashboard;