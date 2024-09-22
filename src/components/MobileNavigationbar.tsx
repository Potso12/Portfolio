

import './styles/MobileNavigationbar.css'
import { scroller } from 'react-scroll'; 
import { useState } from "react"
import { motion } from "framer-motion"


interface MobileNavigationbarProps {
    scrollToSection: (sectionName: string) => void
  }


const MobileNavigaitonBar: React.FC<MobileNavigationbarProps> = () => {

    const [isOpen,setIsOpen] =  useState<Boolean>(false)

    const handleMenuClick = () => {
        setIsOpen(!isOpen)
    }

    const scrollToSection = ( sectionName: string) => {
        scroller.scrollTo(sectionName, {
          spy: true, smooth: 'easeInOutQuart', duration: 500, offset: 0
        });
        setIsOpen(false)
    };

  return (
    <div className='mobileNavBar'>
        <img 
            src={isOpen ? '/svgs/close.svg' : '/svgs/menu.svg'} 
            alt='Menu'
            onClick={handleMenuClick}
        />
        <motion.ul
            className='Slider'
            initial={{ x: '-150%' }}
            animate={{ x: isOpen ? '0%' : '-150%' }}
            transition={{ duration: 0.5 }}
            >
                <li>
                    <a href="#Home" onClick={() => scrollToSection('Home')}>Start</a>
                </li>
                <li>
                    <a href="#About" onClick={() => scrollToSection('About')}>Who am I</a>
                </li>

                <li>
                    <a href="#Projects" onClick={() => scrollToSection('Projects')}>Projects</a>
                </li>
                <li>
                    <a href="#Skills" onClick={() => scrollToSection('Skills')}>My Skills</a>
                </li>
                <li>
                    <a href="#Summary" onClick={() => scrollToSection('Summary')}>Summary</a>
                </li>
                <li>
                    <a href="#Contact" onClick={() => scrollToSection('Contact')}>Contact me</a>
                </li>
        </motion.ul>
    </div>
)}

export default MobileNavigaitonBar