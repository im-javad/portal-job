import Image from "next/image";
import Link from "next/link";
import { MdApartment, MdLocationOn, MdAccessTimeFilled } from "react-icons/md";

const Ad = ({ job }) => {
  const { attributes } = job;
  return (
    <div className="job relative p-4 md:mx-4 mb-10 rounded border-2 border-appColor_2">
      <div className="badge job-published absolute badge-accent badge-outline">
        {attributes.created_at}
      </div>
      <div className="job-content flex flex-col ">
        <div className="job-img flex justify-center mb-4">
          <img
            src={attributes.img_url}
            className="image-full rounded min-h-[75px]"
            height={75}
            width={75}
          />
        </div>
        <div className="job-title">
          <h2 className="font-bold text-center text-lg text-appColor_1">
            {attributes.title}
          </h2>
        </div>
        <div className="job-info">
          <ul>
            <li className="flex items-center mb-1 text-appColor_4">
              <MdApartment className="text-lg" />
              <span className="text-sm ms-1">{attributes.company_name}</span>
            </li>
            <li className="flex items-center mb-1 text-appColor_4">
              <MdLocationOn className="text-lg" />
              <sapn className="text-sm ms-1">
                {attributes.city}~{attributes.country}
              </sapn>
            </li>
            <li className="flex items-center text-appColor_4">
              <MdAccessTimeFilled className="text-md" />
              <span className="text-sm ms-2">
                {attributes.cooperation_type}
              </span>
            </li>
          </ul>
        </div>
        <div className="job-apply">
          <button className="mt-6">
            <Link href={`/jobs/${job.id}`}>Send Resume</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ad;
