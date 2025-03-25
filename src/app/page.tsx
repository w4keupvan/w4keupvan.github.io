import Link from "next/link";
import {
  FaCode,
  FaPhoneSquare,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaUser,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import techStack from "@/lib/tech-stack";
import { projects } from "@/lib/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 lg:px-24 grid lg:grid-cols-2 gap-12">
        {/* Left Side: Profile & Contact */}
        <div className="space-y-8 lg:sticky lg:top-12 self-start">
          <div className="bg-neutral-900 rounded-2xl p-8 shadow-xl border border-[#2A2A2A]">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-24 h-24 rounded-full bg-[#121212] flex items-center justify-center">
                <FaUser size={48} className="text-slate-200" />
              </div>
              <div>
                <h1 className="text-slate-200 text-3xl font-bold">
                  Justine Ivan Gueco
                </h1>
                <p>Software Developer</p>
              </div>
            </div>
            <p className="mb-6">
              I specialize in building applications from scratch.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/w4keupvan"
                target="_blank"
                className="hover:bg-[#2A2A2A] p-2 rounded-full transition"
              >
                <FaGithub className=" hover:text-slate-200" size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/justine-ivan-gueco"
                target="_blank"
                className="hover:bg-[#2A2A2A] p-2 rounded-full transition"
              >
                <FaLinkedin className=" hover:text-slate-200" size={24} />
              </Link>
              <Link
                href="https://instagram.com/aybancaughtin4k"
                target="_blank"
                className="hover:bg-[#2A2A2A] p-2 rounded-full transition"
              >
                <FaInstagram className=" hover:text-slate-200" size={24} />
              </Link>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-neutral-900 rounded-2xl p-6 shadow-xl border border-[#2A2A2A]">
            <h2 className="text-xl font-bold mb-4 flex items-center text-slate-200">
              <FaMapMarkerAlt className="mr-2 " /> Location
            </h2>
            <p>Bataan, Philippines</p>

            <div className="border-t border-[#2A2A2A] my-4"></div>

            <h2 className="text-xl font-bold mb-4 flex items-center text-slate-200">
              <FaEnvelope className="mr-2 " /> Contact
            </h2>
            <p>
              Open for opportunities and collaboration. Don&apos;t hesitate to
              reach out to me at my LinkedIn.
            </p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-12">
          {/* About Section */}
          <section
            id="about"
            className="bg-neutral-900 rounded-2xl p-8 shadow-xl border border-[#2A2A2A]"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-200">
              <FaUser className="mr-3 " /> About Me
            </h2>
            <div className="space-y-4">
              <p>
                A self motivated aspiring software engineer based from the
                Philippines, specializing in building web and mobile
                applications from scratch. I continuously refine my skills by
                developing personal projects and self studying during my free
                time.
              </p>
              <p>
                With a strong foundation in full-stack and mobile development, I
                adapt to different environments, embrace challenges, and eagerly
                learn new things every day to stay up-to-date with industry
                trends and standards.
              </p>
            </div>
          </section>

          {/* Tech Skills */}
          <section
            id="skills"
            className="bg-neutral-900 rounded-2xl p-8 shadow-xl border border-[#2A2A2A]"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-200">
              <FaCode className="mr-3 " /> Technical Skills
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-[#121212] rounded-lg p-4 flex flex-col items-center hover:bg-neutral-800/50 transition cursor-pointer hover:text-slate-200"
                >
                  <Image
                    width={32}
                    height={32}
                    src={tech.src}
                    alt={tech.alt}
                    className="w-8 h-8 mb-2"
                  />
                  <span className="text-sm text-center">{tech.alt}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="bg-neutral-900 rounded-2xl p-8 shadow-xl border border-[#2A2A2A]"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-200">
              <FaBriefcase className="mr-3 " /> Featured Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-[#121212] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-200">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#2A2A2A] text-xs px-2 py-1 rounded "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={project.repo_url}
                      target="_blank"
                      className="flex items-center text-sm  hover:text-slate-200 transition"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </Link>
                    <Link
                      href={project.live_preview || ""}
                      target="_blank"
                      className="flex items-center text-sm  hover:text-slate-200 transition"
                    >
                      <FaPhoneSquare className="mr-2" /> Live Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-slate-200 py-6 ">
        <p>
          © {new Date().getFullYear()} Justine Ivan Gueco. Built with Next.js &
          Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
