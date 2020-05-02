import React from 'react';

function CardSetup(props) {
    console.log(props)
    return (
        <div className="card">
            <span onClick={() => props.clicked(props.id)} className="clicked">
                <div className="imgContainer">
                    <img src={props.image} alt={props.id} />
                </div>
           </span>
        </div>
    )


};

export default CardSetup;
