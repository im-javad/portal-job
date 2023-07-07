import Image from "next/image";
import Link from "next/link";
import {
  MdApartment,
  MdAccessTimeFilled,
  MdChangeCircle,
} from "react-icons/md";

const Request = ({ request }) => {
  const adDetails = request.relationships.ad[0];
  const details = request.attributes;

  return (
    <div className="job border border-appColor_2 p-4 md:mx-4 mb-10 rounded">
      <div className="job-content flex flex-col ">
        <div className="job-img flex justify-center mb-4">
          <Image
            src="/logo.png"
            className="image-full rounded min-h-[75px]"
            height={75}
            width={75}
          />
        </div>
        <div className="job-title">
          <h2 className="font-bold text-center text-lg text-appColor_1">
            {adDetails.title}
          </h2>
        </div>
        <div className="job-info">
          <ul>
            <li className="status-waiting flex items-center mb-1 text-appColor_4">
              <i>
                <MdChangeCircle className="text-lg" />
              </i>
              <span className="text-sm ms-1">Status: {details.status}</span>
            </li>
            <li className="flex items-center mb-1 text-appColor_4">
              <i>
                <MdApartment className="text-lg" />
              </i>
              <span className="text-sm ms-1">{adDetails.company_name}</span>
            </li>
            <li className="flex items-center mb-1 text-appColor_4">
              <MdAccessTimeFilled className="text-lg" />
              <span className="text-sm ms-1">Postage date: 27 april 2023</span>
            </li>
          </ul>
        </div>
        <div className="application-details">
          <button className="mt-6">
            <Link href={`/jobs/${adDetails.id}/resumes/${request.id}`}>
              Application status
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Request;
