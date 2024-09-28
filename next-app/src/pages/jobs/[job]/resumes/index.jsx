import MainLayout from "@/layouts/MainLayout";
import { MdSimCardDownload, MdEmail } from "react-icons/md";
import { fetchingResumes } from "@/hooks/resume";
import Resumes from "@/components/advertisementDetailsSlices/resumes";
import { useRouter } from "next/router";
import NothingFound from "@/components/NothingFound";
import Head from "next/head";
import Breadcrumbs from "@/components/Breadcrumbs";

const breadcrumbs = {
  0: { title: "Home", link: `/` },
  1: { title: "Jobs", link: `/#` },
  2: { title: "Resumes", link: `/#` },
};

const AdvertisementDetails = ({ receivedResumes }) => {
  return (
    <>
      <Head>
        <title>Job Resumes</title>
      </Head>

      <Breadcrumbs crumbs={breadcrumbs} />

      <section id="advertisement-details">
        <div className="container mx-auto px-2">
          <div className="resumes-received mb-20">
            <div className="header flex items-center text-appColor_2 mb-6">
              <i className="text-2xl text-appColor_3">
                <MdSimCardDownload />
              </i>
              <h2 className="text-xl ms-2 text-appColor_1 font-bold">
                Resumes Received
              </h2>
            </div>

            {receivedResumes.length === 0 ? (
              <NothingFound />
            ) : (
              <div className="content grid lg:grid-cols-12">
                <Resumes resumes={receivedResumes} />
              </div>
            )}
          </div>
          <div className=""></div>
        </div>
      </section>
    </>
  );
};

export default AdvertisementDetails;

AdvertisementDetails.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async (context) => {
  const resumes = await fetchingResumes(context.req, context.params.job);

  return {
    props: {
      receivedResumes: resumes,
    },
  };
};
