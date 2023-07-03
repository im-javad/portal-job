import Image from "next/image";
import Link from "next/link";
import { MdApartment, MdAccessTimeFilled, MdLocationOn } from "react-icons/md";

const Ad = ({ ad }) => {
  const { attributes } = ad;

  return (
    <div className="job shadow-sm shadow-appColor_3 hover:shadow-appColor_2 p-4 md:mx-4 mb-10 rounded">
      <div className="job-content flex flex-col ">
        <div className="job-img flex justify-center mb-4">
          <Image
            src="/logo.png"
            className="image-full rounded"
            height={75}
            width={75}
          />
        </div>
        <div className="job-title">
          <h2 className="font-bold text-center text-lg">{attributes.title}</h2>
        </div>
        <div className="job-info">
          <ul>
            <li className="flex items-center mb-1">
              <MdApartment className="text-lg" />
              <span className="text-sm ms-1">{attributes.company_name}</span>
            </li>
            <li className="flex items-center mb-1">
              <MdLocationOn className="text-lg" />
              <sapn className="text-sm ms-1">
                {attributes.city}~{attributes.country}
              </sapn>
            </li>
            <li className="flex items-center">
              <MdAccessTimeFilled className="text-md" />
              <span className="text-sm ms-2">
                {attributes.cooperation_type}
              </span>
            </li>
          </ul>
        </div>
        <div className="view-resumes">
          <button className="mt-6">
            <Link href={`/jobs/${ad.id}`}>View the ad</Link>
          </button>
        </div>
        <div className="view-resumes">
          <button className="mt-4">
            <Link href="#">View Resumes</Link>
          </button>
        </div>
        <div className="remove-ad">
          <button className="mt-4">
            <Link href="#">Remove Ad</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ad;
