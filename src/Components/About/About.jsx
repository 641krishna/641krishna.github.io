import React from 'react'
import Styles from './About.module.css'

function About() {
    return (
            <div className={`${Styles.About} section`}>
                <div className={Styles.About__header}>
                    <h1 className='heading'>About</h1>
                </div>
                <div className={Styles.About__content}>
                    <p> Observant and innovative aspiring full-stack developer with specialization in MERN stack. Passionate about learning newthings. A Collaborative team player who is excited about building user-centric products.</p>
                </div>
            </div>
    )
}

export default About
