import { register } from "@/hooks/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import InputError from "@/components/InputError";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);

  const [registerStatus, setRegisterStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    register({
      setLoading,
      setErrors,
      setRegisterStatus,
      name,
      email,
      role,
      password,
    });
  };

  useEffect(() => {
    if (registerStatus === "success") {
      router.push("/login");
    }
  }, [registerStatus]);

  return (
    <div className="grid grid-cols-12">
      {loading && <Loader />}
      <div className="form shadow-md shadow-appColor_3 col-span-12 lg:col-span-6 lg:col-start-4 p-6 rounded">
        <div className="col-span-12 lg:col-span-6 mb-7 flex justify-center">
          <h2 className="text-2xl">Register Form</h2>
        </div>
        <form onSubmit={submit}>
          <div className="col-span-12 lg:col-span-6 mb-7">
            <label htmlFor="name" className="text-appColor_2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Type here"
              className="input input-bordered bg-appColor_4 w-full mt-2"
              onChange={(event) => setName(event.target.value)}
              required
              autoFocus
            />
            <InputError messages={errors.name} className="mt-2" />
          </div>
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
              placeholder="Type here"
              className="input input-bordered bg-appColor_4 w-full mt-2"
            />
            <InputError messages={errors.email} className="mt-2" />
          </div>
          <div className="col-span-12 mb-7">
            <label htmlFor="role" className="text-appColor_2">
              Role
            </label>
            <select
              type="password"
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              required
              className="input input-bordered bg-appColor_4 w-full mt-2"
            >
              <option selected disabled>
                Select
              </option>
              <option value="Employer">Employer</option>
              <option value="Job Seeker">Job Seeker</option>
            </select>
            <InputError messages={errors.role} className="mt-2" />
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
              autoComplete="new-password"
              placeholder="Type here"
              className="input input-bordered bg-appColor_4 w-full mt-2"
            />
            <InputError messages={errors.password} className="mt-2" />
          </div>
          <div className="col-span-12 mb-7">
            <button className="btn w-full normal-case text-lg bg-appColor_2 hover:bg-appColor_2 outline-none text-appColor_4">
              Register Now
            </button>
          </div>
          <div className="col-span-12 mb-7">
            <div className="flex flex-col">
              <strong className="text-appColor_3 mb-2">
                <Link href="/login"># or do you have an account?</Link>
              </strong>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
