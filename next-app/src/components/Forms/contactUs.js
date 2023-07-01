const ContactUsForm = () => {
  return (
      <section className="contact-form col-span-12 lg:col-span-6 mb-14">
        <div className="form grid grid-cols-12">
          <div className="col-span-12 mb-7">
            <label htmlFor="name" className="text-appColor_3">
              Full Name
            </label>
            <input
              type="txt"
              id="name"
              placeholder="Type here"
              className="input input-bordered bg-appColor_4 w-full mt-2"
            />
          </div>
          <div className="col-span-12 mb-7">
            <label htmlFor="email" className="text-appColor_3">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Type here"
              className="input input-bordered bg-appColor_4 w-full mt-2"
            />
          </div>
          <div className="col-span-12 mb-7">
            <label htmlFor="subject" className="text-appColor_3">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Type here"
              className="input input-bordered bg-appColor_4 w-full mt-2"
            />
          </div>
          <div className="col-span-12 mb-7">
            <label htmlFor="message" className="text-appColor_3">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your notes or questions here..."
              className="textarea textarea-bordered bg-appColor_4 textarea-md w-full mt-2"
            ></textarea>
          </div>
          <div className="col-span-12 flex justify-center">
            <button className="btn w-1/2 normal-case bg-appColor_2 ease-in duration-500 border-none text-appColor_4 hover:bg-appColor_3">
              Send Message
            </button>
          </div>
        </div>
      </section>
  );
};

export default ContactUsForm;
