import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Navbar from "@/components/navbar";
import Featured from "@/components/featured";
import Hero from "@/components/hero";
import TeamBanner from "@/components/teamBanner";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <TeamBanner />
        <Blogs />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
