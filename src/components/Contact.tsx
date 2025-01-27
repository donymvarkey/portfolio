import { SectionTitle } from "./SectionTitle";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { saveContactMe } from "../appwrite";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const validateForm = () => {
    if (
      formData["email"] === "" ||
      formData["name"] === "" ||
      formData["message"] === ""
    ) {
      setError("Please fill all the fields");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      await saveContactMe(formData);
      alert("Form submitted");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <>
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
            {error && (
              <p className="text-xs text-red-600 font-inter text-center">
                {error}
              </p>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 font-space-grotesk">
                  <span className="me-1 text-red-600 font-space-grotesk">
                    *
                  </span>
                  Name
                </label>
                <input
                  onChange={(e) => handleChange("name", e.target.value)}
                  value={formData["name"]}
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 font-space-grotesk">
                  <span className="me-1 text-red-600 font-space-grotesk">
                    *
                  </span>
                  Email
                </label>
                <input
                  value={formData["email"]}
                  onChange={(e) => handleChange("email", e.target.value)}
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2 font-space-grotesk">
                <span className="me-1 text-red-600 font-space-grotesk">*</span>
                Message
              </label>
              <textarea
                value={formData["message"]}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Your message"
              />
            </div>
            <Button
              onClick={(e: any) => {
                handleSubmit(e);
              }}
              variant="primary"
              icon
            >
              <span className="font-space-grotesk">Send Message</span>
            </Button>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default Contact;
