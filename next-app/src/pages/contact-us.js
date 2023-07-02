import Breadcrumbs from "@/components/Breadcrumbs";
import Address from "@/components/ContactUsSlices/address";
import ContactUsForm from "@/components/Forms/contactUs";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";

const breadcrumbs = {
  0: { title: "Home", link: `/` },
  1: { title: "Contact Us", link: "/contact-us" },
};

const ContactUs = () => {
  return (
    <>
    <Head>
      <title>Contact Us</title>
    </Head>
    
      <div className="container mx-auto px-4">
        <Breadcrumbs crumbs={breadcrumbs} />
        <div className="grid grid-cols-12">
          <ContactUsForm />
          <Address />
        </div>
      </div>
    </>
  );
};

export default ContactUs;

ContactUs.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
