import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
     <div className='header__socials'>
        <a href="https://linkdin.com" target = "_blank"><BsLinkedin/></a>
        <a href="https://github.com" target = "_blank"><FiGithub/></a>
        <a href="https://twitter.com" target="_blank"><FaTwitter/></a>
     </div>
  )
}

export default HeaderSocials