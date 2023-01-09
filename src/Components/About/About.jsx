import React from 'react'
import Styles from './About.module.css'

function About() {
    return (
        <section id='about'>

            <div className={`${Styles.About} section`}>
                <div className={Styles.About__header}>
                    <h1 className='heading'>About</h1>
                </div>
                <div className={Styles.About__content}>

                    <p> Observant and innovative aspiring full-stack developer with specialization in MERN stack. Passionate about learning newthings. A Collaborative team player who is excited about building user-centric products.</p>
                    <button id={Styles.butt}><a id={Styles.a} href="https://drive.google.com/file/d/1W8rL1DGyAZzqh3TgnFc2yKUB6WubDZ6g/view?usp=sharing">Resume</a></button>
                    {/* <button>Hey</button> */}
                </div>
            </div>
        </section>
    )
}

export default About
