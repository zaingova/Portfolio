import ToTopButton from "./ToTopButton";
import resumeFile from "../assets/resumeFile.pdf";
import Footer from "./Footer"
import { socials } from "../data/socials"

const resumeImg = new URL('../assets/resumeImg.png', import.meta.url).href

export default function Contact() {
    return(
        <div className="content">
            <p className="headingLarge">CONTACT</p>
            <p className="heading">On the other hand, we denounce with righteous indignation and dislike 
                men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded
                 by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal
                  blame belongs to those who fail in their duty through weakness of will, which is the same
                   as saying through shrinking from toil and pain.</p>
            
            <ToTopButton/>
            <Footer socials={socials}/>
        </div>
    )
}