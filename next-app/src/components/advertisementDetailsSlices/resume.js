import { acceptResume } from "@/hooks/resume";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserTie, FaPhoneAlt, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";

const Resume = ({ resume }) => {
  const { attributes } = resume;

  const router = useRouter();
  const adId = router.query.job;
  const resumeId = resume.id;

  const acceptResumeOperation = async (e) => {
    acceptResume({ adId, resumeId, status: "Accepted" });

    Swal.fire({
      icon: "success",
      title: "Successful update",
      text: "The status of the desired resume was changed to accepted",
    });
  };

  const rejectResumeOperation = async () => {
    acceptResume({ adId, resumeId, status: "Rejected" });

    Swal.fire({
      icon: "success",
      title: "Successful update",
      text: "The status of the desired resume was changed to rejected",
    });
  };

  return (
    <div className="resume shadow-sm shadow-appColor_3 p-4 rounded lg:col-span-6 lg:mx-3 mb-6">
      <div className="resume-content flex flex-col ">
        <div className="resume-status flex justify-center text-[#0965a1]">
          <strong>{attributes.status}</strong>
        </div>
        <div className="resume-info mb-6">
          <ul>
            <li className="flex items-center mb-1">
              <FaUserTie className="text-xl" />
              <sapn className="text-lg ms-3">{attributes.name}</sapn>
            </li>
            <li className="flex items-center mb-1">
              <MdEmail className="text-xl" />
              <span className="text-lg ms-3">{attributes.email}</span>
            </li>
            <li className="flex items-center mb-2">
              <FaPhoneAlt className="text-xl" />
              <span className="text-lg ms-3">{attributes.phone}</span>
            </li>
            <Link href="#" className="flex items-center">
              <FaFileAlt className="text-xl" />
              <span className="text-lg ms-3">{attributes.resume_url}</span>
            </Link>
          </ul>
        </div>
        <div className="resume-operations flex">
          <div className="resume-accept w-1/2" onClick={acceptResumeOperation}>
            <button>
              <span>Accept</span>
            </button>
          </div>
          <div
            className="resume-reject w-1/2 ms-5"
            onClick={rejectResumeOperation}
          >
            <button>
              <span>Reject</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

{
  /* 
            <div className="resume shadow-sm shadow-appColor_3 p-4 rounded lg:col-span-6 lg:mx-3 mb-6">
              <div className="resume-content flex flex-col ">
                <div className="resume-status flex justify-center text-[#0965a1]">
                  <strong>Not Determined</strong>
                </div>
                <div className="resume-info">
                  <ul>
                    <li className="flex items-center mb-1">
                      <FaUserTie className="text-xl" />
                      <sapn className="text-lg ms-3">Javad Jadidi</sapn>
                    </li>
                    <li className="flex items-center mb-1">
                      <MdEmail className="text-xl" />
                      <span className="text-lg ms-3">
                        javadjadidi77@gmail.com
                      </span>
                    </li>
                    <li className="flex items-center mb-2">
                      <FaPhoneAlt className="text-xl" />
                      <span className="text-lg ms-3">+1 7777777</span>
                    </li>
                    <Link href="#" className="flex items-center">
                      <FaFileAlt className="text-xl" />
                      <span className="text-lg ms-3">87njfduf6j.pdf</span>
                    </Link>
                  </ul>
                </div>
                <div className="resume-operations flex">
                  <div className="resume-accept w-1/2">
                    <button className="mt-6">
                      <Link href="#">Accept</Link>
                    </button>
                  </div>
                  <div className="resume-reject w-1/2 ms-5">
                    <button className="mt-6">
                      <Link href="#">Reject</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume shadow-sm shadow-appColor_3 p-4 rounded lg:col-span-6 lg:mx-3 mb-6">
              <div className="resume-content flex flex-col ">
                <div className="resume-status flex justify-center text-[#00aa33]">
                  <strong>Accepted</strong>
                </div>
                <div className="resume-info">
                  <ul>
                    <li className="flex items-center mb-1">
                      <FaUserTie className="text-xl" />
                      <sapn className="text-lg ms-3">Javad Jadidi</sapn>
                    </li>
                    <li className="flex items-center mb-1">
                      <MdEmail className="text-xl" />
                      <span className="text-lg ms-3">
                        javadjadidi77@gmail.com
                      </span>
                    </li>
                    <li className="flex items-center mb-2">
                      <FaPhoneAlt className="text-xl" />
                      <span className="text-lg ms-3">+1 7777777</span>
                    </li>
                    <Link href="#" className="flex items-center">
                      <FaFileAlt className="text-xl" />
                      <span className="text-lg ms-3">87njfduf6j.pdf</span>
                    </Link>
                  </ul>
                </div>
                <div className="resume-operations flex">
                  <div className="resume-accept w-1/2">
                    <button className="mt-6">
                      <Link href="#">Accept</Link>
                    </button>
                  </div>
                  <div className="resume-reject w-1/2 ms-5">
                    <button className="mt-6">
                      <Link href="#">Reject</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume shadow-sm shadow-appColor_3 p-4 rounded lg:col-span-6 lg:mx-3 mb-6">
              <div className="resume-content flex flex-col ">
                <div className="resume-status flex justify-center text-[#da290a]">
                  <strong>Rejected</strong>
                </div>
                <div className="resume-info">
                  <ul>
                    <li className="flex items-center mb-1">
                      <FaUserTie className="text-xl" />
                      <sapn className="text-lg ms-3">Javad Jadidi</sapn>
                    </li>
                    <li className="flex items-center mb-1">
                      <MdEmail className="text-xl" />
                      <span className="text-lg ms-3">
                        javadjadidi77@gmail.com
                      </span>
                    </li>
                    <li className="flex items-center mb-2">
                      <FaPhoneAlt className="text-xl" />
                      <span className="text-lg ms-3">+1 7777777</span>
                    </li>
                    <Link href="#" className="flex items-center">
                      <FaFileAlt className="text-xl" />
                      <span className="text-lg ms-3">87njfduf6j.pdf</span>
                    </Link>
                  </ul>
                </div>
                <div className="resume-operations flex">
                  <div className="resume-accept w-1/2">
                    <button className="mt-6">
                      <Link href="#">Accept</Link>
                    </button>
                  </div>
                  <div className="resume-reject w-1/2 ms-5">
                    <button className="mt-6">
                      <Link href="#">Reject</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div> */
}
