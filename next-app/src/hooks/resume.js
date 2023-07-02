import axios from "@/lib/axios";

export const postingResume = async ({ setPostingStatus, adId, data }) => {
  setPostingStatus(null);

  axios
    .post(`/api/ads/${adId}/resumes`, data)
    .then((response) => setPostingStatus(response.data.status))
    .catch((error) => {
      setPostingStatus("fail");
    });
};
