import { useRouter } from "next/router";
import { fetchingResume } from "@/hooks/resume";
import MainLayout from "@/layouts/MainLayout";
import RequestStatus from "@/components/applicationDetailsSlices/requestStatus";
import Sent from "@/components/applicationDetailsSlices/sent";

const Resume = ({ receivedResume }) => {
  const { status, displayed } = receivedResume.attributes;
  const resumeDetails = receivedResume.attributes;
  const adDetails = receivedResume.relationships.ad[0];

  return (
    <section id="application-details">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12">
          <RequestStatus status={status} displayed={displayed} />
          <Sent adDetails={adDetails} resumeDetails={resumeDetails} />
        </div>
      </div>
    </section>
  );
};

export default Resume;

Resume.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async (context) => {
  try {
    const resume = await fetchingResume(
      context.req,
      context.params.job,
      context.params.resume
    );

    return {
      props: {
        receivedResume: resume,
      },
    };
  } catch (error) {
    return { notFound: 1 };
  }
};
