"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <motion.h2
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          whileHover={{
            scale: 1.1,
            rotate: 2,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.95,
            rotate: 0,
            transition: { duration: 0.2 },
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="profile.jpg?height=400&width=400"
            alt="Arijit Malik"
            width={400}
            height={400}
            className="rounded-full mx-auto"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            Hello! I'm Arijit Malik, a passionate MCA student with a keen interest in software development and emerging technologies.
            My journey in computer science has equipped me with a strong foundation in various programming languages and frameworks.
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Hello */}
            I love tackling complex problems and turning ideas into reality through code. When I'm not coding, you can find me
            exploring new technologies, contributing to open-source projects, or enjoying a good book on tech innovations.
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm always eager to learn and grow in this ever-evolving field of technology. Let's connect and create something amazing together!
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
