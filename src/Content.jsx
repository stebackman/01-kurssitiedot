import Parts from "./Part";
const Content = (props) => {
  return (
    <>
      <Parts name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Parts name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Parts name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
};
export default Content;
