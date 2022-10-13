import React, { useState } from 'react'
// import {Link} from "react-scroll"
import { HashLink as Link } from 'react-router-hash-link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import logo from './logo.svg'
import {motion} from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const animateFrom = {opacity: 0,y: -40}
    const animateTo = {opacity : 1 , y: 0}

    return (
        <>
            <div className='navbar1'>
                <div className='logo'>
                    <img className='logo-image' src={logo} alt='logo'></img>
                </div>
                {<div className='links'>
                    <Link activeClass="active" to="/#home" spy={true} smooth={true}>Home</Link>
                    <Link to="/#aboutAkg" spy={true} smooth={true}>About Us</Link>
                    <Link to="/#call" spy={true} smooth={true}>Categories</Link>
                    <Link to="/#committee" spy={true} smooth={true}>Organizers</Link>
                    <Link to="/#keynote" spy={true} smooth={true}>Contact Us</Link>
                </div>}
                <button className="hamburger1"> {isOpen ? <MenuOpenIcon onClick={(e)=>setIsOpen(false)} fontSize="large" /> : <MenuIcon onClick={(e)=>setIsOpen(true)}  fontSize='large' />}</button>
                {isOpen && <div className='mobile-links'>
                    <Link    activeClass="active" to="/#home" spy={true} smooth={true}><motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.05}}>Home</motion.li></Link>
                    <Link   to="/#aboutAkg" spy={true} smooth={true}><motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.10}}>About Us</motion.li></Link>
                    <Link   to="/#call" spy={true} smooth={true}><motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.15}}>Categories</motion.li></Link>
                    <Link to="/#committee" spy={true} smooth={true}><motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.20}}  >Organizers</motion.li></Link>
                    <Link   to="/#keynote" spy={true} smooth={true}><motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.25}}>Contact Us</motion.li></Link>
                </div>}
            </div>
            <div className='navfix'>.</div>
        </>
    )
}

export default Navbar
