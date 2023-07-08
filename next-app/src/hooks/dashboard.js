import axios from "@/lib/axios";

export const fetchingAds = async (req) => {
  const ads = axios
    .get("/api/dashboard/employer/ads", {
      headers: {
        Authorization: "Bearer " + req.cookies.jwt || "",
      },
    })
    .then((response) => response.data.ads.data);

  return ads;
};

export const fetchingRequests = async (req) => {
  const requests = axios
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
  const saved = axios
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

export const removeSave = async (setRemovingStatus, id) => {
  axios
    .delete(`/api/dashboard/user/saved/${id}`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      setRemovingStatus(response.data.status);
    })
    .catch((error) => {
      setRemovingStatus("fail");
    });
};

export const addSave = async (setLoading, setAddingStatus, id) => {
  setLoading(true);
  axios
    .get(`/api/dashboard/user/saved/${id}`, {
      withCredentials: true,
    })
    .then((response) => {
      setAddingStatus(response.data.status);
      setLoading(false);
    })
    .catch((error) => {
      setAddingStatus("fail");
      setLoading(false);
    });
};
