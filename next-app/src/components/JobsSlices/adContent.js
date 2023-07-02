import Link from "next/link";
import {
  MdDescription,
  MdTask,
  MdOutlineMenuBook,
  MdOutlineDataSaverOn,
} from "react-icons/md";
import {
  RiTelegramFill,
  RiInstagramFill,
  RiFacebookCircleFill,
  RiGithubFill,
} from "react-icons/ri";

const AdContent = ({ attributes }) => {
  return (
    <section id="ad-content">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-12">
          <div className="xl:col-span-8">
            <div className="description mb-10">
              <div className="title">
                <i>
                  <MdDescription />
                </i>
                <span>Job Description</span>
              </div>
              <div className="content">
                <p className="txt-anywhere">{attributes.description}</p>
              </div>
            </div>
            <div className="responsibilities mb-10">
              <div className="title">
                <i>
                  <MdTask />
                </i>
                <span>Responsibilities</span>
              </div>
              <div className="content content-ul-structure">
                {attributes.responsibilities ? (
                  <p className="txt-anywhere">{attributes.responsibilities}</p>
                ) : (
                  <p className="txt-anywhere">
                    No responsibility is stated in the ad...
                  </p>
                )}
              </div>
            </div>
            <div className="education-experience mb-10">
              <div className="title">
                <i>
                  <MdOutlineMenuBook />
                </i>
                <span>Required knowledge and skills</span>
              </div>
              <div className="content content-ul-structure">
                {attributes.required_knowledge_skills ? (
                  <p className="txt-anywhere">
                    {attributes.required_knowledge_skills}
                  </p>
                ) : (
                  <p className="txt-anywhere">
                    The required knowledge and skills are not stated in this
                    advertisement
                  </p>
                )}
              </div>
            </div>
            <div className="other mb-14">
              <div className="title">
                <i>
                  <MdOutlineDataSaverOn />
                </i>
                <span>Bonus skills</span>
              </div>
              <div className="content content-ul-structure">
                {attributes.bonus_skills ? (
                  <p className="txt-anywhere">{attributes.bonus_skills}</p>
                ) : (
                  <p className="txt-anywhere">
                    Bonus skills are not mentioned in this ad
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 xl:col-start-10">
            <div className="border-2 rounded border-appColor_4 p-6 mb-7">
              <h3 className="text-lg text-appColor_3 mb-3">Job Summary</h3>
              <ul>
                <li className="mb-2">
                  <strong className="text-appColor_2">Published on: </strong>
                  <span>April 14, 2023</span>
                </li>
                <li className="mb-2">
                  <strong className="text-appColor_2">Vacancy: </strong>
                  <span>{attributes.vancy}</span>
                </li>
                <li className="mb-2">
                  <strong className="text-appColor_2">
                    Employment Status:
                  </strong>
                  <span> {attributes.cooperation_type}</span>
                </li>
                <li className="mb-2">
                  <strong className="text-appColor_2">Experience: </strong>
                  <span className=" text-neutral-400">
                    {attributes.need_experience} year(s)
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="text-appColor_2">Job Location: </strong>
                  <span className=" text-neutral-400">
                    {attributes.country}~{attributes.city}
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="text-appColor_2">Gender: </strong>
                  <span>{attributes.gender}</span>
                </li>
              </ul>
            </div>
            <div className="border-2 rounde border-appColor_4 p-6 mb-14">
              <h3 className="text-lg text-appColor_3 mb-3">Social media</h3>
              <ul className="flex">
                <li className="text-2xl ease-in duration-300 hover:text-appColor_2">
                  <i>
                    <Link href={attributes.telegram_link ?? "#"}>
                      <RiTelegramFill />
                    </Link>
                  </i>
                </li>
                <li className="text-2xl ms-3 ease-in duration-300 hover:text-appColor_2">
                  <i>
                    <Link href={attributes.instagram_link ?? "#"}>
                      <RiInstagramFill />
                    </Link>
                  </i>
                </li>
                <li className="text-2xl ms-3 ease-in duration-300 hover:text-appColor_2">
                  <i>
                    <Link href={attributes.facebook_link ?? "#"}>
                      <RiFacebookCircleFill />
                    </Link>
                  </i>
                </li>
                <li className="text-2xl ms-3 ease-in duration-300 hover:text-appColor_2">
                  <i>
                    <Link href={attributes.github_link ?? "#"}>
                      <RiGithubFill />
                    </Link>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdContent;

{
  /* <ul>
  <li>
    <TiTick className="text-2xl" />
    <span>Necessitatibus quibusdam facilis</span>
  </li>
  <li>
    <TiTick className="text-2xl" />
    <span>Velit unde aliquam et voluptas reiciendis non sapiente labore</span>
  </li>
  <li>
    <TiTick className="text-2xl" />
    <span>Commodi quae ipsum quas est itaque</span>
  </li>
  <li>
    <TiTick className="text-2xl" />
    <sapn>Lorem ipsum dolor sit amet, consectetur adipisicing elit</sapn>
  </li>
</ul>; */
}
