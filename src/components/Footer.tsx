import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">AS</h3>
            <p className="text-slate-400">
              Computer Science Student | Aspiring Software Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Amandeep-Singh07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/amandeep-singh1120/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:amandeep@example.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-500 text-sm">
            © {currentYear} Amandeep Singh. All rights reserved. | Designed &
            Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
