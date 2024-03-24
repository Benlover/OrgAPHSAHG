import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
const Footer =()=> {
  return (

    <footer>
      <div className='content-footer'>
        <div className='bloc footer-services'>
          <h3>SOUTENIR NOTRE ACTION</h3>
          <ul className='services-list'>
            <li><a href='/donation'>Faire un don</a></li>
            <li><a href='contact.html'>Nous rejoindre</a></li>
            <li>Travailler avec nous</li>
            
          </ul>
        </div>

        <div className='bloc footer-contact'>
          <h3>CONTACT</h3>
          <p>
          <FaPhone name='call' />
            37870513 / 40089857
          </p>
          <p>
            <ion-icon name='mail'></ion-icon>
            <IoMdMail />
            codioperalynx48@gmail.com
          </p>
          <p>
            <ion-icon name='location'></ion-icon>
            <MdLocationOn name='location' />
            Ouanaminthe Haiti
          </p>
        </div>

        <div className='bloc footer-schedule'>
          <h3>NOS DOMAINES D'ACTION</h3>
          <ul className='schedule-list'>
            <li>✔️ Éducation</li>
            <li>✔️ Santé</li>
            <li>✔️ Activités culturelles</li>
          
          </ul>
        </div>

        <div className='bloc footer-medias'>
          <h3>Nos réseaux</h3>
          <ul className='media-list'>
            <li>
              <a>
              <FaFacebook />
                Codio
              </a>
            </li>
            <li>
              <a>
              <AiFillInstagram />
                Peralynx</a
              >
            </li>
            <li>
              <a>
              <FaTwitter />
                Peralynx</a
              >
            </li>
            <li>
              <a>
              <IoLogoYoutube />
                Peralynx 
                </a>
            </li>
          </ul>
        </div>
      </div>
      <p className='copy-footer'>&copy; APHSAGH 2022 - All right reserved</p>
  </footer>
  )
}

export default Footer