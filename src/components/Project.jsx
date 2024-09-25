import Projects from "../components/Projects";
import ToTopButton from "./ToTopButton";
import Footer from "./Footer"
import { socials } from "../data/socials"

export default function Project() {
    return(
        <div className="content">
            <p className="headingLarge">PROJECTS</p>
            <p className="heading">
                Below you'll find a short list of some projects I've worked on, 
                which use a variety of different frameworks and technologies. There
                is a short description available on this site but if you want more details
                there is a link to each project's repository as well.
            </p>
            <hr className="hrLight"></hr>
            <Projects/>
            <ToTopButton/>
            <Footer socials={socials}/>
        </div>
    )
}