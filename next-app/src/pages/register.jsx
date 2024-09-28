import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import RegisterForm from "@/components/Forms/register";
import Head from "next/head";

const breadcrumbs = {
  0: { title: "Home", link: `/` },
  1: { title: "Register", link: "/register" },
};

const Register = () => {
  return (
    <>
    <Head>
      <title>Register</title>
    </Head>
    
      <div className="container mx-auto px-4 mb-28">
        <Breadcrumbs crumbs={breadcrumbs} />

        <RegisterForm />
      </div>
    </>
  );
};

export default Register;

Register.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};