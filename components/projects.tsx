"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Multiservice website",
    description:
      "A full-stack multiservice website with user authentication, product management, and payment integration.",
    image: "m.jpg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB"],
    // githubLink: "#",
    // liveLink: "#",
  },
  {
    title: "Machine Learning Model for face recognition in low light",
    description:
      "Developed a CNN model for classifying images of face detect with 99% accuracy.",
    image: "Face-Recognition.jpg?height=200&width=300",
    tags: ["Python", "TensorFlow", "Keras", "Jupyter Notebook"],
    // githubLink: "#",
    // liveLink: "#",
  },
  {
    title: "Doctor appointment booking system",
    description:
      "A responsive web application for managing tasks and projects with real-time updates.",
    image: "logo.png?height=200&width=300",
    tags: ["PHP", "CSS", "MongoDB"],
    // githubLink: "#",
    // liveLink: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="container flex flex-col items-center py-24 sm:py-32"
    >
      <motion.h2
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <div className="grid gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={index === 1 ? "lg:col-span-1 row-span-2" : ""}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="w-full max-w-sm mx-auto">
              <CardHeader>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {/* <CardFooter className="flex justify-between"> */}
                {/* <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button> */}
              {/* </CardFooter> */}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
