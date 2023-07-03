import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader z-50">
      <Image src={"/loader.svg"} width={50} height={50} />
    </div>
  );
};

export default Loader;
