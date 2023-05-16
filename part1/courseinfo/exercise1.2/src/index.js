import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				title: "Fundamentals of React",
				exercises: 10,
			},
			{
				title: "Using props to pass data",
				exercises: 7,
			},
			{
				title: "State of a component",
				exercises: 14,
			},
		]	
	};
	
	return (
	  <div>
		<Header course={course.name} />
		<Content parts={course.parts} />
		<Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
	  </div>	
	);
}

const Header = ({ course }) => {
	return (
	  <>
		<h1>{course}</h1>
	  </>
	);
}

const Content = ({ parts }) => {
	return (
	  <>
		<Part title={parts[0].title} exercises={parts[0].exercises} />
		<Part title={parts[1].title} exercises={parts[1].exercises} />
		<Part title={parts[2].title} exercises={parts[2].exercises} />
	  </>
	);
}

const Part = ({ title, exercises }) => {
	return (
	  <>
	  	<p>
			{title} {exercises}
		</p>
	  </>
	);
}

const Total = ({ exercises }) => {
	return (
	  <>
	  	<p>Number of exercises {exercises}</p>
	  </>
	);
}

ReactDOM.render(<App />, document.getElementById('root')) 
