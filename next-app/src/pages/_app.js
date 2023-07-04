import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "@/components/Loader";
import "@/assets/globals.css";
import "@/assets/scss/run.scss";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     document.getElementById("loader").style.display = "block";
  //   };

  //   const handleRouteComplete = () => {
  //     document.getElementById("loader").style.display = "none";
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);
  //   router.events.on("routeChangeComplete", handleRouteComplete); // If the component is unmounted, unsubscribe

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Component {...pageProps} />
      {/* <Loader /> */}
    </>
  );
};

export default MyApp;
