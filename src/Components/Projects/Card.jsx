import React from 'react'
import Styles from './Card.module.css'

function Card({img, title, description, github, blog,tech,used}) {
    return (
        <div className={Styles.Card}>
            <div className={Styles.Card__img}>
                <img src={img} alt='project img'/>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <h4>{tech}</h4>
                <p>{used}</p>
                <div className={Styles.Button}>
                    <a href={github}><button id={Styles.one}>GitHub-Code</button></a>
                    <a href={blog}><button id={Styles.two}>Deployed Link</button></a>
                     
                </div>
            </div>
        </div>
    )
}

export default Card
