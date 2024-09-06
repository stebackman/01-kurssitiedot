import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <>
      {course.map((courseItem, index) => (
        <div key={index}>
          <Header course={courseItem.name} />
          <Content parts={courseItem.parts} />
          <Total parts={courseItem.parts} />
        </div>
      ))}
    </>
  );
};
export default Course;
