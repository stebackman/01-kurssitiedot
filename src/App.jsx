const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};
const Content = (props) => {
  return (
    <>
      <Part nimi={props.part} task={props.exercise} />
    </>
  );
};
const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.nimi}:{props.task}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises:
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part = [
    {
      name: "Fundamentals of React",
      exercise: 10,
    },
    {
      name: "Using props to pass data",
      exercise: 7,
    },
    {
      name: "State of a component",
      exercise: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part={part[0].name} exercise={part[0].exercise} />
      <Content part={part[1].name} exercise={part[1].exercise} />
      <Content part={part[2].name} exercise={part[2].exercise} />

      <Total
        exercises1={part[0].exercise}
        exercises2={part[1].exercise}
        exercises3={part[2].exercise}
      />
    </div>
  );
};

export default App;
