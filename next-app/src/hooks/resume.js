import axios from "@/lib/axios";

export const postingResume = async ({
  setPostingStatus,
  setErrors,
  adId,
  data,
}) => {
  setPostingStatus(null);
  setErrors([]);

  axios
    .post(`/api/ads/${adId}/resumes`, data)
    .then((response) => setPostingStatus(response.data.status))
    .catch((error) => {
      setPostingStatus("fail");
      setErrors(error.response.data.errors);
    });
};
