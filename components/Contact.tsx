"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 6000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const inputClass =
    "w-full bg-gray-900/50 border border-gray-800 focus:border-violet-500 rounded-xl px-4 py-3 text-white placeholder-gray-700 outline-none transition-colors text-sm";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-2 tracking-widest uppercase">
            05. Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Have a project in mind or want to collaborate? Drop me a message —
            I&apos;ll get back to you quickly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-4 text-gray-400 hover:text-violet-400 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600/25 transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Email</div>
                  <div className="text-sm">your@email.com</div>
                </div>
              </a>

              <a
                href="https://t.me/asilbek_boysoatov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-violet-400 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600/25 transition-colors shrink-0">
                  <FaTelegram size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Telegram</div>
                  <div className="text-sm">@asilbek_boysoatov</div>
                </div>
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/boysoatov"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/40 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/asilbek-boysoatov"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            <div className="mt-8 p-5 bg-gray-900/40 border border-gray-800/80 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  Open to opportunities
                </span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                I&apos;m available for new projects and collaborations. I typically
                respond within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2.5 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] active:scale-[0.98]"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-green-400 bg-green-500/8 border border-green-500/20 rounded-xl px-4 py-3 text-sm"
                >
                  <CheckCircle size={17} />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-red-400 bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3 text-sm"
                >
                  <XCircle size={17} />
                  <span>
                    Something went wrong. Please try again or email me directly.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
