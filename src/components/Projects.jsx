import React from "react";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <div>
            <div className="projects">
                {projects.map(({ id, title, description, img, link }) => (
                    <div key={id} className="project">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <h2 className="projectHeading">{id}. {title}</h2>
                        </a>
                        <p className="subheading">{description}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={img} alt="Fun With Food" className="projectImg"></img>
                        </a>
                        <br></br>
                        <hr className="dividerThin"></hr>
                    </div>
                ))}
            </div>
        </div>
    );
}