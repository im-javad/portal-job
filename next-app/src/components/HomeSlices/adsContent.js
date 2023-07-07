import { useRouter } from "next/router";
import Ads from "./ads";
import { useEffect, useState } from "react";

const AdsContent = ({ jobs }) => {
  const router = useRouter();

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
  }, [page]);

  return (
    <section id="jobs">
      <div className="container mx-auto px-4">
        <div className="flex justify-center text-3xl font-bold mb-7">
          <h2 className="text-appColor_2">7,777 Job Listed</h2>
        </div>
        <Ads jobs={jobs} />
        <div className="pagination join w-full flex justify-center mt-5 mb-14">
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
