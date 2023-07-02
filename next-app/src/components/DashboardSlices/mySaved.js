import Saved from "./saved";

const MySaved = ({ saved }) => {
  return (
    <div className="ones-shown">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Saved saved={saved}/>
      </div>
    </div>
  );
};

export default MySaved;
