import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'



const headerSocials = () => {
  return (
     <div className='header_Socials'>
        <a href="https://linkdin.com" target = "_blank"><BsLinkedin/></a>
        <a href="https://github.com" target = "_blank"><FiGithub/></a>
        <a href="https://twitter.com" target="_blank"><FaTwitter/></a>
     </div>
  )
}

export default headerSocials