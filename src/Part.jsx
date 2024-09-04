const Parts = (props) => {
  console.log("partsissa,propsi", props);
  return (
    <p>
      {props.name}:{props.exercises}
    </p>
  );
};
export default Parts;
