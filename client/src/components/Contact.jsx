// Contact.jsx - Zain Gova - 301018602 - September 22, 2024

import ToTopButton from "./ToTopButton";
import Footer from "./Footer"
import { socials } from "../data/socials"
import React, { useState } from "react";

const resumeImg = new URL('../assets/resumeImg.png', import.meta.url).href

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        alert(JSON.stringify(formData))
    }

    return (
        <div className="content">
            <p className="headingLarge">CONTACT</p>
            <p className="heading">Use the form below to send me a message!</p>
            <hr className="hrLight"></hr>
            <form className="contactForm" onSubmit={handleSubmit}>
                <label>Your Name</label><br></br>
                <input type="text" onChange={handleChange} name="name" value={formData.name}></input><br></br>
                <label>Your Email</label><br></br>
                <input type="text" onChange={handleChange} name="email" value={formData.email}></input><br></br>
                <label>Your Message</label><br></br>
                <textarea rows={9} onChange={handleChange} name="message" value={formData.message}></textarea>
                <button type="submits" className="download" style={{ marginBottom: '0' }}>Submit Form</button>
            </form>

            <ToTopButton />
            <Footer socials={socials} />
        </div>
    )
}