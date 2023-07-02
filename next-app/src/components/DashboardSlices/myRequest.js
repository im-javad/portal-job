import Requests from "./requests";

const MyRequests = ({ requests }) => {
  return (
    <div className="my-requests">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Requests requests={requests} />
      </div>
    </div>
  );
};

export default MyRequests;
