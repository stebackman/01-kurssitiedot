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
      <Part nimi={props.part[0].name} exercise={props.part[0].exercise} />
      <Part nimi={props.part[1].name} exercise={props.part[1].exercise} />
      <Part nimi={props.part[2].name} exercise={props.part[2].exercise} />
    </>
  );
};
const Part = (props) => {
  return (
    <p>
      {props.nimi}:{props.exercise}
    </p>
  );
};
const Total = (props) => {
  return (
    <p>
      Number of exercises:
      {props.part[0].exercise + props.part[1].exercise + props.part[2].exercise}
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
      <Content part={part} />
      <Total part={part} />
    </div>
  );
};

export default App;
