import React from 'react'
import bird_1 from '../../assets/bird_1.png'
import bird_right from '../../assets/bird_right.png'
import big_bird_1 from '../../assets/bird_big_1.png'
import big_bird_2 from '../../assets/bird_big_2.png'
import './Start.css'
import './Startmedia.css'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <>

      <div className="inter_start">
        <div className="light_green"></div>
        <img className='big_bird_1' src={big_bird_1} alt="" />
        <div className="start_texts">
          <h1 className='start_title'>Kids Quiz</h1>
          <img className='img_bird_1' src={bird_right} alt="error" />
          <button className="start_button">
            <img src={bird_1} alt="error" />
            <Link to="/direct-test">Start</Link>
          </button>
        </div>
        <img className='big_bird_2' src={big_bird_2} alt="" />
      </div>

    </>
  )
}

export default Start