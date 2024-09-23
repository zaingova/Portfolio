import Projects from "../components/Projects";
import ToTopButton from "./ToTopButton";
import Footer from "./Footer"
import { socials } from "../data/socials"

export default function Project() {
    return(
        <div className="content">
            <p className="headingLarge">PROJECTS</p>
            <hr className="dividerThin"></hr>
            <Projects/>
            <ToTopButton/>
            <Footer socials={socials}/>
        </div>
    )
}