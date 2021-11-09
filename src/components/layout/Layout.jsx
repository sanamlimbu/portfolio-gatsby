import React from "react"
import { Helmet } from "react-helmet"
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const Layout = ({ children }) => {
	const { theme, setTheme } = useContext(ThemeContext)
	return (
		<>
			<Helmet htmlAttributes={{ lang: "en" }}>
				<title>Sanam Limbu Portfolio | Fullstack Web Developer</title>
				<meta
					name="description"
					content="Sanam Limbu's portfolio website. Here you will find information about Sanam, his contact details, and links to his projects."
				/>
			</Helmet>
			<header>
				<Header />
			</header>
			{theme === "light" ? (
				<body>
					<main>{children}</main>
				</body>
			) : (
				<body className="dark">
					<main>{children}</main>
				</body>
			)}

			<footer>
				<Footer />
			</footer>
		</>
	)
}

export { Layout }
