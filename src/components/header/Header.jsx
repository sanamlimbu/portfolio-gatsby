import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

import "./header.css"
import { Dark } from "../dark/Dark"

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	return (
		<nav>
			<div className="header">
				<div className="headerWrapper">
					<div className="headerLeft">
						<AnchorLink to="/#about" className="menuItem">
							<div className="logo">
								<StaticImage src="../../images/icon.png" alt="Logo of www.slimbu.dev" />
							</div>
						</AnchorLink>
					</div>
					<div className="headerRight">
						<div className="menuItemContainer">
							<AnchorLink to="/#contact" className="menuItem">
								Home
							</AnchorLink>
						</div>
						<div className="menuItemContainer">
							<AnchorLink to="/resume" className="menuItem">
								Resume
							</AnchorLink>
						</div>
						<div className="menuItemContainer dark">
							<Dark />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export { Header }
