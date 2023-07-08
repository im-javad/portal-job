import axios from "@/lib/axios";

export const fetchingResume = async (req, adId, resumeId) => {
  const resume = axios
    .get(`/api/ads/${adId}/resumes/${resumeId}`, {
      headers: {
        Authorization: "Bearer " + req.cookies.jwt || "",
      },
    })
    .then((response) => response.data.resume);

  return resume;
};

export const fetchingResumes = async (req, adId) => {
  const resumes = axios
    .get(`/api/ads/${adId}/resumes`, {
      headers: {
        Authorization: "Bearer " + req.cookies.jwt || "",
      },
    })
    .then((response) => response.data.resumes.data);

  return resumes;
};

export const postingResume = async ({
  setFormLoading,
  setPostingStatus,
  setErrors,
  adId,
  data,
}) => {
  setFormLoading(true);
  setPostingStatus(null);
  setErrors([]);

  axios
    .post(`/api/ads/${adId}/resumes`, data, {
      withCredentials: true,
    })
    .then((response) => {
      setPostingStatus(response.data.status);
      setFormLoading(false);
    })
    .catch((error) => {
      setPostingStatus("fail");
      setErrors(error.response.data.errors);
      setFormLoading(false);
    });
};

export const acceptResume = async ({
  setUpdatedStatus,
  adId,
  resumeId,
  ...props
}) => {
  axios.put(`/api/ads/${adId}/resumes/${resumeId}`, props).then((response) => {
    setUpdatedStatus("success-accepted");
  });
};

export const rejectResume = async ({
  setUpdatedStatus,
  adId,
  resumeId,
  ...props
}) => {
  axios.put(`/api/ads/${adId}/resumes/${resumeId}`, props).then((response) => {
    setUpdatedStatus("success-rejected");
  });
};
