import axios from "@/lib/axios";

export const postingResume = async ({
//   setErrors,
  setPostingStatus,
  adId,
  data,
}) => {
  setPostingStatus(null);
//   setErrors([]);

  axios
    .post(`/api/ads/${adId}/resumes`, data)
    .then((response) => setPostingStatus(response.data.status))
    .catch((error) => {
    //   setErrors(error.response.data.errors);
      setPostingStatus("fail");
    });
};
