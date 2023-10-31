import React,{ useEffect} from 'react'
import './footer.scss'
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import ContactBanner from '../../Assets/contact-banner.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    Aos.init({duration:1000})
  },[])

  return (
    <section data-aos="fade-right" className='footer' id="Contact">
      <div className="sectionContent container">
        <div className="contactDiv flex">
          <div className="contactDivMain">
            <div className="text flex">
              <h2>Get in Touch</h2>
              <small>Feel free you ask anything!</small>
            </div>
    
            <div className="inputDiv flex">
              <label htmlFor='Name'>Name</label>
              <input type="text" placeholder='Your Name' />
              <label htmlFor='Name'>Email</label>
              <input type="text" placeholder='Enter Email Address' />
              <label htmlFor='Name'>Message</label>
              <textarea type="textarea" placeholder='Your Message'/>
              <button className="btn flex" type="submit">
                Send <FiSend/>
              </button>
            </div>
          </div>
          <div className="contactBanner">
            <img src={ ContactBanner } alt="" />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="footerContent">
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className='logo flex'>
                TouristaTrail
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis 
              sint alias eum quam nobis quidem, repudiandae in excepturi ut dolorum est 
              corrupti magnam at? Ut laborum sapiente labore sequi?
            </div>

            <div className="footerSocials">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
            </div>

          </div>

          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>

            </div>

            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                RentCars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Worldtrips
              </li>

            </div>

            <div className="linkGroup">
              <span className="groupTitle">
                LEGAL
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Terms and Conditions
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Privacy Policies
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                China
              </li>

            </div>

          </div>

        </div>
      </div>
      <div className="footerDiv flex">
            <small>Copyright Toursita2023. All Rights Reserved</small>
      </div>
    </section>
  )
}
export default Footer
