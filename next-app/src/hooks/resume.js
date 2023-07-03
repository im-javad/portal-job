import axios from "@/lib/axios";

export const postingResume = async ({
  setLoading,
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
      setLoading(false);
    })
    .catch((error) => {
      setPostingStatus("fail");
      setErrors(error.response.data.errors);
      setLoading(false);
    });
};
