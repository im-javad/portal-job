import Request from "./request";

const Requests = ({ requests }) => {
  const preparedRequest = requests.map((request) => (
    <Request request={request} />
  ));

  return <>{preparedRequest}</>;
};

export default Requests;
