import MainLayout from "@/layouts/MainLayout";
import Loader from "@/components/Loader";
import { fetchingJob } from "@/hooks/job";
import { useRouter } from "next/router";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContent from "@/components/JobsSlices/adContent";
import AdInfo from "@/components/JobsSlices/adInfo";
import Head from "next/head";

const Job = ({ jobReceived }) => {
  const router = useRouter();
  const { attributes } = jobReceived;

  const breadcrumbs = {
    0: { title: "Home", link: `/` },
    1: { title: "Jobs", link: `/jobs/${jobReceived.id}` },
  };

  if (router.isFallback) {
    return <Loader />;
  }

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

Job.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
