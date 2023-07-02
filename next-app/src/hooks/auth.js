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

export const register = async ({ ...props }) => {
  axios.post("/api/register", props, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const login = async ({ ...props }) => {
  axios.post("/api/login", props, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
