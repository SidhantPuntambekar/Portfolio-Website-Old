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
    spotify:
    {
        icon: FaSpotify,
        path: 
    }
}