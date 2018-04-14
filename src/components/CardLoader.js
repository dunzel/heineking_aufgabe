import React, { Component } from 'react';
import Card from "./Card";

class CardLoader extends Component {
    render () {
        const { items, error } = this.props;

        //iterates items and return <Card /> components
        const Loader = ({cardsToRender}) => (
            cardsToRender ? (
                <main>
                    {cardsToRender.map((props, i) => {
                        return <Card key={i} {...props} />;
                    })}
                </main>
            ) : null
        );

        //if no success return error text
        return !error
                ? <Loader cardsToRender={items} />
                : <main className="error">{error.toString() === "Error: Network Error" ? "No Network Connection or check CORS problem: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi" : error.toString() }</main>;
    }
}

export default CardLoader;