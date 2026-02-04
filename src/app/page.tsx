"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="animate-fadeInUp">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-semibold">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 leading-tight">
                Amandeep Singh
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 mb-4">
                B.Tech CSE Student | Aspiring Software Developer
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Passionate about building scalable web applications and solving
                complex computational problems. Seeking challenging placements
                and internships to apply my technical skills and grow as a
                developer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/projects">
                  View My Projects
                  <span>→</span>
                </Button>
                <Button href="/contact" variant="outline">
                  Get in Touch
                </Button>
              </div>
              <div className="mt-8 flex gap-4 text-slate-400">
                <a
                  href="https://github.com/Amandeep-Singh07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  GitHub
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/amandeep-singh1120/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href="mailto:amandeep@example.com"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="animate-slideInRight flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-20 blur-3xl animate-pulse-glow"></div>
                <div className="relative w-full h-full bg-slate-800 border-2 border-cyan-500 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
                    <Image
                      src="/profile1.jpg"
                      alt="Amandeep Singh — profile"
                      fill
                      sizes="(max-width: 768px) 12rem, 16rem"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-900 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
              <p className="text-slate-400">Projects Completed</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <p className="text-slate-400">Skills Mastered</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2</div>
              <p className="text-slate-400">Internships</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
              <p className="text-slate-400">Certifications</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                E-Commerce Platform
              </h3>
              <p className="text-slate-400 mb-4">
                Full-stack e-commerce application built with Next.js and
                MongoDB. Features include user authentication, product
                filtering, and secure payments.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm">
                  Stripe
                </span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-cyan-400 hover:text-cyan-300">
                  GitHub →
                </a>
                <a href="#" className="text-cyan-400 hover:text-cyan-300">
                  Live Demo →
                </a>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                AI Chat Application
              </h3>
              <p className="text-slate-400 mb-4">
                Real-time chat application with AI-powered responses. Built with
                React, Firebase, and OpenAI API for intelligent conversations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm">
                  OpenAI
                </span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-cyan-400 hover:text-cyan-300">
                  GitHub →
                </a>
                <a href="#" className="text-cyan-400 hover:text-cyan-300">
                  Live Demo →
                </a>
              </div>
            </Card>
          </div>
          <div className="text-center">
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-slate-900 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12">
            Key Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {[
              "JavaScript/TypeScript",
              "React & Next.js",
              "Python",
              "Java",
              "Web Design",
              "Git & GitHub",
            ].map((skill) => (
              <Card key={skill} className="text-center">
                <p className="text-cyan-400 font-semibold">{skill}</p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button href="/skills" variant="secondary">
              Explore Full Skill Set
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-100 mb-6">
            Looking for a Developer?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm open to internships, placements, and freelance opportunities.
            Let's create something amazing together!
          </p>
          <Button href="/contact">
            Get in Touch
            <span>→</span>
          </Button>
        </div>
      </section>
    </div>
  );
}
