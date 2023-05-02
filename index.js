const Box = (props) => {
  const { className, Text } = props;
  return <div className={`${className}`}>{Text}</div>;
};

const element = (
  <div className="bg-container">
    <h1 className="tittle">Boxes</h1>
    <div className="boxes-container">
      <Box className="box1" Text="Small" />
      <Box className="box2" Text="Medium" />
      <Box className="box3" Text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
