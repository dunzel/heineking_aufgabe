import React, { Component } from 'react';

class Card extends Component {
    render () {
        //data from xml api
        const { phone, street, name, zipCode, location, subLocation, from, to } = this.props;

        const fromDate = new Date(from);
        const toDate = new Date(to);
        const currentDate = new Date();

        //return only cards with actual relevant information
        if (fromDate > currentDate || toDate < currentDate) return null;

        return (
            <div className="card-wrapper">
                <header>Bis {toDate.dayname()}, {toDate.normalTimeformat()} Uhr</header>
                <div className="card-body">
                    <h2>{ name }</h2>
                    <p>{ street }</p>
                    <p>{ zipCode } { location }{ subLocation[0] !== '' && `, ${subLocation}` }</p>
                    <p><span role="img" aria-label="phone-icon">&#128222;</span> Tel.: { phone }</p>
                </div>
            </div>
        );
    }
}

export default Card;