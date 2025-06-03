"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-28 px-6 md:px-16 bg-gradient-to-br from-[#0f172a] to-[#1e1b4b]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            I'm currently open to full-time roles — whether remote, hybrid, or on-site.
            If you're hiring, interested in collaborating, or just want to chat, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#1e1b4b]/50 to-[#312e81]/50 border border-[#4f46e5]/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-200 mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                    <Mail size={20} className="text-purple-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                    <a 
                      href="mailto:syedahajra.dev@gmail.com" 
                      className="text-purple-300 hover:text-white transition-colors"
                    >
                      syedahajra.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                    <Linkedin size={20} className="text-purple-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/syedahajra" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-white transition-colors"
                    >
                      linkedin.com/in/syedahajra
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                    <Github size={20} className="text-purple-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/syedahajra" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-white transition-colors"
                    >
                      github.com/syedahajra
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                    <MapPin size={20} className="text-purple-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                    <p className="text-white/90">Pakistan (Open to remote opportunities globally)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#1e1b4b]/50 to-[#312e81]/50 border border-[#4f46e5]/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-purple-200 mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#0f172a]/50 border border-[#4f46e5]/30 rounded-lg text-white placeholder-[#a0a0c2] focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#0f172a]/50 border border-[#4f46e5]/30 rounded-lg text-white placeholder-[#a0a0c2] focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0f172a]/50 border border-[#4f46e5]/30 rounded-lg text-white placeholder-[#a0a0c2] focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                    placeholder="Hello Hajra, I'd like to talk about..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>

              <p className="mt-4 text-center text-white/70">
                I usually respond within 1–2 business days!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}