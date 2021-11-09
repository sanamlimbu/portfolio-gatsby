import React from "react"
import "./footer.css"

const Copyright = () => {
	return (
		<>
			{"Copyright © "}
			{new Date().getFullYear()}
			{"."}
			{" Sanam Limbu. All rights reserved."}
		</>
	)
}
const Footer = () => {
	return (
		<div className="footer">
			<Copyright />
		</div>
	)
}

export { Footer }
