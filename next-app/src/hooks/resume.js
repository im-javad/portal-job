import axios from "@/lib/axios";

export const fetchingResume = async (adId, resumeId) => {
  const resume = axios
    .get(`/api/ads/${adId}/resumes/${resumeId}`)
    .then((response) => response.data.resume);
    
  return resume;
};

export const postingResume = async ({
  // setLoading,
  setPostingStatus,
  setErrors,
  adId,
  data,
}) => {
  setLoading(true);
  setPostingStatus(null);
  setErrors([]);

  axios
    .post(`/api/ads/${adId}/resumes`, data)
    .then((response) => {
      setPostingStatus(response.data.status);
      // setLoading(false);
    })
    .catch((error) => {
      setPostingStatus("fail");
      setErrors(error.response.data.errors);
      // setLoading(false);
    });
};
