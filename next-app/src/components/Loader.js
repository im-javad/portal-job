import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader z-50 hidden" id="loader">
      <Image
        src={"/loader.svg"}
        className="img-loader"
        width={100}
        height={100}
      />
      <strong>Loading...</strong>
    </div>
  );
};

export default Loader;
