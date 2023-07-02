import { fetchingUser } from "@/hooks/auth";

const Me = ({ receivedUser }) => {
  console.log(receivedUser);

  return <div className=" bg-stone-950">Yeah bro we can</div>;
};

export default Me;

export const getServerSideProps = async ({ req }) => {
  const user = await fetchingUser(req);

  return {
    props: {
      receivedUser: user,
    },
  };
};
