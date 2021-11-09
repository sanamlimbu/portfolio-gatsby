import React from "react"
import "./about.css"
const About = () => {
	return (
		<div className="about">
			<div className="heading">
				<h1> Hi, I'm Sanam!</h1>
			</div>
			<div className="content">
				<span style={{ fontWeight: "bold" }}>Software Developer</span>
				<span> based in Perth, Australia.</span>
				<br />
				<span>I am passionate about solving problems with software technology.</span>
				<br />
				<span>I have experience in doing multiple projects and using tools ranging from </span>
				<br />
				<span style={{ fontWeight: "bold" }}>HTML, JavaScript, React, Typescript, Go, and Node.js.</span>
			</div>
		</div>
	)
}

export { About }
