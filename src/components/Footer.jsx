import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import mainLinks from "../data/footerLinks"
const socialLinks = [
    faFacebook,
    faGithub,
    faInstagram,
    faTwitter
]
const Footer = () => {
  return (
    <footer className="bg-black-bg  bg-darkBG text-gray-400 pt-16">
        <div className="main-container flex  md:items-start gap-5 max-md:flex-col md:**:basis-1/4 ">
            <div>
                <h3 className="text-3xl text-gradient font-bold mb-4">Sassland</h3>
                <p>
                    Transform your business with our cutting-edge SaaS solution designed for modern companies.
                </p>
                <ul className="flex items-center justify-start gap-1 mt-4">            
                    {socialLinks.map(icon => 
                        <li key={`footer-links-${icon.iconName}`}>
                            <a href="#"> <FontAwesomeIcon icon={icon} className="text-xl text-gray-400 hover:text-saas duration-300 transition-colors" /> </a>
                        </li>
                    )}
                </ul>
            </div>
            {
                mainLinks.map(({heading, links}, index) =>
                    <ul key={`footerNavs-${index}`}
                        className={``}
                    >   
                        <h5 className="text-lg text-white font-medium mb-4">{heading}</h5>
                        <ul className="flex flex-col gap-2">
                            {links.map(({name, url}, index) => 
                                <li key={`footer-${name}-${index}`}>
                                    <a href={url} key={`footer-${name}-${index}`} className={``}>{name}</a>
                                </li>
                            )}
                        </ul>
                    </ul>
                )
            }
        </div>
        <div className="cite-footer main-container text-gray-400 text-sm py-8 mt-8 border-t border-gray-700/70 text-center">
            <p className="mb-1.5">© 2025 Sassland. All rights reserved. Build by Codescandy</p>
            <p>Distributed by <span className="text-gradient">ThemeWagon</span></p>
        </div>
    </footer>
  )
}

export default Footer
