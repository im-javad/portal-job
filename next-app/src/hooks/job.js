import axios from "@/lib/axios";

export const adCheker = async (setSaveChecker, setResumeChecker, adId) => {
  axios
    .get(`/api/saved-resume-checker/${adId}`, {
      withCredentials: true,
    })
    .then((response) => {
      const { data } = response;
      setSaveChecker(data.save);
      setResumeChecker(data.resume);
    });
};

export const fetchingJobs = async (props) => {
  const jobs = axios
    .get("/api/ads", {
      params: props,
    })
    .then((response) => response.data.ads.data);

  return jobs;
};

export const fetchingJob = async (id) => {
  const job = axios.get(`/api/ads/${id}`).then((response) => response.data.ad);

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
    .post("/api/ads", data, { withCredentials: true })
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
    setDeletingStatus("success");
  });
};
