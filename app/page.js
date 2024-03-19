import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Featured from "@/components/Featured/featured";
import Hero from "@/components/Hero/hero";
import TeamBanner from "@/components/TeamBanner/teamBanner";
import Blogs from "@/components/Blogs/Blogs";

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
    </>
  );
};

export default Homepage;
