import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader z-50 hidden" id="loader">
      <Image
        src={"/loader.svg"}
        className="img-loader"
        width={90}
        height={90}
      />
    </div>
  );
};

export default Loader;
