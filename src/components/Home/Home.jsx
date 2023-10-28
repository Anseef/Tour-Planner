import React from 'react'
import './home.scss'
import Greece from '../../Assets/Greece.jpg';
import India from '../../Assets/India.jpg';
import Maldives from '../../Assets/Maldives.jpg';
import Thailand from '../../Assets/Thailand.jpg';
import { AiTwotoneStar } from 'react-icons/ai';
const Home = () => {
  return (
    <section className='homeSection container flex'>
      <div className="textDiv flex">
        <h1>Unleash Your Wanderlust</h1>
        <span className="smallText">
        Welcome to TouristaTrail, where you'll find your dream destination, be it a peaceful beach retreat, an adventurous journey, or a cultural exploration. Our expert team crafts unforgettable moments for you to cherish.
        </span>
        <button className='btn'>Get Started</button>
      </div>
      <div className="imageDivContainer flex">
        <div className="firstRow">
          <div className="imageDiv flex">
            <img src={Greece} alt="" />
            <div className="TitleContainer flex">
              <span className="title">Greece</span>
              <div className="rating flex">
                <AiTwotoneStar/>
                <span className="rate">4.8</span>
              </div>
            </div>
          </div>
          <div className="imageDiv flex">
            <img src={India} alt="" />
            <div className="TitleContainer flex">
              <span className="title">India</span>
              <div className="rating flex">
                <AiTwotoneStar/>
                <span className="rate">4.2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="secondRow">
          <div className="imageDiv flex">
            <img src={Maldives} alt="" />
            <div className="TitleContainer flex">
              <span className="title">Maldives</span>
              <div className="rating flex">
                <AiTwotoneStar/>
                <span className="rate">4.3</span>
              </div>
            </div>
          </div>
          <div className="imageDiv flex">
            <img src={Thailand} alt="" />
            <div className="TitleContainer flex">
              <span className="title">Thailand</span>
              <div className="rating flex">
                <AiTwotoneStar/>
                <span className="rate">4.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home
