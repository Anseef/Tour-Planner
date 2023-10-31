import React,{ useEffect } from 'react'
import './main.scss'
import Maldives from '../../Assets/Maldives.jpg';
import Rome from '../../Assets/Rome.jpg';
import Bali from '../../Assets/Bali.jpg';
import India from '../../Assets/India.jpg';
import NewYork from '../../Assets/NewYork.jpg';
import Japan from '../../Assets/Japan.jpg';
import { MdLocationOn } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { IoMdPricetag } from 'react-icons/io';

import Aos from 'aos';
import 'aos/dist/aos.css';

const tourPackages = [
  {
    id: 1,
    imgSrc: Maldives,
    destinationTitle: 'Beach Paradise',
    location: 'Maldives',
    amount: '$1500',
    description: 'Experience the ultimate beach getaway in the stunning Maldives. Relax on pristine white sandy beaches and snorkel in crystal-clear waters.'
  },
  {
    id: 2,
    imgSrc: Rome,
    destinationTitle: 'Historical Tour',
    location: 'Rome, Italy',
    amount: '$1800',
    description: 'Explore the rich history of Rome with guided tours to iconic landmarks. Visit the Colosseum, Vatican City, and the Roman Forum.'
  },
  {
    id: 3,
    imgSrc: Bali,
    destinationTitle: 'Tropical Escape',
    location: 'Bali, Indonesia',
    amount: '$1200',
    description: 'Discover the beauty of Bali with a tropical escape. Enjoy lush landscapes, vibrant culture, and pristine beaches.'
  },
  {
    id: 4,
    imgSrc: NewYork,
    destinationTitle: 'City Exploration',
    location: 'New York City, USA',
    amount: '$1600',
    description: 'Experience the excitement of New York City with a city exploration tour. Visit iconic landmarks, museums, and enjoy Broadway shows.'
  },
  {
    id: 5,
    imgSrc: Japan,
    destinationTitle: 'Cultural Immersion',
    location: 'Kyoto, Japan',
    amount: '$1900',
    description: 'Immerse yourself in the rich culture of Kyoto, Japan. Explore historic temples, participate in tea ceremonies, and enjoy traditional cuisine.'
  },
  {
    id: 6,
    imgSrc: India,
    destinationTitle: 'Taj Mahal Tour',
    location: 'Agra, India',
    amount: '$1600',
    description: 'Explore the iconic Taj Mahal and experience the rich history of Agra, India. Marvel at the grandeur of this architectural masterpiece.'
  }
];
const Main = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])


  return (
    <section className='main container section' id="Packages">
      <div className="sectionTitle">
        <h1 data-aos="fade-right" className='title'>
          Packages
        </h1>
      </div>

      <div className="sectionContent grid">
        {
          tourPackages.map(({id, imgSrc, destinationTitle, location, amount, description}) => {
            return(
              <div data-aos="fade-up" className="packageBlock grid" key={id}>
                <div className="imageDiv">
                  <img  src={ imgSrc } alt= { destinationTitle } />
                </div>

                <div className="cardInfo">
                  <h3 className='destTitle'>{destinationTitle}</h3>

                  <div className='locationContainer flex'>
                      <MdLocationOn/>
                      <span className="location">{location}</span>
                  </div>

                  <div className="price flex">
                    <IoMdPricetag/>
                    <h4>{amount}</h4>
                  </div>

                  <div className="description">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    Details <FaClipboardList/>
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  )
}
export default Main
