import { postingResume } from "@/hooks/resume";
import { useEffect, useState } from "react";
import { MdApartment, MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import Swal from "sweetalert2";
import InputError from "../InputError";
import Loader from "../Loader";
import { addSave } from "@/hooks/dashboard";
import { adCheker } from "@/hooks/job";
import { isLogin } from "@/hooks/auth";
import Link from "next/link";
import { GiClick } from "react-icons/gi";
import Image from "next/image";

const AdInfo = ({ attributes, adId }) => {
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState("");

  const [addingStatus, setAddingStatus] = useState(null);
  const [errors, setErrors] = useState([]);
  const [postingStatus, setPostingStatus] = useState(null);

  const [saveChecker, setSaveChecker] = useState(false);
  const [resumeChecker, setResumeChecker] = useState(false);

  const [isLoginStatus, setIsloginStatus] = useState(true);

  const saveJobOperation = async () => {
    addSave(setLoading, setAddingStatus, adId);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append("resume_url", resume);
    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);

    postingResume({
      setFormLoading,
      setErrors,
      setPostingStatus,
      adId,
      data,
    });
  };

  useEffect(() => {
    isLogin(setIsloginStatus);

    isLoginStatus === true && adCheker(setSaveChecker, setResumeChecker, adId);

    if (postingStatus == "success") {
      Swal.fire({
        icon: "success",
        title: "Successful operation",
        text: `Your resume has been sent to "${attributes.title}" ad and you can see the result from your dashboard`,
        footer: '<a href="/dashboard">Go to dashboard</a>',
        showConfirmButton: true,
      });
    }
    if (addingStatus == "success") {
      Swal.fire({
        icon: "success",
        title: "Added save successfully",
        showConfirmButton: true,
        timer: 2000,
      });
    }
    if (addingStatus == "fail") {
      Swal.fire({
        icon: "error",
        title: "Invalid your request",
        showConfirmButton: true,
        timer: 2000,
      });
    }
    setAddingStatus(null);
  }, [postingStatus, addingStatus, setIsloginStatus]);

  return (
    <section id="ad-info" className="mb-14">
      {loading && <Loader notPage={true} />}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-12">
          <div className="flex flex-col xl:col-span-8">
            <div className="grid grid-cols-12 md:flex items-center mb-6 xl:mb-0">
              <div className="col-span-12 flex justify-center">
                <img
                  className="rounded"
                  src={attributes.img_url}
                  width={80}
                  height={80}
                />
              </div>
              <div className="md:ms-5 col-span-12 mt-2">
                <h2 className="text-2xl mb-4 w-full text-appColor_1 font-bold">
                  {attributes.title}
                </h2>
                <ul className="flex flex-wrap">
                  <li className="flex items-center text-appColor_4">
                    <MdApartment className="text-xl" />
                    <span className="ms-1">{attributes.company_name}</span>
                  </li>
                  <li className="flex items-center ms-3 me-4 text-appColor_4">
                    <MdLocationOn className="text-xl" />
                    <span className="ms-1">
                      {attributes.city}~{attributes.country}
                    </span>
                  </li>
                  <li className="flex items-center text-appColor_4">
                    <MdAccessTimeFilled className="text-lg" />
                    <span className="ms-1">{attributes.cooperation_type}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between xl:col-span-3 xl:col-start-10 items-center">
            {saveChecker ? (
              <div className="w-full">
                <button className="btn w-full border-none hover:bg-appColor_3 bg-appColor_3 text-appColor_1 normal-case text-lg cursor-not-allowed">
                  Saved
                </button>
              </div>
            ) : isLoginStatus === true ? (
              <div className="w-full" onClick={saveJobOperation}>
                <button className="btn w-full border-none hover:bg-appColor_3 bg-appColor_3 text-appColor_1 normal-case text-lg">
                  Save Job
                </button>
              </div>
            ) : (
              <div className="w-full">
                <button
                  className="btn w-full border-none hover:bg-appColor_3 bg-appColor_3 text-appColor_1 normal-case text-lg"
                  onClick={() => window.my_modal_4.showModal()}
                >
                  Save Job
                </button>
              </div>
            )}

            <div className="w-full ms-9">
              {resumeChecker ? (
                <button className="btn w-full hover:bg-appColor_2 bg-appColor_2 text-run border-none normal-case text-lg cursor-not-allowed">
                  Applied
                </button>
              ) : (
                <>
                  <button
                    className="btn w-full hover:bg-appColor_2 bg-appColor_2 text-run border-none normal-case text-lg"
                    onClick={() => window.my_modal_4.showModal()}
                  >
                    Apply Now
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <form
                      method="dialog"
                      className="modal-box w-11/12 max-w-5xl bg-appColor_1"
                    >
                      {isLoginStatus === false ? (
                        <Link href="/login">
                          <div className="auth-error md:flex md:flex-col items-center">
                            <div>
                              <Image
                                className="image-full"
                                src="/login.avif"
                                height={350}
                                width={350}
                              ></Image>
                            </div>
                            <div className="text-center login-now">
                              <span>Hi, You must be login</span>
                              <div className="flex justify-center items-center">
                                <span>Click me</span>
                                <GiClick className="ms-1" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <>
                          {formLoading && <Loader notPage={true} />}
                          <div className="col-span-12 lg:col-span-6 mb-7">
                            <label htmlFor="name" className="text-appColor_2">
                              Name
                            </label>
                            <input
                              id="name"
                              onChange={(event) => setName(event.target.value)}
                              autoFocus
                              placeholder="Type here"
                              className="input bg-appColor_1 border-appColor_2 text-appColor_3 w-full mt-2"
                            />
                            <InputError
                              messages={errors.name}
                              className="mt-2"
                            />
                          </div>
                          <div className="col-span-12 lg:col-span-6 mb-7">
                            <label htmlFor="email" className="text-appColor_2">
                              Email
                            </label>
                            <input
                              id="email"
                              onChange={(event) => setEmail(event.target.value)}
                              placeholder="Type here"
                              className="input bg-appColor_1 border-appColor_2 text-appColor_3 w-full mt-2"
                            />
                            <InputError
                              messages={errors.email}
                              className="mt-2"
                            />
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
                              className="input bg-appColor_1 border-appColor_2 text-appColor_3 w-full mt-2"
                            />
                            <InputError
                              messages={errors.phone}
                              className="mt-2"
                            />
                          </div>
                          <div className="col-span-12 lg:col-span-6 mb-7">
                            <label
                              htmlFor="resume_url"
                              className="text-appColor_2"
                            >
                              Your Resume
                            </label>
                            <input
                              id="resume_url"
                              type="file"
                              onChange={(event) =>
                                setResume(event.target.files[0])
                              }
                              placeholder="Type here"
                              className="file-input border-appColor_2 bg-appColor_1 w-full mt-2"
                            />
                            <InputError
                              messages={errors.resume_url}
                              className="mt-2"
                            />
                          </div>
                          <div className="modal-action btn-close">
                            <button className="btn absolute">✗</button>
                          </div>
                          <div
                            className="flex justify-center"
                            onClick={submitForm}
                          >
                            <button className="btn w-full md:w-1/2 bg-appColor_2 text-run border-none">
                              Create Ad
                            </button>
                          </div>
                        </>
                      )}
                    </form>
                  </dialog>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdInfo;
