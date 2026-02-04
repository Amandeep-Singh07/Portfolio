"use client";

import { useState, FormEvent } from "react";
import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";
import Button from "@/components/Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMessage("Please enter a subject");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message");
      return false;
    }
    if (formData.message.length < 10) {
      setErrorMessage("Message must be at least 10 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // In a real application, you would send this to an API endpoint
      // For now, we'll simulate a successful submission
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div>
      <PageTitle
        title="Get In Touch"
        subtitle="Let's connect and discuss opportunities"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-bold text-cyan-400 mb-3">
                  📧 Email
                </h3>
                <a
                  href="mailto:amandeep16052000@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors break-all"
                >
                  amandeep16052000@gmail.com
                </a>
              </Card>
              <Card>
                <h3 className="text-lg font-bold text-cyan-400 mb-3">
                  📞 Phone
                </h3>
                <a
                  href="tel:+918949285007"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  +91 89492 85007
                </a>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-cyan-400 mb-3">
                  📍 Location
                </h3>
                <p className="text-slate-400">Phagwara, Punjab, India</p>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-cyan-400 mb-3">
                  💼 LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/amandeep-singh1120/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors break-all"
                >
                  linkedin.com/in/amandeep-singh1120
                </a>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-cyan-400 mb-3">
                  🐙 GitHub
                </h3>
                <a
                  href="https://github.com/Amandeep-Singh07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors break-all"
                >
                  github.com/Amandeep-Singh07
                </a>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                Send Me a Message
              </h2>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                  <p className="text-green-400 font-semibold">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && errorMessage && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                  <p className="text-red-400 font-semibold">✗ {errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-slate-300 font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Amandeep Singh"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-slate-300 font-semibold mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="amandeep16052000@gmail.com"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-slate-300 font-semibold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Internship Opportunity"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-300 font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your opportunity..."
                    disabled={status === "loading"}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    status === "loading"
                      ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                      : "bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
                  }`}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>

              <p className="text-slate-400 text-sm mt-6 text-center">
                I typically respond within 24 hours during business days.
              </p>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <Card className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Open To</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-cyan-400 font-semibold mb-2">
                💼 Opportunities
              </p>
              <ul className="text-slate-400 space-y-1 text-sm">
                <li>• Full-time positions</li>
                <li>• Internships</li>
                <li>• Freelance projects</li>
                <li>• Startup roles</li>
              </ul>
            </div>
            <div>
              <p className="text-cyan-400 font-semibold mb-2">🎯 Roles</p>
              <ul className="text-slate-400 space-y-1 text-sm">
                <li>• Software Developer</li>
                <li>• Full Stack Developer</li>
                <li>• Frontend Engineer</li>
                <li>• Backend Engineer</li>
              </ul>
            </div>
            <div>
              <p className="text-cyan-400 font-semibold mb-2">
                ⚙️ Technologies
              </p>
              <ul className="text-slate-400 space-y-1 text-sm">
                <li>• React & Next.js</li>
                <li>• Node.js & Express</li>
                <li>• Python & Flask</li>
                <li>• Cloud platforms</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
