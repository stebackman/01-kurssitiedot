import Parts from "./Part";
const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <li key={part.id}>
          {part.name}:{part.exercises}
        </li>
      ))}
    </ul>
  );
};
export default Content;
