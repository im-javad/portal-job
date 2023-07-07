import { login } from "@/hooks/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import InputError from "@/components/InputError";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);

  const [errors, setErrors] = useState([]);

  const [loginStatus, setLoginStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    login({
      setLoading,
      setErrors,
      setLoginStatus,
      email,
      password,
      remember: shouldRemember,
    });
  };

  useEffect(() => {
    if (loginStatus === "success") {
      router.push("/dashboard");
    }
  }, [loginStatus]);

  return (
    <div className="grid grid-cols-12">
      {loading && <Loader />}
      <div className="form bg-appColor_1 col-span-12 lg:col-span-6 lg:col-start-4 p-6 rounded-xl">
        <div className="col-span-12 lg:col-span-6 mb-7 flex justify-center">
          <h2 className="text-2xl text-appColor_2 font-bold">Login Form</h2>
        </div>
        <form onSubmit={submit}>
          <div className="col-span-12 lg:col-span-6 mb-7">
            <label htmlFor="email" className="text-appColor_2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoFocus
              placeholder="Type here"
              className="input border-appColor_2 text-appColor_3 bg-appColor_1 w-full mt-2"
            />
            <InputError messages={errors.email} className="mt-2" />
          </div>
          <div className="col-span-12 mb-7">
            <label htmlFor="password" className="text-appColor_2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              placeholder="Type here"
              className="input border-appColor_2 text-appColor_3 bg-appColor_1 w-full mt-2"
            />
            <InputError messages={errors.password} className="mt-2" />
          </div>
          <div className="cols-span-12 mb-7 fkex items-center text-appColor_2">
            <input
              id="remember_me"
              type="checkbox"
              name="remember"
              onChange={(event) => setShouldRemember(event.target.checked)}
            />
            <span className="ms-2">Remember Me</span>
          </div>
          <div className="col-span-12 mb-7">
            <button className="btn transition duration-500 ease-in w-full normal-case text-lg bg-appColor_2 hover:bg-appColor_3 outline-none text-run hover:text-appColor_1">
              Let me
            </button>
          </div>
        </form>
        <div className="col-span-12 mb-7">
          <div className="flex flex-col">
            <strong className="text-appColor_3 mb-2">
              <Link href="#"># or register a new account</Link>
            </strong>
            <strong className="text-appColor_3">
              <Link href="#"># Forget your password?</Link>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
