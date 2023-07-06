import Breadcrumbs from "@/components/Breadcrumbs";
import AdsContent from "@/components/HomeSlices/adsContent";
import FilteringContent from "@/components/HomeSlices/filteringContent";
import { fetchingJobs } from "@/hooks/job";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const breadcrumbs = { 0: { title: "Home", link: `/` } };

const Home = ({ jobsReceived }) => {
  const router = useRouter();

  const [cooperationType, setCooperationType] = useState();
  const [needExperience, setNeedExperience] = useState();
  const [title, setTitle] = useState();

  const addParamsToUrl = () => {
    router.replace({
      query: {
        ...router.query,
        title: title,
        cooperation_type: cooperationType,
        need_experience: needExperience,
      },
    });
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Breadcrumbs crumbs={breadcrumbs} />

      <FilteringContent
        setCooperationType={setCooperationType}
        setNeedExperience={setNeedExperience}
        setTitle={setTitle}
        doOperation={addParamsToUrl}
      />

      <AdsContent jobs={jobsReceived} />
    </>
  );
};

export default Home;

export const getServerSideProps = async ({ query }) => {
  const jobs = await fetchingJobs({
    page: query.page,
    title: query.title,
    cooperation_type: query.cooperation_type,
    need_experience: query.need_experience,
  });

  return {
    props: {
      jobsReceived: jobs,
    },
  };
};

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
