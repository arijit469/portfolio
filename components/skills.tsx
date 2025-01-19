"use client"

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const skills = [
  "Java", "Python", "JavaScript", "React", "Node.js", "Express.js", 
  "MongoDB", "SQL", "Git", "Machine Learning"
]

const Skills = () => {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <motion.h2 
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Badge variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

