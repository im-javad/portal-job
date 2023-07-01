import { useEffect } from "react";
import axios from "@/lib/axios";
import { useAuth } from "@/hooks/auth";

const Me = () => {
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      const me = await user();
      console.log(me);
    })();
  });

  return <div className=" bg-stone-950">Yeah bro we can</div>;
};

export default Me;
