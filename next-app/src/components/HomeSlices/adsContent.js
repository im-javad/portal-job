import Ads from "./ads";

const AdsContent = ({ jobs }) => {
  return (
    <section id="jobs">
      <div className="container mx-auto px-4">
        <div className="flex justify-center text-3xl font-bold mb-7">
          <h2>7,777 Job Listed</h2>
        </div>
        <Ads jobs={jobs} />
        <div className="pagination join w-full flex justify-center mt-5 mb-14">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 77</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </section>
  );
};

export default AdsContent;

