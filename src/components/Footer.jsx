import { SiInstagram } from 'react-icons/si'
import { BsTwitter, BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

import { NavLink } from 'react-router-dom'

import './Footer.css'

export function Footer () {
  return (
        <footer className='footer'>
            <section className='socialmedia-container'>
                    <NavLink className={'icon-container instagram-container'} to={'https://www.instagram.com/santi_federici/'}>
                        <SiInstagram className='siinstagram' />
                    </NavLink>

                    <NavLink className='icon-container twitter-container' to={'https://twitter.com/Santi_Federici'}>
                        <BsTwitter className='bstwitter' />
                    </NavLink>

                    <NavLink className='icon-container github-container' to={'https://github.com/santiago-federici'}>
                        <FaGithub className='fagithub' />
                    </NavLink>

                    <NavLink className='icon-container facebook-container' to={'https://www.facebook.com/santi.federici.3/'}>
                        <BsFacebook className='bsfacebook' />
                    </NavLink>

                    <NavLink className='icon-container linkedin-container' to={'https://www.linkedin.com/in/santiago-federici-146817270/'}>
                        <BsLinkedin className='bslinkedin' />
                    </NavLink>

                    <NavLink className='icon-container youtube-container' to={'https://www.youtube.com/channel/UCHLuschMmoty6IGvIurYYYA'}>
                        <BsYoutube className='bsyoutube' />
                    </NavLink>
            </section>

            <section className='copyright-container'>
                <h3>COPYRIGHT</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nulla, veritatis voluptates nemo corporis aliquid assumenda aut rerum distinctio, officiis repellat minima? Assumenda veniam fugiat quo quasi dolor esse doloremque.</p>
            </section>
        </footer>
  )
}
