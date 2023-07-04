import axios from "@/lib/axios";

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

export const postingJob = async ({
  setLoading,
  setPostingStatus,
  setPostedId,
  setErrors,
  data,
}) => {
  setLoading(true);
  setPostingStatus(null);
  setPostedId(null);
  setErrors([]);

  axios
    .post("/api/ads", data)
    .then((response) => {
      setPostingStatus(response.data.status);
      setPostedId(response.data.ad.id);
      setLoading(false);
    })
    .catch((error) => {
      setErrors(error.response.data.errors);
      setLoading(false);
    });
};

export const deletingJob = async (setDeletingStatus, adId) => {
  axios.delete(`/api/ads/${adId}`).then((response) => {
    setDeletingStatus('success');
  });
};
