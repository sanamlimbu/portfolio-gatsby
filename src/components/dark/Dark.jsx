import React from "react"
import { useEffect, useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { BsMoonFill, BsSun } from "react-icons/bs"

const Dark = () => {
	const { theme, setTheme } = useContext(ThemeContext)
	const DARKMODE = "slimbu"
	useEffect(() => {
		const tv = localStorage.getItem(DARKMODE)
		if (tv !== null) {
			setTheme(tv)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(DARKMODE, theme)
	}, [theme])

	return (
		<div
			onClick={() => {
				theme === "dark" ? setTheme("light") : setTheme("dark")
			}}
		>
			{theme === "dark" ? <BsSun size="1.2rem" /> : <BsMoonFill size="1.2rem" />}
		</div>
	)
}

export { Dark }
