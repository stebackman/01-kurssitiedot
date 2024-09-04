/* Todo: Content.jsx ska uppdateras så att de funkar fast en kurs sku tas bort*/

import Course from "./Course";
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
