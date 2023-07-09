import MainLayout from "@/layouts/MainLayout";
import { fetchingJob } from "@/hooks/job";
import { useRouter } from "next/router";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContent from "@/components/JobsSlices/adContent";
import AdInfo from "@/components/JobsSlices/adInfo";
import Head from "next/head";
import { useState } from "react";

const Job = ({ jobReceived }) => {
  const router = useRouter();

  const { attributes } = jobReceived;

  const [isLoginStatus, setIsloginStatus] = useState(null);

  const breadcrumbs = {
    0: { title: "Home", link: `/` },
    1: { title: "Jobs", link: `/jobs/${jobReceived.id}` },
  };

  return (
    <>
      <Head>
        <title>Job #{jobReceived.id}</title>
      </Head>

      <Breadcrumbs crumbs={breadcrumbs} />

      <AdInfo attributes={attributes} adId={router.query.job} />

      <AdContent attributes={attributes} />
    </>
  );
};

export default Job;

Job.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async ({ params }) => {
  try {
    const job = await fetchingJob(params.job);
    return {
      props: {
        jobReceived: job,
      },
    };
  } catch (error) {
    return { notFound: 1 };
  }
};
