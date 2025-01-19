"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Maulana Abul Kalam Azad University of Technology, West Bengal",
    duration: "2023 - 2025",
    CGPA: "8.69",
    description: "Specialization in backlit image processing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vivekananda Mahavidyalaya",
    duration: "2020 - 2023",
    CGPA: "8",
    description: "Foundation in Computer Science and Programming",
  },
];

const Education = () => {
  return (
    <section id="education" className="container py-24 sm:py-32">
      <motion.h2
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <motion.div
        className="grid gap-8 md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.5 }}
          >
            <Card className="transition-transform transform hover:shadow-lg">
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{edu.duration}</p>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
