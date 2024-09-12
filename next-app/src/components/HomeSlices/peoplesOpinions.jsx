import Image from "next/image";

const PeoplesOpinions = () => {
  return (
    <section id="peoples-opinions" className="mt-16 mb-48">
      <div className="flex-col flex items-center mb-7 px-4">
        <h2 className="text-appColor_2 text-3xl font-bold">
          People's Opinions!
        </h2>
        <h3 className="text-xl font-bold text-appColor_4 text-center">
          Other people's comments about our activity
        </h3>
      </div>
      <div className="container mx-auto px-4">
        <div className="comments-wrapper">
          <div className="items flex gap-5">
            <div className="item w-full md:w-1/2 lg:w-1/3 flex flex-col">
              <div className="user-info">
                <div className="user-img">
                  <Image
                    src={"/pfp-1.jpg"}
                    width={60}
                    height={60}
                    alt="tommy"
                  ></Image>
                </div>
                <div className="user-name">
                  <strong>Michael Johnson</strong>
                </div>
              </div>
              <div className="content">
                <p>
                  The recruitment process was smooth, and they found me a role
                  perfectly suited to my skills. I highly recommend them for job
                  seekers!
                </p>
              </div>
            </div>
            <div className="item w-full md:w-1/2 lg:w-1/3 flex flex-col">
              <div className="user-info">
                <div className="user-img">
                  <Image
                    src={"/pfp-2.jpg"}
                    width={60}
                    height={60}
                    alt="tommy"
                  ></Image>
                </div>
                <div className="user-name">
                  <strong>James Miller</strong>
                </div>
              </div>
              <div className="content">
                <p>
                  Working with this recruitment agency was one of the best
                  decisions I made during my job search. From day one, the team
                  was committed to helping me find the right fit, not just any
                  job. They offered personalized support and went the extra mile
                  to ensure I was well-prepared for interviews. The roles they
                  presented were closely aligned with my experience and
                  ambitions, making the whole process efficient and rewarding.
                  I’m incredibly thankful for their professionalism and support
                  throughout.
                </p>
              </div>
            </div>
            <div className="item w-full md:w-1/2 lg:w-1/3 flex flex-col">
              <div className="user-info">
                <div className="user-img">
                  <Image
                    src={"/pfp-3.jpg"}
                    width={60}
                    height={60}
                    alt="tommy"
                  ></Image>
                </div>
                <div className="user-name">
                  <strong>Emily Davis</strong>
                </div>
              </div>
              <div className="content">
                <p>
                  Great service! The team provided excellent guidance and kept
                  me informed throughout the process. I landed a great job
                  thanks to their support.
                </p>
              </div>
            </div>
            <div className="item w-full md:w-1/2 lg:w-1/3 flex flex-col">
              <div className="user-info">
                <div className="user-img">
                  <Image
                    src={"/pfp-4.jpg"}
                    width={60}
                    height={60}
                    alt="tommy"
                  ></Image>
                </div>
                <div className="user-name">
                  <strong>William Wilson</strong>
                </div>
              </div>
              <div className="content">
                <p>
                  Amazing experience! The staff was friendly and knowledgeable,
                  making the entire job search process easy and stress-free.
                </p>
              </div>
            </div>
            <div className="item w-full md:w-1/2 lg:w-1/3 flex flex-col">
              <div className="user-info">
                <div className="user-img">
                  <Image
                    src={"/pfp-5.jpg"}
                    width={60}
                    height={60}
                    alt="tommy"
                  ></Image>
                </div>
                <div className="user-name">
                  <strong>Sophia Martinez</strong>
                </div>
              </div>
              <div className="content">
                <p>
                  This company truly exceeded my expectations. The recruiters
                  were incredibly thorough in understanding my strengths and
                  aspirations, and they worked diligently to connect me with the
                  right employers. Their communication was top-notch, keeping me
                  informed at every step of the way. What really stood out to me
                  was their genuine investment in my success. They didn’t just
                  find me a job — they helped me find a role that I’m passionate
                  about, and where I can grow in my career.
                </p>
              </div>
            </div>
            <div className="item w-full md:w-1/2 lg:w-1/3 flex flex-col">
              <div className="user-info">
                <div className="user-img">
                  <Image
                    src={"/pfp-6.jpg"}
                    width={60}
                    height={60}
                    alt="tommy"
                  ></Image>
                </div>
                <div className="user-name">
                  <strong>Benjamin Anderson</strong>
                </div>
              </div>
              <div className="content">
                <p>
                  This company went above and beyond to assist me, offering
                  valuable support from resume tips to interview prep. Great
                  experience!
                </p>
              </div>
            </div>
            <div className="item w-full md:w-1/2 lg:w-1/3 flex flex-col">
              <div className="user-info">
                <div className="user-img">
                  <Image
                    src={"/pfp-7.jpg"}
                    width={60}
                    height={60}
                    alt="tommy"
                  ></Image>
                </div>
                <div className="user-name">
                  <strong>Olivia Brown</strong>
                </div>
              </div>
              <div className="content">
                <p>
                  Thanks to their quick and thoughtful matching, I found the
                  perfect job. They genuinely cared about helping me succeed.
                </p>
              </div>
            </div>
            <div className="item w-full md:w-1/2 lg:w-1/3 flex flex-col">
              <div className="user-info">
                <div className="user-img">
                  <Image
                    src={"/pfp-8.jpg"}
                    width={60}
                    height={60}
                    alt="tommy"
                  ></Image>
                </div>
                <div className="user-name">
                  <strong>Daniel Thompson</strong>
                </div>
              </div>
              <div className="content">
                <p>
                  I had a fantastic experience working with this recruitment
                  company. From the start, they took the time to really
                  understand my career goals and professional background. The
                  team was always available to answer any questions I had,
                  offering valuable advice on everything from resume
                  optimization to interview techniques. Thanks to their
                  thoughtful guidance, I was matched with a job that perfectly
                  aligns with my skills and long-term goals. I couldn’t be more
                  satisfied with their service!
                </p>
              </div>
            </div>
            <div className="item w-full md:w-1/2 lg:w-1/3 flex flex-col">
              <div className="user-info">
                <div className="user-img">
                  <Image
                    src={"/pfp-9.jpg"}
                    width={60}
                    height={60}
                    alt="tommy"
                  ></Image>
                </div>
                <div className="user-name">
                  <strong>Grace Harris</strong>
                </div>
              </div>
              <div className="content">
                <p>
                  Professional and efficient service. The consultants made my
                  job search stress-free and were always available to help.
                </p>
              </div>
            </div>
            <div className="item w-full md:w-1/2 lg:w-1/3 flex flex-col">
              <div className="user-info">
                <div className="user-img">
                  <Image
                    src={"/pfp-10.jpg"}
                    width={60}
                    height={60}
                    alt="tommy"
                  ></Image>
                </div>
                <div className="user-name">
                  <strong>Ava Taylor</strong>
                </div>
              </div>
              <div className="content">
                <p>
                  They listened to my needs and connected me with a company
                  where I can grow. I’m very grateful for their excellent
                  support!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeoplesOpinions;
