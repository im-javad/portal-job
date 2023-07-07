const Address = () => {
  return (
    <section className="contact-info col-span-12 lg:col-span-5 lg:col-start-8">
      <div className="info">
        <div className="flex flex-col mb-7">
          <strong className="mb-1 text-appColor_5">Address</strong>
          <span>
            203 Fake St. Mountain View, San Francisco, California, USA
          </span>
        </div>
        <div className="flex flex-col mb-7">
          <strong className="mb-1 text-appColor_5">Phone</strong>
          <span>+1 77777777</span>
        </div>
        <div className="flex flex-col mb-14">
          <strong className="mb-1 text-appColor_5">Email Address</strong>
          <span>portaljob@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Address;
