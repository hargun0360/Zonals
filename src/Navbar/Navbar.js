import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import logo from './logo.svg'
import {Link} from 'react-scroll'
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
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={200}>Home</Link>
                    <Link to="about" spy={true} smooth={true} offset={0} duration={200}>About Us</Link>
                    <Link to="eligibility" spy={true} smooth={true} offset={-100} duration={200}>Eligibility</Link>
                    <Link to="prize" spy={true} smooth={true} offset={-100} duration={200}>Prizes</Link>
                    <Link to="fee" spy={true} smooth={true} offset={-100} duration={200}>Entry Fee</Link>
                    <Link to="notes" spy={true} smooth={true} offset={-100} duration={200}>Notes</Link>
                    <Link to="organizers" spy={true} smooth={true} offset={-100} duration={200}>Organizers</Link>
                    <Link to="contact-us" spy={true} smooth={true} offset={-100} duration={200}>Contact Us</Link>
                </div>}
                <button className="hamburger1"> {isOpen ? <MenuOpenIcon onClick={(e)=>setIsOpen(false)} fontSize="large" /> : <MenuIcon onClick={(e)=>setIsOpen(true)}  fontSize='large' />}</button>
                {isOpen && <div className='mobile-links'>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={200}>Home</Link>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={200}>About Us</Link>
                    <Link to="eligibility" spy={true} smooth={true} offset={-100} duration={200}>Eligibility</Link>
                    <Link to="prize" spy={true} smooth={true} offset={-100} duration={200}>Prizes</Link>
                    <Link to="fee" spy={true} smooth={true} offset={-100} duration={200}>Entry Fee</Link>
                    <Link to="notes" spy={true} smooth={true} offset={-100} duration={200}>Notes</Link>
                    <Link to="organizers" spy={true} smooth={true} offset={-100} duration={200}>Organizers</Link>
                    <Link to="contact-us" spy={true} smooth={true} offset={-100} duration={200}>Contact Us</Link>
                </div>}
            </div>
            <div className='navfix'>.</div>
        </>
    )
}

export default Navbar
