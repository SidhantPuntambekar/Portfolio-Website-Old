import React from "react";
import Layout from "../components/Layout";
import ResponsiveContainer from "../components/ResponsiveContainer";

export default () => (
	<Layout>
		<h2>About me</h2>
		<ResponsiveContainer responsiveWidths={[3, 9]}>
            <img src = {"static/me.jpg"} alt={"Sidhant Puntambekar"} style= {{width: "100%"}} />
            <p style = {{margin: "10px"}}>Hey! I'm Sidhant Puntambekar. This website is meant to serve as a portfolio of my work and a place for me to share some of my interests. I am currently {new Date(new Date() - new Date(2001, 6, 7)).getFullYear() - 1970} years old. I am currently an undergraduate at the University of Colorado Boulder studying Computer Science and minoring in Computational Biology and Molecular, Cellular, and Developmental Biology. My main passions are at the intersection of computer science and molecular biology. In my free time, I love working on other programming project, doing Tae Kwon Do, and playing the electric guitar. I also am a fan of many sports from football to boxing to basketball to mixed martial arts.</p>
        </ResponsiveContainer>
    </Layout>
)