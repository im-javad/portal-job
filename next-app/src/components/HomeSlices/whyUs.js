import Image from "next/image";
import Link from "next/link";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

const WhyUs = () => {
  return (
    <section id="why-us" className="mt-24 mb-32">
      <div className="flex-col flex items-center mb-7 px-4">
        <h2 className="text-appColor_2 text-3xl font-bold">Why Us?</h2>
        <h3 className="text-xl font-bold text-appColor_4 text-center">
          One of the reasons that make you trust
        </h3>
      </div>
      <div className="container mx-auto px-4">
        <div className="left-part flex md:flex-row md:justify-around items-center flex-col mb-12">
          <div className="img flex justify-center w-full md:w-5/12">
            <Image height={300} width={300} src="/Relationship.avif"></Image>
          </div>
          <div className="content w-full md:w-5/12 flex flex-col">
            <h3>Strong network</h3>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Egestas purus
              viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
              rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
              euismod nisi porta lorem mollis.
            </p>
            <div className="guidance flex items-center">
              <Link href="/about-us">Read more about details</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
        </div>
        <div className="right-part flex md:flex-row md:justify-around items-center flex-col mb-12">
          <div className="content w-full md:w-5/12 flex-col hidden md:flex">
            <h3>Low cost and free</h3>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Egestas purus
              viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
              rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
              euismod nisi porta lorem mollis.
            </p>
            <div className="guidance flex items-center">
              <Link href="/about-us">Read more about details</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
          <div className="img flex justify-center w-full md:w-5/12">
            <Image height={300} width={300} src="/time.avif"></Image>
          </div>
          <div className="content w-full flex flex-col md:hidden">
            <h3>Low cost and free</h3>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Egestas purus
              viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
              rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
              euismod nisi porta lorem mollis.
            </p>
            <div className="guidance flex items-center">
              <Link href="/about-us">Read more about details</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
        </div>
        <div className="left-part flex md:flex-row md:justify-around items-center flex-col mb-12">
          <div className="img flex justify-center w-full md:w-5/12">
            <Image height={300} width={300} src="/support.avif"></Image>
          </div>
          <div className="content w-full md:w-5/12 flex flex-col">
            <h3>Support 24/7</h3>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Egestas purus
              viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
              rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
              euismod nisi porta lorem mollis.
            </p>
            <div className="guidance flex items-center">
              <Link href="/about-us">Read more about details</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
        </div>
        <div className="right-part flex md:flex-row md:justify-around items-center flex-col">
          <div className="content w-full md:w-5/12 flex-col hidden md:flex">
            <h3>Simple and convenient</h3>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Egestas purus
              viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
              rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
              euismod nisi porta lorem mollis.
            </p>
            <div className="guidance flex items-center">
              <Link href="/about-us">Read more about details</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
          <div className="img flex justify-center w-full md:w-5/12">
            <Image height={300} width={300} src="/easy.avif"></Image>
          </div>
          <div className="content w-full flex flex-col md:hidden">
            <h3>Simple and convenient</h3>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Egestas purus
              viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
              rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
              euismod nisi porta lorem mollis.
            </p>
            <div className="guidance flex items-center">
              <Link href="/about-us">Read more about details</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
