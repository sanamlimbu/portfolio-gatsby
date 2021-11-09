import React from "react"
import "./title.css"

const Title = ({ name }) => {
	return (
		<div className="title">
			<span>{name}</span>
		</div>
	)
}

export { Title }
