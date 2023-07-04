import MainLayout from "@/layouts/MainLayout";
import { MdSimCardDownload, MdEmail } from "react-icons/md";
import { fetchingResumes } from "@/hooks/resume";
import Resumes from "@/components/advertisementDetailsSlices/resumes";
import { useRouter } from "next/router";

const AdvertisementDetails = ({ receivedResumes }) => {

  
  return (
    <section id="advertisement-details">
      <div className="container mx-auto px-2">
        <div className="resumes-received mb-20">
          <div className="header flex items-center text-appColor_2 mb-4">
            <i className="text-2xl">
              <MdSimCardDownload />
            </i>
            <h2 className="text-xl ms-2">Resumes Received</h2>
          </div>
          <div className="content grid lg:grid-cols-12">
            <Resumes resumes={receivedResumes} />
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default AdvertisementDetails;

AdvertisementDetails.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async ({ params }) => {
  try {
    const resumes = await fetchingResumes(params.job);

    return {
      props: {
        receivedResumes: resumes,
      },
    };
  } catch (error) {
    return { notFound: 1 };
  }
};
