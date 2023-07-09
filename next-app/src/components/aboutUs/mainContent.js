import Link from "next/link";
import { LuHeartHandshake } from "react-icons/lu";

const MainContent = () => {
  return (
    <section id="about-us" className="mb-24">
      <div className="container mx-auto px-4">
        <div className="about flex flex-col md:flex-row justify-between items-center">
          <div className="imgs w-full md:w-6/12 flex flex-col mb-8 shadow-lg shadow-appColor_4">
            <div className="img-group flex">
              <div className="w-6/12">
                <img className="image-full" src="about-us-7-eddit.jpg" />
              </div>
              <div className="w-6/12 grid grid-rows-6">
                <div className="row-start-7">
                  <img className="image-full" src="about-us-3.jpg" />
                </div>
              </div>
            </div>
            <div className="img-group flex">
              <div className="w-6/12">
                <img className="image-full" src="about-us-4.jpg" />
              </div>
              <div className="w-6/12">
                <img src="abount-us-2.png" />
              </div>
            </div>
          </div>
          <div className="content w-full md:w-5/12">
            <h1 class="mb-5 font-bold text-2xl md:text-3xl text-appColor_1">
              We are with you until you find a job!
            </h1>
            <p className="mb-5 text-appColor_4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget.
            </p>
            <ul className="mb-7">
              <li className="flex items-center mb-3">
                <i className="text-appColor_5 text-xl me-2">
                  <LuHeartHandshake />
                </i>
                <strong className="text-appColor_2">
                  Lorem ipsum dolor sit amet, adipiscing
                </strong>
              </li>
              <li className="flex items-center mb-3">
                <i className="text-appColor_5 text-xl me-2">
                  <LuHeartHandshake />
                </i>
                <strong className="text-appColor_2">
                  Lorem ipsum dolor sit amet, adipiscing
                </strong>
              </li>
              <li className="flex items-center mb-3">
                <i className="text-appColor_5 text-xl me-2">
                  <LuHeartHandshake />
                </i>
                <strong className="text-appColor_2">
                  Lorem ipsum dolor sit amet, adipiscing
                </strong>
              </li>
              <li className="flex items-center mb-3">
                <i className="text-appColor_5 text-xl me-2">
                  <LuHeartHandshake />
                </i>
                <strong className="text-appColor_2">
                  Lorem ipsum dolor sit amet, adipiscing
                </strong>
              </li>
              <li className="flex items-center mb-3">
                <i className="text-appColor_5 text-xl me-2">
                  <LuHeartHandshake />
                </i>
                <strong className="text-appColor_2">
                  Lorem ipsum dolor sit amet, adipiscing
                </strong>
              </li>
            </ul>
            <Link href="/contact-us" className="flex justify-center">
              <button className="contact-us-btn w-full md:w-1/2">
                CONTACT WITH US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
