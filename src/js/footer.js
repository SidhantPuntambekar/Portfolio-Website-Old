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
    }
}