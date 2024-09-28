import Save from "./save";

const Saved = ({ saved }) => {
  const preparedSaved = saved.map((save) => <Save save={save} />);
  return <>{preparedSaved}</>;
};

export default Saved;
