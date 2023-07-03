import { login } from "@/hooks/auth";
import Link from "next/link";
import { useState } from "react";
import Loader from "../Loader";
// import InputError from "@/components/InputError";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    login({
      setLoading,
      email,
      password,
      remember: shouldRemember,
    });
  };

  return (
    <div className="grid grid-cols-12">
      {loading && <Loader />}
      <div className="form shadow-md shadow-appColor_3 col-span-12 lg:col-span-6 lg:col-start-4 p-6 rounded">
        <div className="col-span-12 lg:col-span-6 mb-7 flex justify-center">
          <h2 className="text-2xl">Login Form</h2>
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
              className="input input-bordered bg-appColor_4 w-full mt-2"
            />
            {/* <InputError messages={errors.email} className="mt-2" /> */}
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
              className="input input-bordered bg-appColor_4 w-full mt-2"
            />
            {/* <InputError messages={errors.password} className="mt-2" /> */}
          </div>
          <div className="cols-span-12 mb-7 fkex items-center">
            <input
              id="remember_me"
              type="checkbox"
              name="remember"
              onChange={(event) => setShouldRemember(event.target.checked)}
            />
            <span className="ms-2">Remember Me</span>
          </div>
          <div className="col-span-12 mb-7">
            <button className="btn w-full normal-case text-lg bg-appColor_2 hover:bg-appColor_2 outline-none text-appColor_4">
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
