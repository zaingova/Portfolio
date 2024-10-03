// Home.jsx - Zain Gova - 301018602 - September 22, 2024

import ToTopButton from "./ToTopButton"
import Footer from "./Footer"
import { socials } from "../data/socials"
import { NavLink } from "react-router-dom"
import scroll from "../utils/scroll"

export default function Home() {
    return (
        <div className="content">
            <p className="headingLarge">Health Informatics - Software Engineering Portfolio</p>
            <p className="heading">Hello, and welcome to my portfolio! I'm Zain, and I'm
                enrolled in the Health Informatics Program at Centennial College. Have a read
                through the cards below to get a better idea of what you can find on this site.
            </p>
            <hr className="hrLight"></hr>
            <div className="linkCard">
                <p className="headingDark">If you want to learn more about me, you should
                    head to the "About Me" section, which I'll link below. Here, you'll
                    find some information about my educational background, and my previous
                    work experience.
                </p>
                <NavLink to="/about" end className="nav-link nav-link-first">
                    <button className="redirect" onClick={scroll}>Learn More About Me!</button>
                </NavLink>
            </div>
            <div className="linkCard">
                <p className="headingDark">To learn about what specific services I provide,
                    you should head to the "Services" section, which I'll link below. Essentially
                    a list of things I can do/the scope of projects I'm able to take on.
                </p>
                <NavLink to="/services" end className="nav-link nav-link-first">
                    <button className="redirect" onClick={scroll}>Learn More About the Services I Offer!</button>
                </NavLink>
            </div>
            <div className="linkCard">
                <p className="headingDark">To learn about some of the projects I've completed in
                    the past, you shoukd check out the "Projects" section, which there is a link to
                    below. Each project has a GitHub repository so you can take a look at
                    contributions and source code if you'd like.
                </p>
                <NavLink to="/project" end className="nav-link nav-link-first">
                    <button className="redirect" onClick={scroll}>Learn More About My Projects!</button>
                </NavLink>
            </div>
            <div className="linkCard">
                <p className="headingDark">If you'd like to contact me about anything, there
                    are some links in the footer which you can use but on the "Contact" page,
                    which I'll link below, there is also a built-in contact form.
                </p>
                <NavLink to="/contact" end className="nav-link nav-link-first">
                    <button className="redirect" onClick={scroll}>Contact Me!</button>
                </NavLink>
            </div>
            <ToTopButton />
            <Footer socials={socials} />
        </div>
    )
}