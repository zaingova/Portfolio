import ToTopButton from "./ToTopButton";
import Footer from "./Footer"
import { socials } from "../data/socials"
import resumeFile from "../assets/resumeFile.pdf";
const resumeImg = new URL('../assets/resumeImg.png', import.meta.url).href
const portrait = new URL('../assets/portrait.PNG', import.meta.url).href
const portrait2 = new URL('../assets/portrait2.JPG', import.meta.url).href
const food = new URL('../assets/food.JPG', import.meta.url).href


export default function About() {
    return (
        <div className="content">
            <p className="headingLarge">ABOUT ME</p>
            <p className="heading">I spent the last 10 years as a professional chef, working in
                kitchens in downtown Toronto. During my time in that career, I gained extensive leadership
                and team-management skills, as well as quite a strong work ethic.
            </p>
            <br></br>
            <div className="pictureContainer">
                <img className="photo" src={portrait} alt="portrait image" width={'320px'} height={'450px'}></img>
                <img className="photo" src={food} alt="portrait image" width={'320px'} height={'450px'}></img>
                <img className="photo" src={portrait2} alt="portrait image" width={'320px'} height={'450px'}></img>
            </div>
            <br></br>
            <p className="heading">
                I've recently decided to make a switch, however, to another career path. I believe
                that there's a lot of work to be done in the Health Informatics field, so that's
                what I'm going to do.
            </p>
            <br></br>
            <p className="heading">Below is a copy of my resume, which contains a detailed list of my
                past experience/qualifications.
            </p>
            <hr className="hrLight" style={{ marginBottom: '0' }}></hr>
            <a download="Zain Gova - Resume.pdf" href={resumeFile}><button className="download" href={resumeFile} style={{ marginTop: '1.7em' }}>Download Resume</button></a>
            <br></br>
            <a href={resumeFile}><img src={resumeImg} className="resume"></img></a>
            <ToTopButton />
            <Footer socials={socials} />
        </div>
    );
}