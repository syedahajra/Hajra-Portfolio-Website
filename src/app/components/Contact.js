"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-20 px-6 md:px-16 text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e3a8a]/70 to-[#6d28d9]/80 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f172a] to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          className="mb-16 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center  gap-4 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg"
            >
              <Mail size={24} className="text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              {`Let's Connect`}
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
            {`I'm currently open to full-time roles — whether remote, hybrid, or
            on-site. If you're hiring, interested in collaborating, or just want
            to chat, feel free to reach out!`}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Contact details */}
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
              <h3 className="text-2xl font-semibold mb-8 text-purple-200">
                Contact Details
              </h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:syedahajramutaal@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-colors"
                >
                  <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                    <Mail size={20} className="text-purple-300" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-200">Email</p>
                    <p>syedahajramutaal@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/syeda-hajra-280b17247"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-colors"
                >
                  <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                    <Linkedin size={20} className="text-purple-300" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-200">LinkedIn</p>
                    <p>linkedin.com/in/syeda-hajra-280b17247</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/syedahajra"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-colors"
                >
                  <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                    <Github size={20} className="text-purple-300" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-200">GitHub</p>
                    <p>github.com/syedahajra</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-white/90"
                >
                  <div className="p-3 bg-[#4f46e5]/20 rounded-lg">
                    <MapPin size={20} className="text-purple-300" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-200">Location</p>
                    <p>Karachi, Pakistan (Open to remote opportunities globally)</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Contact form */}
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
              <h3 className="text-2xl font-semibold mb-8 text-purple-200">
                Send Me a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-purple-200 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#312e81]/20 border border-[#4f46e5]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-[#a78bfa]/50"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-purple-200 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#312e81]/20 border border-[#4f46e5]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-[#a78bfa]/50"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-purple-200 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-[#312e81]/20 border border-[#4f46e5]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-[#a78bfa]/50"
                    placeholder="Your message here..."
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="pt-2"
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </motion.div>
                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-400 text-sm"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-400 text-sm"
                  >
                    Failed to send message. Please try again or email me
                    directly.
                  </motion.p>
                )}
              </form>

              <motion.p
                className="mt-6 text-center text-sm text-[#a0a0c2]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I usually respond within 1–2 business days!
              </motion.p>
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
          <span className="text-5xl">💌</span>
        </motion.div>

        <motion.div
          className="absolute -left-10 bottom-1/3 hidden lg:block"
          animate={{
            y: [0, -10, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <span className="text-5xl">📩</span>
        </motion.div>
      </div>
    </section>
  );
}
