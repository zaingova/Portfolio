import ToTopButton from "./ToTopButton"
import Footer from "./Footer"
import { socials } from "../data/socials"

export default function Services() {
    return(
        <div className="content">
            <p className="headingLarge">SERVICES</p>
            <p className="heading">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                 voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <hr className="hrLight"></hr>
            <ToTopButton/>
            <Footer socials={socials}/>
        </div>
    )
}