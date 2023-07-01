import { useRouter } from "next/router";
import axios from "@/lib/axios";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();

  const user = async () => {
    const user = await axios
      .get("/api/user", {
        withCredentials: true,
      })
      .then((response) => response.data);
    //   Cath ....

    return user;
  };

  const register = async ({ ...props }) => {
    axios
      .post("/api/register", props, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => router.push("/login"));
  };

  const login = async ({ ...props }) => {
    axios
      .post("/api/login", props, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => router.push("/me"));
  };

  return {
    user,
    register,
    login,
  };
};
