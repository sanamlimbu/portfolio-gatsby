import * as React from "react"
import { Layout } from "../components/layout/Layout"
import { About } from "../components/about/About"
import { Projects } from "../components/projects/Projects"
import { Contact } from "../components/contact/Contact"
import { ThemeContext } from "../context/ThemeContext"
import { useState } from "react"

const IndexPage = () => {
	const [theme, setTheme] = useState("light")
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Layout>
				<About />
				<Projects />
				<Contact />
			</Layout>
		</ThemeContext.Provider>
	)
}

export default IndexPage
