"use client";
import { motion } from "framer-motion";
import { Code, ExternalLink, Github, MoveRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card";

const projects = [
   {
    title: "Facial Recognition System (Frontend)",
    description: "Next.js frontend for real-time facial authentication interface with 98.7% accuracy model integration",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/facial-recognition-frontend",
    demo: "https://facial-recognition-demo.vercel.app",
    featured: true
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Real-time sentiment analysis of user feedback using NLP, personalized mood tracking, and visual charts",
    tags: ["React", "Flask", "OpenAI API", "Prisma","NLP"],
    github: "https://github.com/syedahajra/sentiment-analysis",
    demo: null
  },
  {
  title: "EAXEE UI & Backend Revamp",
  description: "Revamped legacy dashboards with React, Tailwind CSS, and ShadCN/UI. Designed and implemented backend APIs in Java, created database tables, and supported a new portal by converting legacy data to JSON format for better integration.",
  tags: ["React", "Material UI", "Java", "API Development", "JSON", "Apache ECharts"],
  github: null,
  demo: null
}
,
  {
    title: "Interactive 3D Portfolio",
    description: "Created an immersive 3D portfolio using Three.js and Framer Motion, demonstrating WebGL techniques and smooth animations within a Next.js framework.",
    tags: ["Three.js", "WebGL", "Framer Motion", "Next.js"],
    github: "https://github.com/syedahajra/3d-portfolio",
    demo: "https://3d-portfolio-concept.vercel.app"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-20 px-6 md:px-16 ">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e3a8a]/70 to-[#6d28d9]/80 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f172a] to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg"
            >
              <Code size={24} className="text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Featured Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6" />
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
            Selected work showcasing my full-stack capabilities and design approach. 
            Each project represents unique challenges and creative solutions.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full bg-gradient-to-br from-[#1e1b4b]/50 to-[#312e81]/50 border border-[#4f46e5]/30 backdrop-blur-sm overflow-hidden group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-white/80">
                        {project.description}
                      </CardDescription>
                    </div>
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-200 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-[#4f46e5]/20 text-purple-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-2 text-sm text-purple-300 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-2 text-sm text-purple-300 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                    {!project.demo && !project.github && (
                      <span className="flex items-center gap-2 text-sm text-white/50">
                        <MoveRight size={16} />
                        Case Study Available
                      </span>
                    )}
                  </div>
                </CardContent>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 mb-6">Want to see more? Check out my GitHub or contact me for case studies.</p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium flex items-center gap-2"
            >
              <Github size={18} />
              GitHub Profile
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              className="px-6 py-3 border border-purple-400/30 rounded-lg font-medium hover:bg-purple-900/30 transition-colors"
            >
              Discuss a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}