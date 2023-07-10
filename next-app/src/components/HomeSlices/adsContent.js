import { useRouter } from "next/router";
import Ads from "./ads";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import NothingFound from "../NothingFound";

const AdsContent = ({ jobs, countJobs }) => {
  const router = useRouter();

  // const [msg, setMsg] = useState(true);

  const [page, setPage] = useState(1);

  const handlePreviousPage = () => {
    return page - 1 === 0 ? null : setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (jobs.length < 15) {
      setPage(1);
      router.replace({
        query: {
          ...router.query,
          page: 1,
        },
      });
    } else {
      router.replace({
        query: {
          ...router.query,
          page: page,
        },
      });
    }
    // msg &&
    //   Swal.fire({
    //     icon: "info",
    //     title: "SOON",
    //     html: "The site is loading and preparing the data and the current data is experimental and for testing the performance of the site",
    //     confirmButtonText: "CONTINUE",
    //   });
    // setMsg(false);
  }, [page]);

  return (
    <section id="jobs">
      <div className="container mx-auto px-4">
        <div className="flex justify-center font-bold flex-col items-center mb-7">
          <h2 className="text-appColor_2 text-3xl font-bold">
            {countJobs} Jobs Listed
          </h2>
          <h3 className="text-xl text-appColor_4 text-center">
            Find carefully and your needs
          </h3>
        </div>
        {jobs.length === 0 ? <NothingFound /> : <Ads jobs={jobs} />}

        <div className="pagination join w-full flex justify-center mb-14">
          <button className="join-item btn" onClick={handlePreviousPage}>
            «
          </button>
          <button className="join-item btn">Page {page}</button>
          <button className="join-item btn" onClick={handleNextPage}>
            »
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdsContent;
