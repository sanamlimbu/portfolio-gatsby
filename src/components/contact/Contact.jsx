import React from "react"
import { Title } from "../title/Title"
import { MdEmail } from "react-icons/md"
import { FaFacebookF, FaTwitter, FaGithub, Famail, FaLinkedin } from "react-icons/fa"

import "./contact.css"
const Contact = () => {
	return (
		<div className="contact">
			<div className="title">
				<Title name="CONTACTS" />
			</div>
			<div className="contactContainer">
				<div className="contactItem email">
					<span s>
						<MdEmail style={{ background: "#242a30" }} />
					</span>
				</div>
				<div className="contactItem linkedin">
					<span style={{ background: "#0e76a8" }}>
						<FaLinkedin style={{ color: "green", fontSize: "2rem" }} />
					</span>
				</div>
				<div className="contactItem github">
					<span style={{ background: "#171515" }}>
						<FaGithub style={{ color: "", fontSize: "2rem" }} />
					</span>
				</div>
				<div className="contactItem twitter">
					<span style={{ background: "#1DA1F2" }}>
						<FaTwitter style={{ color: "green", fontSize: "2rem" }} />
					</span>
				</div>
			</div>
		</div>
	)
}

export { Contact }
