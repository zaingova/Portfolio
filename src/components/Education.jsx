import ToTopButton from "./ToTopButton"
import Footer from "./Footer"
import { socials } from "../data/socials"

export default function Education() {
    return(
        <div className="content">
            <p className="headingLarge italic">EDUCATION & QUALIFICATIONS</p>
            <p className="heading">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                 voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <ToTopButton/>
            <Footer socials={socials}/>
        </div>
    )
}