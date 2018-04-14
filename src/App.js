import React, { Component } from 'react';
import './css/style.css';
import Clock from "./components/Clock";
import CardLoader from "./components/CardLoader";
import xmlConverter from "xml-to-json-promise";
import axios from "axios/index";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        }
    }

    componentDidMount() {
        //calls xml api of notdienst-portal.de
        axios.get('https://laknds.notdienst-portal.de/lakndsportal/xmlschnittstelle/standort/ergebnis?emergencyCount=4&lat=52.3839683&lon=9.74629189999996&dayCount=14&key=1523623028409_-1330448744')
            .then (res => {
                //converts xml format into js readable json
                xmlConverter.xmlDataToJSON(res.data, []).then(json => {
                    this.setState({
                        isLoaded: true,
                        items: json["container"]["entries"][0]["entry"],
                    });
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render() {
        const { items, isLoaded, error } = this.state;

        return (
            <div className="wrapper">
                <header className="main">
                    <h1>Apotheken-Notdienst</h1>
                    <Clock/>
                </header>
                {isLoaded
                    ? <CardLoader error={error} items={items}/>
                    : <div className="spinner"><div className="cube1" /><div className="cube2" /></div>
                }
            </div>
        );
    }
}

export default App;
