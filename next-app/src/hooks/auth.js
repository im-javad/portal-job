import axios from "@/lib/axios";

export const isLogin = async (setIsloginStatus) => {
  axios
    .get("/api/user-checker", {
      withCredentials: true,
    })
    .then((response) => {
      setIsloginStatus(response.data.status);
    })
    .catch((error) => {
      setIsloginStatus(false);
    });
};

export const fetchingUser = async (req) => {
  const user = axios
    .get("/api/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + req.cookies.jwt || "",
      },
    })
    .then((response) => response.data);

  return user;
};

export const register = async ({
  setLoading,
  setErrors,
  setRegisterStatus,
  ...props
}) => {
  setLoading(true);
  axios
    .post("/api/register", props, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      setRegisterStatus("success");
      setLoading(false);
    })
    .catch((error) => {
      setErrors(error.response.data.errors);
      setLoading(false);
    });
};

export const login = async ({
  setLoading,
  setErrors,
  setLoginStatus,
  ...props
}) => {
  setLoading(true);
  axios
    .post("/api/login", props, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      setLoginStatus("success");
      setLoading(false);
    })
    .catch((error) => {
      setErrors(error.response.data.errors);
      setLoading(false);
    });
};

export const logout = async (setLogoutStatus) => {
  axios
    .post("/api/logout", null, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      setLogoutStatus("success");
    });
};
