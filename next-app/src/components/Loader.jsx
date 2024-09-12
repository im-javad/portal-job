import Image from "next/image";

const Loader = ({ notPage }) => {
  return (
    <div
      className={`loader z-50 ${notPage ? "notPage" : "onPage"}`}
      id="loader"
    >
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
