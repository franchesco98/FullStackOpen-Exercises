import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
	const contents = {
		course: "Half Stack application development",
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
		<Header course={contents.course} />
		<Content content={contents.parts} />
		<Total exercises={contents.parts[0].exercises + contents.parts[1].exercises + contents.parts[2].exercises}/>
	  </div>	
	);
}

const Header = (props) => {
	return (
	  <>
		<h1>{props.course}</h1>
	  </>
	);
}

const Content = (props) => {
	return (
	  <>
		<Part title={props.content[0].title} exercises={props.content[0].exercises} />
		<Part title={props.content[1].title} exercises={props.content[1].exercises} />
		<Part title={props.content[2].title} exercises={props.content[2].exercises} />
	  </>
	);
}

const Part = (props) => {
	return (
	  <>
	  	<p>
			{props.title} {props.exercises}
		</p>
	  </>
	);
}

const Total = (props) => {
	return (
	  <>
	  	<p>Number of exercises {props.exercises}</p>
	  </>
	);
}

ReactDOM.render(<App />, document.getElementById('root')) 
