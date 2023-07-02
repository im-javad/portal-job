import Ad from "./ad";

const Ads = ({ jobs }) => {
  const preparedJobs = jobs.map((job) => <Ad job={job} />);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {preparedJobs}
    </div>
  );
};

export default Ads;
