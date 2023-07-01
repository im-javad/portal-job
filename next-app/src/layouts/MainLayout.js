import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
