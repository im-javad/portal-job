import Link from "next/link";

const HeroHeader = () => {
  return (
    <section className="container mx-auto px-4 mb-7">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full block">
          <img
            src="/carousel-md-1.jpg"
            className="hidden md:block brightness-[0.4] rounded-lg"
          />
          <img
            src="/carousel-1.jpg"
            className="w-full md:hidden rounded-lg brightness-[0.4]"
          />
          <div className="absolute -translate-y-1/2 md:left-1/2 left-[45%] bottom-3">
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute xl:bottom-[30%] lg:bottom-[24%] md:bottom-[26%] bottom-[30%] md:px-11 px-4 flex flex-col lg:w-1/2">
            <h1 className="text-run 2xl:text-6xl xl:text-4xl lg:text-3xl lg:mb-10 text-2xl md:mb-7 mb-5 font-bold">
              Find The Perfect Job That You Deserved
            </h1>
            <span className="text-run 2xl:text-xl lg:text-lg text-md lg:mb-7 mb-4">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </span>
            <div>
              <Link href="about-us">
                <button className="bg-appColor_2 text-run md:py-3 md:px-6 py-2 px-4 rounded 2xl:text-lg xl:text-md text-sm 2xl:font-medium font-bold">
                  ABOUT US
                </button>
              </Link>
              <Link href="contact-us">
                <button className="bg-appColor_3 text-appColor_1 md:py-3 md:px-6 py-2 px-4 rounded 2xl:text-lg xl:text-md ms-5 text-sm 2xl:font-medium font-bold">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full block">
          <img
            src="/carousel-md-2.jpg"
            className="hidden md:block brightness-[0.4] rounded-lg"
          />
          <img
            src="/carousel-2.jpg"
            className="w-full md:hidden brightness-[0.4] rounded-lg"
          />
          <div className="absolute -translate-y-1/2 md:left-1/2 left-[45%] bottom-3">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
          </div>
          <div className="absolute xl:bottom-[30%] lg:bottom-[24%] md:bottom-[26%] bottom-[30%] md:px-11 px-4 flex flex-col lg:w-1/2">
            <h1 className="text-run 2xl:text-6xl xl:text-4xl lg:text-3xl lg:mb-10 text-2xl md:mb-7 mb-5 font-bold">
              Find The Perfect Job That You Deserved
            </h1>
            <span className="text-run 2xl:text-xl lg:text-lg text-md lg:mb-7 mb-4">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </span>
            <div>
              <Link href="about-us">
                <button className="bg-appColor_2 text-run md:py-3 md:px-6 py-2 px-4 rounded 2xl:text-lg xl:text-md text-sm 2xl:font-medium font-bold">
                  ABOUT US
                </button>
              </Link>
              <Link href="contact-us">
                <button className="bg-appColor_3 text-appColor_1 md:py-3 md:px-6 py-2 px-4 rounded 2xl:text-lg xl:text-md ms-5 text-sm 2xl:font-medium font-bold">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
