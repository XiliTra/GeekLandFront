import React from "react";


export default class ProdcutSearch extends React.Component {


    constructor(props) {
        super(props)
    }   


    render() {
        return (
            <div className="result">
                <img
                    src="/img/Tanjiro Hinokami.jpg"
                    alt="Tanjiro Hinokami"
                    title="Tanjiro Hinokami"
                />
                <div className="text">
                    <h1>Titre de l'objet</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus ut rhoncus, porttitor at id odio id
                    </p>
                </div>
                <div className="price">
                    <h1>250 €</h1>
                </div>
            </div>

        )
    }

}