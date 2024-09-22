import ToTopButton from "./ToTopButton";
import Footer from "./Footer"
import { socials } from "../data/socials"
import resumeFile from "../assets/resumeFile.pdf";
const resumeImg = new URL('../assets/resumeImg.png', import.meta.url).href

export default function About() {
    return(
        <div className="content">
            <p className="headingLarge italic">ABOUT ME</p>
            <p className="heading">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                 praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi 
                 sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                 mollitia animi, id est laborum et dolorum fuga.</p>
                 <a download="Zain Gova - Resume.pdf" href={resumeFile}><button className="download" href={resumeFile}>Download Resume</button></a>
            <br></br>
            <a href={resumeFile}><img src={resumeImg} className="resume"></img></a>
            <ToTopButton/>
            <Footer socials={socials}/>
        </div>
    );
}