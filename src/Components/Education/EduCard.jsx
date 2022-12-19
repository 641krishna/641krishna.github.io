import React from 'react'
import   "./Card.css"

function EduCard({  title, description, time}) {
    return (

        <div className="Card"
        style={{}}>
            <div>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h3>{time}</h3>
               

            </div>
        </div>
    )
}

export default EduCard;
