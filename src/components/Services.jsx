import ToTopButton from "./ToTopButton"
import Footer from "./Footer"
import { socials } from "../data/socials"
const backendAPI = new URL('../assets/backend_API.png', import.meta.url).href

export default function Services() {
    return (
        <div className="content">
            <p className="headingLarge">SERVICES</p>
            <p className="heading">Below you'll find a list of the various services
                I offer and some of the skills that I've developed throughout my time
                as a student.
            </p>
            <hr className="hrLight"></hr>
            <div className="servicesContainer">
                <div className="servicesCard">
                    <ul>
                        <li className="servicesTitle">Full Stack Web Development</li>
                        <ul className="servicesDesc">
                            <li>Express JS</li>
                            <li>Developing REST APIs</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
                            <li>Progressive Web Applications</li>
                            <li>Tailwind CSS</li>
                            <li>React</li>
                            <li>Next JS</li>
                        </ul>
                    </ul>
                    <img src={backendAPI} className="servicesImg"></img>
                </div>
                <div className="servicesCard">
                    <ul>
                        <li className="servicesTitle">Full Stack Web Development</li>
                        <ul className="servicesDesc">
                            <li>Express JS</li>
                            <li>Developing REST APIs</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
                            <li>Progressive Web Applications</li>
                            <li>Tailwind CSS</li>
                            <li>React</li>
                            <li>Next JS</li>
                        </ul>
                    </ul>
                    <img src={backendAPI} className="servicesImg"></img>
                </div>
                <div className="servicesCard">
                    <ul>
                        <li className="servicesTitle">Full Stack Web Development</li>
                        <ul className="servicesDesc">
                            <li>Express JS</li>
                            <li>Developing REST APIs</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
                            <li>Progressive Web Applications</li>
                            <li>Tailwind CSS</li>
                            <li>React</li>
                            <li>Next JS</li>
                        </ul>
                    </ul>
                    <img src={backendAPI} className="servicesImg"></img>
                </div>
                <div className="servicesCard">
                    <ul>
                        <li className="servicesTitle">Full Stack Web Development</li>
                        <ul className="servicesDesc">
                            <li>Express JS</li>
                            <li>Developing REST APIs</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
                            <li>Progressive Web Applications</li>
                            <li>Tailwind CSS</li>
                            <li>React</li>
                            <li>Next JS</li>
                        </ul>
                    </ul>
                    <img src={backendAPI} className="servicesImg"></img>
                </div>
            </div>
            <hr className="hrLight"></hr>
            <ToTopButton />
            <Footer socials={socials} />
        </div>
    )
}