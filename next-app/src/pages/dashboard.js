import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AddANewAd from "@/components/DashboardSlices/addANewAd";
import {
  fetchingAds,
  fetchingRequests,
  fetchingSaved,
} from "@/hooks/dashboard";
import MyAds from "@/components/DashboardSlices/myAds";
import MyRequests from "@/components/DashboardSlices/myRequest";
import MySaved from "@/components/DashboardSlices/mySaved";
import Head from "next/head";

const breadcrumbs = {
  0: { title: "Home", link: `/` },
  1: { title: "Dashboard", link: "/dashboard" },
};
const Dashboard = ({ adsReceived, requestsReceived, savedReceived }) => {
  // tip: 1 => ads , 2 => requests , 3 => saved
  const [choosen, setChoosen] = useState(1);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="container mx-auto px-4">
        <Breadcrumbs crumbs={breadcrumbs} />

        <AddANewAd />

        <section id="dashboard" className="mb-24">
          <div className="status">
            <div className="header cursor-pointer flex mb-7">
              <div
                className={`w-1/3 flex justify-center ${
                  choosen === 2 && "active"
                }`}
                onClick={() => {
                  setChoosen(2);
                }}
              >
                <span className="">Requests</span>
              </div>
              <div
                className={`w-1/3 flex justify-center ${
                  choosen === 1 && "active"
                }`}
                onClick={() => {
                  setChoosen(1);
                }}
              >
                <span>Ads</span>
              </div>
              <div
                className={`w-1/3 flex justify-center ${
                  choosen === 3 && "active"
                }`}
                onClick={() => {
                  setChoosen(3);
                }}
              >
                <span>Saved</span>
              </div>
            </div>
            <div className="content">
              {choosen === 1 && <MyAds ads={adsReceived} />}
              {choosen === 2 && <MyRequests requests={requestsReceived} />}
              {choosen === 3 && <MySaved saved={savedReceived} />}
              {![1, 2, 3].includes(choosen) && (
                <span className="text-[#da290a] font-bold">
                  little hacker, don't manipulate the site {"(:"}
                </span>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async (context) => {
  const { req } = context;

  try {
    const ads = await fetchingAds(req); //! in try catch (:
    const requests = await fetchingRequests(req);
    const saved = await fetchingSaved(req);

    return {
      props: {
        adsReceived: ads,
        requestsReceived: requests,
        savedReceived: saved,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};
