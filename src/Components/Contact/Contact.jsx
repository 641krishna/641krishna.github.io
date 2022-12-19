import React from 'react'
import Styles from './Contact.module.css'

const contactObj = [
    {
        socialMedia: <i className="fas fa-phone-alt"></i>,
        url: '+91 9108253546'
    },
    {
        socialMedia:  <i className="fas fa-envelope"></i>,
        url: 'shrikrishnaaluri641@gmail.com'
    },
    {
        socialMedia:  <i className="fab fa-linkedin"></i>,
        url: 'https://www.linkedin.com/in/krishna-aluri-b9613515a/'
    },
    {
        socialMedia:<i className="fab fa-github"></i>,
        url: 'https://github.com/641krishna'
    },
    {
        socialMedia:   <i className="fab fa-medium-m"></i>,
        url: 'https://medium.com/@shrikrishnaaluri641'
    },

]

function Contact() {
    return (
        <div className={`${Styles.Contact}`}>
            <div>
                <h1 className="heading">
                    Contact
                </h1>
            </div>
            <div className={Styles.ContactSectionDiv}>
                {contactObj.map(item => 
                <a href={item.url} target="_blank">
                    <div className={Styles.ContactSection}>                        
                            <p>{item.socialMedia}</p>
                            <p>{item.url}</p>                      
                    </div>  
                    </a>  
                )}
            </div>
                    
        </div>
    )
}

export default Contact


