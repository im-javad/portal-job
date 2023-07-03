import axios from "@/lib/axios";

export const fetchingAds = async (req) => {
  const ads = await axios
    .get("/api/dashboard/employer/ads", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + req.cookies.jwt || "",
      },
    })
    .then((response) => response.data.ads.data);

  return ads;
};

export const fetchingRequests = async (req) => {
  const requests = await axios
    .get("/api/dashboard/user/requests", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + req.cookies.jwt || "",
      },
    })
    .then((response) => response.data.resumes.data);

  return requests;
};

export const fetchingSaved = async (req) => {
  const saved = await axios
    .get("/api/dashboard/user/saved", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + req.cookies.jwt || "",
      },
    })
    .then((response) => response.data.ads.data);

  return saved;
};

export const removeSave = async (id) => {
  await axios.delete(`/api/dashboard/user/saved/${id}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addSave = async (id) => {
  await axios.get(`/api/dashboard/user/saved/${id}`, {
    withCredentials: true,
  });
};
