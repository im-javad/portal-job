import Ad from "./ad";

const Ads = ({ ads }) => {
  const preparedAds = ads.map((ad) => <Ad ad={ad} />);

  return <> {preparedAds}</>;
};

export default Ads;
