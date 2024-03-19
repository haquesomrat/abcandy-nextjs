import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Featured from "@/components/featured";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
      </main>
    </>
  );
};

export default Homepage;
