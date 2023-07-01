import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import LoginForm from "@/components/Forms/login";

const breadcrumbs = {
  0: { title: "Home", link: `/` },
  1: { title: "Login", link: "/login" },
};

const Login = () => {
  return (
    <div className="container mx-auto px-4 mb-14">
      <Breadcrumbs crumbs={breadcrumbs} />

      <LoginForm />
    </div>
  );
};

export default Login;

Login.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
