import React from "react";
import {FaRegEnvelope, FaGithub, FaSpotify, FaLinkedin, FaPhone} from "react-icons/fa";
import ResponsiveContainer from "./ResponsiveContainer";
import "../styles/Footer.css";

const icons = 
{
    email: 
    {
        icon: FaRegEnvelope,
        path: "mailto:Sidhant.Puntambekar@colorado.edu"
    },
    phone:
    {
        icon: FaPhone,
        path: "tel:7202508098"
    },
    github:
    {
        icon: FaGithub,
        path: "https://github.com/SidhantPuntambekar"
    },
    linkedin:
    {
        icon: FaLinkedin,
        path: "https://www.linkedin.com/in/sidhant-puntambekar-0bb881130/"
    },
};
const iconWidth = 100 / Object.keys(icons).length;

export default () => (
	<footer>
		<ResponsiveContainer responsiveWidths={[3, 9]}>
            <div style={{width: "100%", textAlign: "center"}}>Contact me:</div>
			<div style={{width: "100%"}}>{
                Object.keys(icons).map(icon => <a className={"footerLink"} href={icons[icon].path} style={{width:`${iconWidth}%`}} key={icon} aria-label={icon}>{icons[icon].icon()}</a>)
			} </div>
        </ResponsiveContainer>
    </footer>
)
