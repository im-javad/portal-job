import Image from "next/image";
import Link from "next/link";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="flex-col flex items-center mb-7">
        <h2 className="text-appColor_2 text-3xl font-bold">Why Us?</h2>
        <h3 className="text-xl font-bold text-appColor_4 text-center">
          Domain name registration is only the beginning
        </h3>
      </div>
      <div className="container mx-auto px-4">
        <div className="left-part flex md:flex-row md:justify-around items-center flex-col mb-14">
          <div className="img flex justify-center w-full md:w-5/12">
            <Image height={300} width={300} src="/Relationship.avif"></Image>
          </div>
          <div className="content w-full md:w-5/12 flex flex-col">
            <h3>Hellllooo</h3>
            <p>
              Register a domain name and create your online identity. Use our
              advanced domain name generator to get your ideal choice right
              away. Already have a domain registered somewhere else? No problem
              — domain transfers are free and easy.Register a domain name and
              create your online identity.
            </p>
            <div className="guidance flex items-center">
              <Link href="#">Discover all domain extensions</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
        </div>
        <div className="right-part flex md:flex-row md:justify-around items-center flex-col mb-14">
          <div className="content w-full md:w-5/12 flex-col hidden md:flex">
            <h3>Hellllooo</h3>
            <p>
              Register a domain name and create your online identity. Use our
              advanced domain name generator to get your ideal choice right
              away. Already have a domain registered somewhere else? No problem
              — domain transfers are free and easy.Register a domain name and
              create your online identity.
            </p>
            <div className="guidance flex items-center">
              <Link href="#">Discover all domain extensions</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
          <div className="img flex justify-center w-full md:w-5/12">
            <Image height={300} width={300} src="/time.avif"></Image>
          </div>
          <div className="content w-full flex flex-col md:hidden">
            <h3>Hellllooo</h3>
            <p>
              Register a domain name and create your online identity. Use our
              advanced domain name generator to get your ideal choice right
              away. Already have a domain registered somewhere else? No problem
              — domain transfers are free and easy.Register a domain name and
              create your online identity.
            </p>
            <div className="guidance flex items-center">
              <Link href="#">Discover all domain extensions</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
        </div>
        <div className="left-part flex md:flex-row md:justify-around items-center flex-col mb-14">
          <div className="img flex justify-center w-full md:w-5/12">
            <Image height={300} width={300} src="/support.avif"></Image>
          </div>
          <div className="content w-full md:w-5/12 flex flex-col">
            <h3>Hellllooo</h3>
            <p>
              Register a domain name and create your online identity. Use our
              advanced domain name generator to get your ideal choice right
              away. Already have a domain registered somewhere else? No problem
              — domain transfers are free and easy.Register a domain name and
              create your online identity.
            </p>
            <div className="guidance flex items-center">
              <Link href="#">Discover all domain extensions</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
        </div>
        <div className="right-part flex md:flex-row md:justify-around items-center flex-col mb-14">
          <div className="content w-full md:w-5/12 flex-col hidden md:flex">
            <h3>Hellllooo</h3>
            <p>
              Register a domain name and create your online identity. Use our
              advanced domain name generator to get your ideal choice right
              away. Already have a domain registered somewhere else? No problem
              — domain transfers are free and easy.Register a domain name and
              create your online identity.
            </p>
            <div className="guidance flex items-center">
              <Link href="#">Discover all domain extensions</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
          <div className="img flex justify-center w-full md:w-5/12">
            <Image height={300} width={300} src="/easy.avif"></Image>
          </div>
          <div className="content w-full flex flex-col md:hidden">
            <h3>Hellllooo</h3>
            <p>
              Register a domain name and create your online identity. Use our
              advanced domain name generator to get your ideal choice right
              away. Already have a domain registered somewhere else? No problem
              — domain transfers are free and easy.Register a domain name and
              create your online identity.
            </p>
            <div className="guidance flex items-center">
              <Link href="#">Discover all domain extensions</Link>
              <IoArrowRedoCircleOutline className="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
