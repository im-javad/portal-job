import { postingJob } from "@/hooks/job";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import InputError from "@/components/InputError";

const AddANewAd = () => {
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [vancy, setVancy] = useState("");
  const [city, setCity] = useState("");
  const [cooperationType, setCooperationType] = useState("");
  const [bonusSkills, setBonusSkills] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [requiredKnowledgeSkills, setRequiredKnowledgeSkills] = useState("");
  const [needExperience, setNeedExperience] = useState("");
  const [gender, setGender] = useState("");
  const [telegramLink, setTelegramLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [companyImg, setCompanyImg] = useState("");

  const [errors, setErrors] = useState([]);
  const [postingStatus, setPostingStatus] = useState(null);
  const [postedId, setPostedId] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append("title", title);
    data.append("company_name", companyName);
    data.append("country", country);
    data.append("city", city);
    data.append("cooperation_type", cooperationType);
    data.append("description", description);
    data.append("responsibilities", responsibilities);
    data.append("required_knowledge_skills", requiredKnowledgeSkills);
    data.append("bonus_skills", bonusSkills);
    data.append("vancy", vancy);
    data.append("need_experience", needExperience);
    data.append("gender", gender);
    data.append("telegram_link", telegramLink);
    data.append("instagram_link", instagramLink);
    data.append("facebook_link", facebookLink);
    data.append("github_link", githubLink);
    data.append("img_url", companyImg);

    postingJob({
      setPostingStatus,
      setPostedId,
      setErrors,
      data,
    });
  };

  useEffect(() => {
    if (postingStatus == "success") {
      document.getElementById("my_modal_4").remove();

      Swal.fire({
        icon: "success",
        text: `Yor ad was registered with ID ${postedId}`,
        title: "Successful operation",
      });
    }
    if (postingStatus == "fail") {
      document.getElementById("my_modal_4").remove();
      Swal.fire({
        icon: "error",
        text: `Please refresh the page and try again after a few seconds`,
        title: "The operation failed",
      });
    }
    setPostingStatus(null);
  }, [postingStatus]);

  return (
    <section id="add-a-new-ad" className="mb-14">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 md:col-start-4">
          <button
            fdf
            ddf
            dfdfdfdfdfdfdf
            className="btn w-full bg-appColor_3 text-appColor_4 border-none"
            onClick={() => window.my_modal_4.showModal()}
          >
            Add a new ad
          </button>
          <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="title" className="text-appColor_2">
                  Title
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  autoFocus
                  placeholder="Type here"
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError messages={errors.title} className="mt-2" />
              </div>
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="company_name" className="text-appColor_2">
                  Company Name
                </label>
                <input
                  id="company_name"
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                  autoFocus
                  placeholder="Type here"
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError messages={errors.company_name} className="mt-2" />
              </div>
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="country" className="text-appColor_2">
                  Country
                </label>
                <input
                  id="country"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  autoFocus
                  placeholder="Type here"
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError messages={errors.country} className="mt-2" />
              </div>
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="city" className="text-appColor_2">
                  City
                </label>
                <input
                  id="city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  autoFocus
                  placeholder="Type here"
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError messages={errors.city} className="mt-2" />
              </div>
              <div className="col-span-12 mb-7">
                <label htmlFor="cooperation_type" className="text-appColor_2">
                  Cooperation Type
                </label>
                <select
                  id="cooperation_type"
                  value={cooperationType}
                  onChange={(event) => setCooperationType(event.target.value)}
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                >
                  <option selected disabled>
                    select cooperation type
                  </option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Project Oriented">Project Oriented</option>
                  <option value="Remote">Remote</option>
                </select>
                <InputError
                  messages={errors.cooperation_type}
                  className="mt-2"
                />
              </div>
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="img_url" className="text-appColor_2">
                  Company Image
                </label>
                <input
                  id="img_url"
                  type="file"
                  onChange={(event) => setCompanyImg(event.target.files[0])}
                  autoFocus
                  placeholder="Type here"
                  className="file-input file-input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError messages={errors.img_url} className="mt-2" />
              </div>
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="vancy" className="text-appColor_2">
                  Vancy
                </label>
                <input
                  id="vancy"
                  type="number"
                  value={vancy}
                  onChange={(event) => setVancy(event.target.value)}
                  autoFocus
                  placeholder="Type here"
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError messages={errors.vancy} className="mt-2" />
              </div>
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="need_experience" className="text-appColor_2">
                  Need Experience
                </label>
                <input
                  id="need_experience"
                  type="number"
                  value={needExperience}
                  onChange={(event) => setNeedExperience(event.target.value)}
                  autoFocus
                  placeholder="Type here"
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError
                  messages={errors.need_experience}
                  className="mt-2"
                />
              </div>
              <div className="col-span-12 mb-7">
                <label htmlFor="gender" className="text-appColor_2">
                  Gender
                </label>
                <select
                  type="password"
                  id="gender"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                >
                  <option selected disabled>
                    select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Any">Any</option>
                </select>
                <InputError messages={errors.gender} className="mt-2" />
              </div>
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="telegram_link" className="text-appColor_2">
                  Telegram (option)
                </label>
                <input
                  id="telegram_link"
                  value={telegramLink}
                  onChange={(event) => setTelegramLink(event.target.value)}
                  autoFocus
                  placeholder="Type here"
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError messages={errors.telegram_link} className="mt-2" />
              </div>
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="instagram_link" className="text-appColor_2">
                  Instagram (option)
                </label>
                <input
                  id="instagram_link"
                  value={instagramLink}
                  onChange={(event) => setInstagramLink(event.target.value)}
                  autoFocus
                  placeholder="Type here"
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError messages={errors.instagram_link} className="mt-2" />
              </div>
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="facebook_link" className="text-appColor_2">
                  Facebook (option)
                </label>
                <input
                  id="facebook_link"
                  value={facebookLink}
                  onChange={(event) => setFacebookLink(event.target.value)}
                  autoFocus
                  placeholder="Type here"
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError messages={errors.facebook_link} className="mt-2" />
              </div>
              <div className="col-span-12 lg:col-span-6 mb-7">
                <label htmlFor="github_link" className="text-appColor_2">
                  Github (option)
                </label>
                <input
                  id="github_link"
                  value={githubLink}
                  onChange={(event) => setGithubLink(event.target.value)}
                  autoFocus
                  placeholder="Type here"
                  className="input input-bordered bg-appColor_4 w-full mt-2"
                />
                <InputError messages={errors.github_link} className="mt-2" />
              </div>
              <div className="col-span-12 mb-7">
                <label htmlFor="description" className="text-appColor_2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write your notes or questions here..."
                  className="textarea textarea-bordered bg-appColor_4 textarea-md w-full mt-2"
                ></textarea>
                <InputError messages={errors.description} className="mt-2" />
              </div>
              <div className="col-span-12 mb-7">
                <label htmlFor="responsibilities" className="text-appColor_2">
                  Responsibilities (option)
                </label>
                <textarea
                  id="responsibilities"
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                  placeholder="Write your notes or questions here..."
                  className="textarea textarea-bordered bg-appColor_4 textarea-md w-full mt-2"
                ></textarea>
                <InputError
                  messages={errors.responsibilities}
                  className="mt-2"
                />
              </div>
              <div className="col-span-12 mb-7">
                <label
                  htmlFor="required_knowledge_skills"
                  className="text-appColor_2"
                >
                  Required Skills (option)
                </label>
                <textarea
                  id="required_knowledge_skills"
                  value={requiredKnowledgeSkills}
                  onChange={(e) => setRequiredKnowledgeSkills(e.target.value)}
                  placeholder="Write your notes or questions here..."
                  className="textarea textarea-bordered bg-appColor_4 textarea-md w-full mt-2"
                ></textarea>
                <InputError
                  messages={errors.required_knowledge_skills}
                  className="mt-2"
                />
              </div>
              <div className="col-span-12 mb-7">
                <label htmlFor="bonus_skills" className="text-appColor_2">
                  Bonus Skills (option)
                </label>
                <textarea
                  id="bonus_skills"
                  value={bonusSkills}
                  onChange={(e) => setBonusSkills(e.target.value)}
                  placeholder="Write your notes or questions here..."
                  className="textarea textarea-bordered bg-appColor_4 textarea-md w-full mt-2"
                ></textarea>
                <InputError messages={errors.bonus_skills} className="mt-2" />
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
    </section>
  );
};

export default AddANewAd;
