import React from 'react'
import './education.css'

export default function education() {
  return (
    <div className='education'>
      <ul>
        <li><div className='institute'>
            <div className='heading'>
              <h5>University of Engineering and Technology Mardan</h5>
              <p className='date'>2019-2023</p>
            </div>
            <p>BS Computer Science</p>
          </div></li>
        <li><div className='institute'>
            <div className='heading'>
              <h5>Hashtanagar Model College Mandani/Charsadda</h5>
              <p className='date'>2017-2019</p>
            </div>
            <p>FSc Pre-Engineering</p>
          </div></li>
        <li><div className='institute'>
            <div className='heading'>
              <h5>Hira Model High School Mandani/Charsadda</h5>
              <p className='date'> 2015-2017</p>
            </div>
            <p>SSC</p>
          </div></li>
      </ul>
      
    </div>
  )
}
