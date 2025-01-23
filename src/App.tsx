import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Button } from "./components/Button";
import { SectionTitle } from "./components/SectionTitle";
import { ServiceCard } from "./components/ServiceCard";
import { Footer } from "./components/Footer";
import { projects, services } from "./constants";
import { npm, self, self1, selfGradient } from "./assets";

function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left z-50"
      />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
        </div>

        <div className="relative pt-20 lg:pt-0 flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="inline-block mb-6"
                >
                  <span className="text-blue-500 font-space-grotesk font-medium bg-blue-500/10 px-4 py-2 rounded-full text-sm">
                    Available for Projects
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-5xl lg:text-7xl font-bold mb-6 text-white"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-space-grotesk">
                    Dony M Varkey
                  </span>
                </motion.h1>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "TypeScript",
                    "React Native",
                    "MongoDB",
                  ].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700 font-space-grotesk"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-xl text-slate-300 mb-8 max-w-2xl font-inter"
                >
                  Full Stack Developer specializing in creating exceptional
                  digital experiences through innovative solutions and elegant
                  design.
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    variant="primary"
                    icon
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <span className="font-space-grotesk">Let's Talk</span>
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <span className="font-space-grotesk font-medium">
                      View Work
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative hidden lg:block"
              >
                <div className="relative w-full h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                  <motion.div
                    animate={{
                      rotateY: mousePosition.x * 0.1,
                      rotateX: mousePosition.y * -0.1,
                    }}
                    transition={{ type: "spring", stiffness: 75, damping: 15 }}
                    className="relative w-full h-full"
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: 1000,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-xl border border-slate-700" />
                    <img
                      src={self}
                      alt="Dony M Varkey"
                      className="absolute inset-0 w-full h-full object-contain rounded-3xl opacity-60 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-3xl" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <SectionTitle>
            <span className="font-space-grotesk">About Me</span>
          </SectionTitle>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-xl border border-slate-700" />
                <img
                  src={selfGradient}
                  alt="Dony M Varkey"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-4">
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://github.com/donymvarkey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/80 p-3 rounded-full text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://www.linkedin.com/in/donymvarkey/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/80 p-3 rounded-full text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://x.com/donymvarkey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/80 p-3 rounded-full text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <Twitter size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://www.instagram.com/dony_varkey/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/80 p-3 rounded-full text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <Instagram size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white font-inter">
                Passionate about creating
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-space-grotesk">
                  {" "}
                  digital experiences
                </span>
              </h3>
              <div className="space-y-4 text-slate-300 font-inter">
                <p>
                  With over 4.5+ years of experience in software development, I
                  specialize in creating innovative solutions that combine
                  elegant design with robust functionality. My expertise spans
                  across web development and mobile applications using
                  cross-platform technologies.
                </p>
                <p>
                  I'm passionate about staying at the forefront of technology
                  trends and implementing best practices in software
                  development. My approach focuses on creating scalable,
                  maintainable, and user-centric applications that deliver real
                  value.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white font-space-grotesk">
                      10+
                    </div>
                    <div className="text-sm text-slate-400">
                      Projects Completed
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white font-space-grotesk">
                      100%
                    </div>
                    <div className="text-sm text-slate-400">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="primary"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="font-space-grotesk">Get in Touch</span>
                </Button>
                <Button
                  variant="secondary"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="font-space-grotesk">View Portfolio</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <SectionTitle>
            <span className="font-space-grotesk">My Services</span>
          </SectionTitle>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {services.map((service, index) => (
              <div key={index} className="break-inside-avoid">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <SectionTitle>
            <span className="font-space-grotesk">Featured Projects</span>
          </SectionTitle>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={`Project ${project.name}`}
                  className="w-full aspect-video object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2 font-space-grotesk">
                      {project.name}
                    </h3>
                    <p className="text-slate-300 mb-4 font-inter">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2">
                      {project.url.map((url, index) => (
                        <motion.a
                          key={index}
                          href={url.href}
                          whileHover={{ y: -5 }}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800/80 p-3 rounded-full text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          <div>
                            {url.name === "GitHub" ? (
                              <Github size={20} />
                            ) : url.name === "NPM" ? (
                              <img src={npm} alt="NPM" className="w-5 h-5" />
                            ) : null}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <SectionTitle>
            <span className="font-space-grotesk">Get in Touch</span>
          </SectionTitle>
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 font-space-grotesk">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 font-space-grotesk">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 font-space-grotesk">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your message"
                />
              </div>
              <Button variant="primary" icon>
                <span className="font-space-grotesk">Send Message</span>
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
