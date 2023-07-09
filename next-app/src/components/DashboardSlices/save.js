import { removeSave } from "@/hooks/dashboard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdApartment, MdAccessTimeFilled, MdLocationOn } from "react-icons/md";
import Swal from "sweetalert2";

const Save = ({ save }) => {
  const { attributes } = save;

  const router = useRouter();

  const [removingStatus, setRemovingStatus] = useState(null);

  const removeSaveOperation = async () => {
    const id = save.id;

    removeSave(setRemovingStatus, id);
  };

  useEffect(() => {
    if (removingStatus == "success") {
      router.replace(router.asPath);
      Swal.fire({
        icon: "success",
        title: "Removed save successfully",
        timer: 2000,
        showConfirmButton: false,
      });
    }
    if (removingStatus == "fail") {
      Swal.fire({
        icon: "error",
        title: "Problem",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  }, [removingStatus]);

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
        <div className="job-apply">
          <button className="mt-6">
            <Link href={`/jobs/${save.id}`}>View the ad</Link>
          </button>
        </div>
        <div className="deletion-indicated">
          <button className="mt-4" onClick={removeSaveOperation}>
            <span>Remove Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Save;
