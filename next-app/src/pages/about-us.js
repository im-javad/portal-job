import Breadcrumbs from "@/components/Breadcrumbs";
import MainContent from "@/components/aboutUs/mainContent";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";

const breadcrumbs = {
  0: { title: "Home", link: `/` },
  1: { title: "About Us", link: "/about-us" },
};

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Breadcrumbs crumbs={breadcrumbs} />
      <MainContent />
    </>
  );
};

AboutUs.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutUs;
