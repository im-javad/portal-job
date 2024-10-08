import { deletingJob } from "@/hooks/job";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdApartment, MdAccessTimeFilled, MdLocationOn } from "react-icons/md";
import Swal from "sweetalert2";

const Ad = ({ ad }) => {
  const { attributes } = ad;

  const [deletingJobStatus, setDeletingStatus] = useState("");

  const router = useRouter();

  const removeAd = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletingJob(setDeletingStatus, ad.id);

        Swal.fire("Deleted!", "Your ad has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    if (deletingJobStatus === "success") {
      router.replace(router.asPath);
      setDeletingStatus("");
    }
  }, [deletingJobStatus]);

  return (
    <div className="job border border-appColor_2 p-4 md:mx-4 mb-10 rounded">
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
        <div className="view-resumes">
          <Link href={`/jobs/${ad.id}`}>
            <button className="mt-6">View the ad</button>
          </Link>
        </div>
        <div className="view-resumes">
          <Link href={`/jobs/${ad.id}/resumes`}>
            <button className="mt-4">View Resumes</button>
          </Link>
        </div>
        <div className="remove-ad">
          <button className="mt-4" onClick={removeAd}>
            <span>Remove Ad</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ad;
