import ToTopButton from "./ToTopButton";
const resume = new URL('../assets/resume.png', import.meta.url).href
const resume2 = new URL('../assets/resume2.png', import.meta.url).href

export default function Contact() {
    return(
        <div className="content">
            <p className="headingLarge italic">CONTACT</p>
            <p className="heading">On the other hand, we denounce with righteous indignation and dislike 
                men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded
                 by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal
                  blame belongs to those who fail in their duty through weakness of will, which is the same
                   as saying through shrinking from toil and pain.</p>
            <button onClick={() => {
                
            }}>Download Resume</button>
            <br></br>
            <a href={resume}><img src={resume} className="resume"></img></a>
            <a href={resume2}><img src={resume2} className="resume"></img></a>

            <ToTopButton/>
        </div>
    )
}