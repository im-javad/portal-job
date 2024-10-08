import Breadcrumbs from "@/components/Breadcrumbs";
import HeroHeader from "@/components/HomeSlices/HeroHeader";
import AdsContent from "@/components/HomeSlices/adsContent";
import FilteringContent from "@/components/HomeSlices/filteringContent";
import PeoplesOpinions from "@/components/HomeSlices/peoplesOpinions";
import WhyUs from "@/components/HomeSlices/whyUs";
import WorkOur from "@/components/HomeSlices/workOur";
import { fetchingJobs } from "@/hooks/job";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

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

      <HeroHeader />

      <FilteringContent
        setCooperationType={setCooperationType}
        setNeedExperience={setNeedExperience}
        setTitle={setTitle}
        doOperation={addParamsToUrl}
      />

      <AdsContent jobs={jobsReceived} countJobs={jobsReceived.length} />

      <WorkOur />

      <WhyUs />

      <PeoplesOpinions />
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
