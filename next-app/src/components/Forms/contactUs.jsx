import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactUsForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleSendMsg = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    Swal.fire({
      icon: "success",
      title: "successful",
      text: "Your message and information have been sent successfully",
      showConfirmButton: true,
    });
  };

  return (
    <section className="contact-form col-span-12 lg:col-span-6 mb-14 bg-appColor_1 rounded-xl p-6">
      <form onSubmit={handleSendMsg}>
        <div className="form grid grid-cols-12">
          <div className="col-span-12 mb-7">
            <label htmlFor="name" className="text-appColor_2">
              Full Name
            </label>
            <input
              type="txt"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Type here"
              className="input border-appColor_2 text-appColor_3 bg-appColor_1 w-full mt-2"
              required
            />
          </div>
          <div className="col-span-12 mb-7">
            <label htmlFor="email" className="text-appColor_2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Type here"
              className="input border-appColor_2 text-appColor_3 bg-appColor_1 w-full mt-2"
              required
            />
          </div>
          <div className="col-span-12 mb-7">
            <label htmlFor="subject" className="text-appColor_2">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              id="subject"
              placeholder="Type here"
              className="input border-appColor_2 text-appColor_3 bg-appColor_1 w-full mt-2"
              required
            />
          </div>
          <div className="col-span-12 mb-7">
            <label htmlFor="message" className="text-appColor_2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your notes or questions here..."
              className="textarea border-appColor_2 text-appColor_3 bg-appColor_1 textarea-md w-full mt-2"
              required
            ></textarea>
          </div>
          <div className="col-span-12 flex justify-center">
            <button
              type="submit"
              className="btn w-1/2 normal-case bg-appColor_2 ease-in duration-500 border-none text-run hover:bg-appColor_3 hover:text-appColor_1"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactUsForm;
