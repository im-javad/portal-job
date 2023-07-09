import NothingFound from "../NothingFound";
import Ads from "./ads";

const MyAds = ({ ads }) => {
  return (
    <div className="my-ads">
      {ads.length === 0 ? (
        <NothingFound />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Ads ads={ads} />
        </div>
      )}
    </div>
  );
};

export default MyAds;
