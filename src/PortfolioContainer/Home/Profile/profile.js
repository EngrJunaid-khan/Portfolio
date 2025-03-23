import React from 'react'
import Typical from 'react-typical'

import './profile.css'
export default function profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.facebook.com/profile.php?id=100013278522282' target='_blank'>
                            <i className='fa fa-facebook-square'></i>
                            
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='https://www.instagram.com/junaidkhan5026/' target='_blank'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://github.com/EngrJunaid-khan' target='_blank'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href="https://wa.me/923419386570" target='_blank'>
                            <i className='fa fa-whatsapp'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/junaid-khan-3943b416b/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                    </div>
                   
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "} Hello I'M <span className='highlighted-text'>Junaid khan</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {""}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Enthusiastic dev 🔥",
                                2000,
                                "Python Dev 🐍",
                                2000,
                                "Artificial Intelligence 🤖",
                                2000,
                                "Data Science 📊",
                                2000,
                                "Machine Learning 🤖",
                                2000,
                                "Deep Learning 🧠",
                                2000,
                                "Computer Vission 📷",
                                2000,
                                "Natural Language Processing 🗣️",
                                2000,
                                "Python-Backend 🐍",
                                2000,
                                "Web scrapping 🔍",
                                2000
                            ]}
                            /> 
                        </h1>
                        <span>
                        Building and deploying AI models with DS, ML, DL, CV, NLP techniques on scalable backend infrastructure.
                        </span>
                    </span>
                </div>

                <div className='profile-options'>
                    <a className='btn primary-btn' href='#Contact' >
                        {""} Hire Me {" "}
                    </a>
                    <a href='junaid.pdf' download="Junaid_Khan.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>

                </div>
  
            </div>

            {/* Profile picture */}
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>

            </div>
        </div>
      
    </div>
  )
}
