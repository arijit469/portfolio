"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Import Link from next/link
import Projects from "./projects";
const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-24 md:py-32 relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/backgroundphoto.jpg')", // Replace with your image path
        backgroundSize: "cover", // Ensure the image scales properly
        backgroundPosition: "center", // Center the image
      }}
    >
      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm <span className="text-primary">Arijit Malik</span>
        </motion.h1>
        <motion.p
          className="max-w-[700px] text-center text-lg text-white/90 sm:text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          MCA student passionate about building innovative software solutions.
          Exploring the intersection of technology and creativity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* <Link href="/Projects"> */}
            <Button size="lg">
              View My Work
              {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
            </Button>
          {/* </Link> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
