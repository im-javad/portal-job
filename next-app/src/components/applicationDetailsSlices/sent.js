import Image from "next/image";
import Link from "next/link";
import {
  MdApartment,
  MdLocationOn,
  MdAccessTimeFilled,
  MdAssignment,
  MdSend,
} from "react-icons/md";

const Sent = ({ adDetails, resumeDetails }) => {
  return (
    <div className="sent lg:col-span-4 lg:col-start-9">
      <div className="ad-details mb-10">
        <div className="header flex items-center text-appColor_2 mb-4">
          <i className="text-2xl">
            <MdAssignment />
          </i>
          <h2 className="text-xl ms-2">Ad Information</h2>
        </div>
        <div className="job shadow-md shadow-appColor_3 hover:shadow-appColor_2 p-4 rounded">
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
              <h2 className="font-bold text-center text-lg">
                {adDetails.title}
              </h2>
            </div>
            <div className="job-info">
              <ul>
                <li className="flex items-center mb-1">
                  <MdApartment className="text-lg" />
                  <span className="text-sm ms-1">
                    {" "}
                    {adDetails.company_name}
                  </span>
                </li>
                <li className="flex items-center mb-1">
                  <MdLocationOn className="text-lg" />
                  <sapn className="text-sm ms-1">
                    {adDetails.country}~{adDetails.city}
                  </sapn>
                </li>
                <li className="flex items-center">
                  <MdAccessTimeFilled className="text-md" />
                  <span className="text-sm ms-2">
                    {adDetails.cooperation_type}
                  </span>
                </li>
              </ul>
            </div>
            <div className="view-ad">
              <button className="mt-6">
                <Link href={`/jobs/${adDetails.id}`}>View The Ad</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sent-details mb-20">
        <div className="header flex items-center text-appColor_2 mb-4">
          <i className="text-2xl">
            <MdSend />
          </i>
          <h2 className="text-xl ms-2">Submitted Information</h2>
        </div>
        <div className="content">
          <ul>
            <li className="mb-2">Full Name: {resumeDetails.name}</li>
            <li className="mb-2">Email: {resumeDetails.email}</li>
            <li className="mb-2">Number: {resumeDetails.phone}</li>
            <li>Resume sent: {resumeDetails.resume_url}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sent;
