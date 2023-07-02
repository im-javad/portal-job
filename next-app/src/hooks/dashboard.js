import axios from "@/lib/axios";

export const fetchingAds = async () => {
  const ads = await axios
    .get("/api/dashboard/employer/ads")
    .then((response) => response.data.ads.data);

  return ads;
};

export const fetchingRequests = async () => {
  const requests = await axios
    .get("/api/dashboard/user/requests")
    .then((response) => response.data.resumes.data);

  return requests;
};

export const fetchingSaved = async () => {
  const saved = await axios
    .get("/api/dashboard/user/saved")
    .then((response) => response.data.ads.data);

  return saved;
};

export const removeSave = async (id) => {
  await axios.delete(`api/dashboard/user/saved/${id}`);
};
