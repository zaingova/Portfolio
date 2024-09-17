import Projects from "../components/Projects";
import ToTopButton from "./ToTopButton";

export default function Project() {
    return(
        <div className="content">
            <p className="headingLarge italic">PROJECTS</p>
            <hr className="dividerThin"></hr>
            <Projects/>
            <ToTopButton/>
        </div>
    )
}