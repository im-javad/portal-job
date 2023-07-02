import axios from "@/lib/axios";
import { useRouter } from "next/router";

export const fetchingJobs = async (props) => {
  const jobs = await axios
    .get("/api/ads", {
      params: props,
    })
    .then((response) => response.data.ads.data);

  return jobs;
};

export const fetchingJob = async (id) => {
  const job = await axios
    .get(`/api/ads/${id}`)
    .then((response) => response.data.ad);

  return job;
};

export const postingJob = async ({ setPostingStatus, setPostedId, data }) => {
  setPostingStatus(null);
  setPostedId(null);

  axios.post("/api/ads", data).then((response) => {
    setPostingStatus(response.data.status);
    setPostedId(response.data.ad.id);
  });
};
