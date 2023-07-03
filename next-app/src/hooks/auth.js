import axios from "@/lib/axios";

export const fetchingUser = async (req) => {
  const user = await axios
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

export const register = async ({ setLoading, setErrors, ...props }) => {
  setLoading(true);
  axios
    .post("/api/register", props, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      setLoading(false);
    })
    .catch((error) => {
      setErrors(error.response.data.errors);
      setLoading(false);
    });
};

export const login = async ({ setLoading, setErrors, ...props }) => {
  setLoading(true);
  axios
    .post("/api/login", props, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      setLoading(false);
    })
    .catch((error) => {
      setErrors(error.response.data.errors);
      setLoading(false);
    });
};
