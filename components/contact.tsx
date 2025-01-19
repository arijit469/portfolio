"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <motion.h2
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              <span>Arijitmalik267@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              <span>+91 8327573101 </span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span>India, West Bengal, Hooghly</span>
            </div>
          </div>
        </motion.div>

        {/* Send a Message */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* <h3 className="text-2xl font-bold mb-4">Send a Message</h3> */}
          {/* <form className="space-y-4"> */}
  {/* <Input placeholder="Your Name" />
  <Input type="email" placeholder="Your Email" />
  <Textarea placeholder="Your Message" />
  <Button
    type="submit"
    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  > */}
    {/* Send Message */}
  {/* </Button> */}
{/* </form> */}
<center>
          {/* Resume Download Section */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">
              Interested in learning more about me? Download my resume below.
            </p>
            <a
              href="/resume.pdf" // Update this path with the actual location of your resume file
              download="Arijit_Malik_Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div></center>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
