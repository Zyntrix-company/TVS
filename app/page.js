import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import ProductShowcase from "@/sections/ProductShowcase";
import FranchiseEnquiry from "@/sections/Enquiry";
import Testimonials from "@/sections/Testimonial";
import Footer from "@/sections/Footer";
export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <ProductShowcase/>
   <FranchiseEnquiry/>
   <Testimonials/>
   <Footer/>
   </>
  );
}
