import { postingResume } from "@/hooks/resume";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdApartment, MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import Swal from "sweetalert2";
import InputError from "../InputError";
import Loader from "../Loader";
import { addSave } from "@/hooks/dashboard";

const AdInfo = ({ attributes, adId }) => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState("");

  const [errors, setErrors] = useState([]);
  const [postingStatus, setPostingStatus] = useState(null);

  const saveJobOperation = async () => {
    addSave(adId);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added save successfully",
      showCancelButton: false,
      timer: 2000,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append("resume_url", resume);
    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);

    postingResume({
      setLoading,
      setErrors,
      setPostingStatus,
      adId,
      data,
    });
  };

  useEffect(() => {
    if (postingStatus == "success") {
      document.getElementById("my_modal_4").remove();

      Swal.fire({
        icon: "success",
        title: "Successful operation",
        text: `Your resume has been sent to "${attributes.title}" ad and you can see the result from your dashboard`,
        footer: '<a href="/dashboard">Go to dashboard</a>',
      });
    }
    if (postingResume == "fail") {
      document.getElementById("my_modal_4").remove();

      Swal.fire({
        icon: "error",
        title: "The operation failed",
        text: "Please refresh the page and try again after a few seconds",
      });
    }

    // setPostingStatus(null);
  }, [postingStatus]);

  return (
    <section id="ad-info" className="mb-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-12">
          <div className="flex flex-col xl:col-span-8">
            <div className="grid grid-cols-12 md:flex items-center mb-6 xl:mb-0">
              <div className="col-span-12 flex justify-center">
                <Image
                  className="rounded"
                  src="/logo.png"
                  width={80}
                  height={80}
                />
              </div>
              <div className="md:ms-5 col-span-12 mt-2">
                <h2 className="text-2xl mb-4 w-full">{attributes.title}</h2>
                <ul className="flex flex-wrap">
                  <li className="flex items-center">
                    <MdApartment className="text-xl" />
                    <span className="ms-1">{attributes.company_name}</span>
                  </li>
                  <li className="flex items-center ms-4 me-4">
                    <MdLocationOn className="text-xl" />
                    <span className="ms-1">
                      {attributes.city}~{attributes.country}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <MdAccessTimeFilled className="text-lg" />
                    <span className="ms-1">{attributes.cooperation_type}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between xl:col-span-3 xl:col-start-10 items-center">
            <div className="w-full" onClick={saveJobOperation}>
              <button className="btn w-full bg-appColor_3 text-appColor_4 hover:bg-appColor_3 normal-case text-lg">
                Save Job
              </button>
            </div>
            <div className="w-full ms-9">
              <button
                className="btn w-full bg-appColor_2 text-appColor_4 border-none hover:bg-appColor_2 normal-case text-lg"
                onClick={() => window.my_modal_4.showModal()}
              >
                Apply Now
              </button>
              <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                  {loading && <Loader />}
                  <div className="col-span-12 lg:col-span-6 mb-7">
                    <label htmlFor="name" className="text-appColor_2">
                      Name
                    </label>
                    <input
                      id="name"
                      onChange={(event) => setName(event.target.value)}
                      autoFocus
                      placeholder="Type here"
                      className="input input-bordered bg-appColor_4 w-full mt-2"
                    />
                    <InputError messages={errors.name} className="mt-2" />
                  </div>
                  <div className="col-span-12 lg:col-span-6 mb-7">
                    <label htmlFor="email" className="text-appColor_2">
                      Email
                    </label>
                    <input
                      id="email"
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Type here"
                      className="input input-bordered bg-appColor_4 w-full mt-2"
                    />
                    <InputError messages={errors.email} className="mt-2" />
                  </div>
                  <div className="col-span-12 lg:col-span-6 mb-7">
                    <label htmlFor="phone" className="text-appColor_2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="number"
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="Type here"
                      className="input input-bordered bg-appColor_4 w-full mt-2"
                    />
                    <InputError messages={errors.phone} className="mt-2" />
                  </div>
                  <div className="col-span-12 lg:col-span-6 mb-7">
                    <label htmlFor="resume_url" className="text-appColor_2">
                      Your Resume
                    </label>
                    <input
                      id="resume_url"
                      type="file"
                      onChange={(event) => setResume(event.target.files[0])}
                      placeholder="Type here"
                      className="file-input file-input-bordered bg-appColor_4 w-full mt-2"
                    />
                    <InputError messages={errors.resume_url} className="mt-2" />
                  </div>
                  <div className="modal-action btn-close">
                    <button className="btn absolute">✗</button>
                  </div>
                  <div className="flex justify-center" onClick={submitForm}>
                    <button className="btn w-full md:w-1/2 bg-appColor_3 text-appColor_4 border-none">
                      Create Ad
                    </button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdInfo;
