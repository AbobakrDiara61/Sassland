// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './css/Header.css'

const sections = ["Roadmap", "FAQ", "Pricing", "Contact", "Features"]
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const openMenu = () => {
    setIsOpen(i => i = !i);
  };
/*   useEffect(() => {
    navRef.current.classList.toggle("open");
    const container = document.createElement("div");
    container.className = "main-container";
    navRef.current.appendChild(container);
  }, [isOpen]); */
  return (
    <header className='w-full bg-darkBG opacity-95 fixed left-0 top-0 h-16 z-50'>
        <div className="main-container h-full flex items-center justify-between">
          <Link to="/" className='text-3xl text-gradient from-amber-500 to-primary font-bold'>Sassland</Link>
          <nav ref={navRef}  className={`nav-links ${isOpen ? "open" : "max-md:hidden"}`}>
            <div className={`${isOpen ? "main-container flex flex-col" : ""}`}>
              <Link to="/">Home</Link>
              {sections.map(section => <a href={`#${section.toLowerCase()}`} key={section}>{section}</a>)}
              <Link to="/docs">Docs</Link>
            </div>
          </nav>
          <button className='cursor-pointer md:hidden' onClick={openMenu}><FontAwesomeIcon icon={faBars} className='text-xl text-white'/></button>
        </div>
    </header>
  )
  
}

export default Header
