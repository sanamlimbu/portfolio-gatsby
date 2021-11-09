import React from "react"
import { Title } from "../title/Title"
import "./projects.css"
const Projects = () => {
	return (
		<div className="projects">
			<div className="title">
				<Title name="PROJECTS" />
			</div>
			<div className="projectsContainer">
				<div className="project">
					<div className="projectTitle">
						<h3>Study Nook</h3>
					</div>
					<div className="projectDescription">
						<p>
							A productivity app developed as chrome extension based on Pomodoro technique to make its users more productive during study. Covers
							full stack using React, TypeScript, Golang, Docker, and PostgreSQL. (Still under construction)
						</p>
					</div>
					<div className="linkContainer">
						<div className="link">
							<button> Live</button>
						</div>
						<div className="link">
							<button>GitHub</button>
						</div>
					</div>
				</div>
				<div className="project">
					<div className="projectTitle">
						<h3>Admin Dashboard</h3>
					</div>
					<div className="projectDescription">
						<p>
							A front-end app that provides dashboard interface. User can view analytics graphs and perform CRUD operations. It can be used as
							boilerplate in other projects. It is developed using React, Material UI v4, and CSS.
						</p>
					</div>
					<div className="linkContainer">
						<div className="link">
							<button> Live</button>
						</div>
						<div className="link">
							<button>GitHub</button>
						</div>
					</div>
				</div>
				<div className="project">
					<div className="projectTitle">
						<h3>DVD Flix</h3>
					</div>
					<div className="projectDescription">
						<p>
							A fullstack app where a users can rent the DVD/Bluray online. Implemented using React, Node.js, Express.js, Mongoose, and MongoDB.
							It has interface to perform administrative tasks.(Not live yet, as still under construction)
						</p>
					</div>
					<div className="linkContainer">
						<div className="link">
							<button> Live</button>
						</div>
						<div className="link">
							<button>GitHub</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Projects }
