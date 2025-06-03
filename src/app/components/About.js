"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Code, Cpu, Palette, Server, Award, Sparkles } from "lucide-react";

export default function AboutSection() {
  const constraintsRef = useRef(null);

  const skills = [
    {
      name: "Languages",
      icon: <Code size={20} className="text-purple-300" />,
      items: ["JavaScript", "TypeScript", "Python", "C/C++", "Java"],
    },
    {
      name: "Frontend",
      icon: <Palette size={20} className="text-purple-300" />,
      items: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Material UI",
        "ShadCN/UI",
      ],
    },
    {
      name: "Backend & API",
      icon: <Server size={20} className="text-purple-300" />,
      items: [
        "Flask",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "REST API",
        "Postman",
      ],
    },
    {
      name: "Tools & Platforms",
      icon: <Cpu size={20} className="text-purple-300" />,
      items: [
        "Git",
        "Figma",
        "Vercel",
        "Azure App Service",
        "OpenCV",
        "OpenAI API",
      ],
    },
    {
      name: "Certifications",
      icon: <Award size={20} className="text-purple-300" />,
      items: [
        "Google Cybersecurity Certificate",
        "Backend Web Dev Bootcamp – DevTown x GDSC KIIT",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-20 px-6 md:px-16 text-white overflow-hidden"
      ref={constraintsRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e3a8a]/70 to-[#6d28d9]/80 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f172a] to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg"
            >
              <Sparkles size={24} className="text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              About Me
            </h2>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6" />

          <motion.p
            className="text-lg text-white/90 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {`I'm`} a passionate full-stack developer with a love for creating beautiful, 
            functional digital experiences. With a background in both design and development, 
            I bridge the gap between aesthetics and functionality.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-gradient-to-br from-[#1e1b4b]/50 to-[#312e81]/50 rounded-2xl border border-[#4f46e5]/30 backdrop-blur-sm shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                  <Code size={24} className="text-purple-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-200 mb-2">
                    My Journey
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    My development journey took off during university, where I
                    explored everything from chatbots to sentiment analysis
                    apps. I built my facial recognition-based FYP with Next.js,
                    Django, and PostgreSQL, and interned at Lambda Theta where I
                    redesigned legacy UIs into modern React dashboards. I love
                    transforming abstract ideas into functional, aesthetic
                    interfaces.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-gradient-to-br from-[#1e1b4b]/50 to-[#312e81]/50 rounded-2xl border border-[#4f46e5]/30 backdrop-blur-sm shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                  <Palette size={24} className="text-purple-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-200 mb-2">
                    My Approach
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    I may not always start with all the answers but I always find a way to make things work. Whether it’s diving into unfamiliar tools like Three.js or learning new frameworks on the fly, I adapt quickly and build solutions that work. <br /> I believe real-world development is about problem-solving, not perfection. I build things that work, even if I’m learning along the way.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-gradient-to-br from-[#1e1b4b]/50 to-[#312e81]/50 rounded-2xl border border-[#4f46e5]/30 backdrop-blur-sm shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-200">
                Skills & Tools
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="p-5 bg-[#312e81]/20 rounded-xl border border-[#4f46e5]/20 hover:bg-[#312e81]/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {category.icon}
                      <h4 className="font-medium text-purple-200">
                        {category.name}
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {category.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: i * 0.05 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-sm text-white/90"
                        >
                          <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              drag
              dragConstraints={constraintsRef}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-8 bg-gradient-to-br from-[#4f46e5]/10 to-[#9333ea]/10 rounded-2xl border border-[#4f46e5]/30 backdrop-blur-sm shadow-lg cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                  <Sparkles size={24} className="text-purple-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-200 mb-2">
                    Beyond Code
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    When not coding, I explore ethical hacking, NLP, and tweak
                    my portfolio more than I should. Currently diving deep into JS
                    and React concepts to understand the {`"why"`} behind every line
                    of code becuase I noticed I started to rely too much on GPT.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Ethical Hacking",
                      "UI Design",
                      "3D Web",
                      "Painting",
                    ].map((hobby, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 text-xs font-medium bg-[#4f46e5]/20 text-purple-200 rounded-full hover:bg-[#4f46e5]/30 transition-all"
                      >
                        {hobby}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute -right-10 top-1/3 hidden lg:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-5xl">✨</span>
        </motion.div>

        <motion.div
          className="absolute -left-10 bottom-1/4 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <span className="text-5xl">👾</span>
        </motion.div>
      </div>
    </section>
  );
}
