import Image from "next/image";

const NothingFound = () => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div>
        <Image src="/empty.avif" width={250} height={250}></Image>
      </div>
      <div>
        <strong className="text-2xl text-appColor_1">Nothing found</strong>
      </div>
    </div>
  );
};

export default NothingFound;
