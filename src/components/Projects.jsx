import React from "react";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <div>
            <div className="projects">
                {projects.map(({ id, title, description, img, link }) => (
                    <div key={id} className="project">
                        <div className="projectCard">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <h2 className="projectHeading">{title}</h2>
                            </a>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={img} alt="Fun With Food" className=""></img>
                            </a>
                            <hr></hr>
                            <p className="subheading">{description}</p>
                            <a href={link} target="_blank">
                                <button className="download">Take me to the project repository!</button>
                            </a>
                        </div>
                        <br></br>
                        <hr className="dividerThin"></hr>
                    </div>
                ))}
            </div>
        </div>
    );
}