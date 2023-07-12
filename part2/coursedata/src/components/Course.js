const Header = (props) => {
    return <h2>{props.course}</h2>
}

const Total = ({ sumOfExercises }) => {
    return <p>Number of exercises {sumOfExercises}</p>
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total sumOfExercises={course.parts.reduce((acc, current) => acc + current.exercises, 0)} />
        </div>
    )
}

export default Course