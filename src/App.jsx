
import { useState } from 'react'

const navItems = [
  'About',
  'Skills',
  'Projects',
  'Certificates',
  'Education',
  'Experience',
  'Resume',
  'Contact',
]

const skills = [
  'Python',
  'Artificial Intelligence',
  'Machine Learning',
  'React',
  'JavaScript',
  'FastAPI',
  'Git & GitHub',
  'SQL',
]

const projects = [
  {
    title: 'AI Trip Planner',
    description:
      'An AI-powered travel planning application designed to generate personalized itineraries.',
    tech: ['React', 'AI', 'APIs'],
  },
  {
    title: 'Smart Study Planner',
    description:
      'A study planning application for organizing subjects, available study hours, and examination dates.',
    tech: ['Python', 'Database'],
  },
  {
    title: 'WSMO AI Companion',
    description:
      'An AI companion project focused on personalized learning and intelligent assistance.',
    tech: ['FastAPI', 'LangGraph', 'Next.js'],
  },
]

const certificates = [
  {
    title: 'Internship Certificate',
    issuer: 'MainCrafts',
    description: 'Full Stack Web Development Internship',
    file: '/certificates/internship-certificate.pdf',
    type: 'pdf',
  },
  {
    title: 'Technical Course Certificate',
    issuer: 'Add your actual certificate provider',
    description: 'Technical course completion certificate.',
    file: '/certificates/course-certificate.pdf',
    type: 'pdf',
  },
  {
    title: 'Additional Certificate',
    issuer: 'Add your actual certificate provider',
    description: 'Add details of another certificate you have earned.',
    file: '/certificates/certificate-image.png',
    type: 'image',
  },
]

const cardClass =
  'rounded-2xl border border-white/10 bg-[#0b101c] p-6 transition hover:border-indigo-400/40'

const linkedinUrl =
  'https://www.linkedin.com/in/abhilash-pg-284467295/'

const githubUrl = 'https://github.com/Abhilashpg2005'

function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
        {label}
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-3xl leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-hidden bg-[#070b14] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold">
            Abhilash<span className="text-indigo-400">.</span>
          </a>

          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/20 px-3 py-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? 'Close ✕' : 'Menu ☰'}
          </button>
        </nav>

        {menuOpen && (
          <div className="grid gap-4 border-t border-white/10 p-5 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Home */}
        <section
          id="home"
          className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 overflow-hidden px-6 py-20 md:grid-cols-2"
        >
          <div className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px]" />

          <div className="relative">
            <p className="mb-6 inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-300">
              AI · Machine Learning · Technology
            </p>

            <p className="text-lg text-slate-400">
              Hello, I'm
            </p>

            <h1 className="mt-3 text-6xl font-extrabold tracking-tight sm:text-7xl">
              Abhilash
              <span className="block bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                Pg.
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold">
              AI/ML Engineer
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              Exploring artificial intelligence, machine learning, and
              software development to build practical digital solutions.
              Welcome to my professional portfolio.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:bg-indigo-500"
              >
                Explore My Projects →
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>

            {/* Social profile links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-indigo-400/40 px-5 py-3 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-400/10"
              >
                LinkedIn ↗
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                GitHub ↗
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              AI & ML · Software Development · Continuous Learning
            </p>
          </div>

          {/* Profile photo */}
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 p-4 shadow-2xl shadow-indigo-950/40">
            <div className="overflow-hidden rounded-2xl border border-indigo-400/20 bg-[#0b1221]">
              <img
                src="/images/profile.jpg"
                alt="Abhilash Pg - AI/ML Engineer"
                className="h-[480px] w-full object-cover object-top sm:h-[540px]"
                onError={(event) => {
                  event.currentTarget.alt =
                    'Photo not found. Check public/images/profile.jpg'
                }}
              />
            </div>

            <div className="px-3 pb-3 pt-5 text-center">
              <h3 className="text-xl font-bold">
                Abhilash Pg
              </h3>

              <p className="mt-2 text-indigo-300">
                AI/ML Engineer
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Learning. Building. Improving.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-white/10 bg-white/[0.02] px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="About Me"
              title="Curious mind. Practical builder."
              description="I am developing my knowledge of artificial intelligence, machine learning, and application development through hands-on projects and continuous learning."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: 'AI & Machine Learning',
                  text: 'Exploring intelligent applications and practical AI solutions.',
                },
                {
                  title: 'Software Development',
                  text: 'Building web applications and learning modern development tools.',
                },
                {
                  title: 'Continuous Learning',
                  text: 'Improving technical skills through study and project work.',
                },
              ].map((item) => (
                <article key={item.title} className={cardClass}>
                  <h3 className="text-lg font-semibold text-indigo-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mx-auto max-w-7xl px-6 py-20"
        >
          <SectionHeading
            label="My Toolkit"
            title="Skills & Technologies"
            description="Technologies associated with my projects and learning."
          />

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-slate-300 transition hover:border-indigo-400/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-y border-white/10 bg-white/[0.02] px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="My Work"
              title="Featured Projects"
              description="Selected projects to showcase. Add your actual repository links and live demos when available."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`${cardClass} hover:-translate-y-1`}
                >
                  <p className="text-sm text-indigo-400">
                    PROJECT 0{index + 1}
                  </p>

                  <h3 className="mt-5 text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 min-h-20 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-indigo-400/10 px-2 py-1 text-xs text-indigo-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section
          id="certificates"
          className="mx-auto max-w-7xl px-6 py-20"
        >
          <SectionHeading
            label="Achievements"
            title="Certificates & Credentials"
            description="View or download certificates. Replace sample details and files with your actual certificates."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b101c] transition hover:border-indigo-400/40"
              >
                <div className="flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-[#0e1627]">
                  {certificate.type === 'image' ? (
                    <img
                      src={certificate.file}
                      alt={certificate.title}
                      className="h-full w-full object-contain p-3"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-5xl text-indigo-300">
                        PDF
                      </div>
                      <p className="mt-3 text-sm text-slate-400">
                        Certificate document
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm text-indigo-300">
                    {certificate.issuer}
                  </p>

                  <p className="mt-3 min-h-14 leading-7 text-slate-400">
                    {certificate.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold transition hover:bg-indigo-500"
                    >
                      View Certificate ↗
                    </a>

                    <a
                      href={certificate.file}
                      download
                      className="rounded-lg border border-white/15 px-4 py-2 text-sm transition hover:bg-white/5"
                    >
                      Download ↓
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="border-y border-white/10 bg-white/[0.02] px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Academic Background"
              title="Education"
              description="Add your verified academic details."
            />

            <article className={cardClass}>
              <h3 className="text-xl font-semibold">
                Engineering — Artificial Intelligence and Machine Learning
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Final-year engineering student.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Add your college name, study period, and graduation year.
              </p>
            </article>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-auto max-w-7xl px-6 py-20"
        >
          <SectionHeading
            label="Professional Journey"
            title="Experience"
            description="Internship and practical project experience."
          />

          <article className={cardClass}>
            <h3 className="text-xl font-semibold">
              MainCrafts — Full Stack Web Development Internship
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Internship project work includes responsive web interfaces
              and modern frontend technologies.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Add your official internship dates and verified responsibilities.
            </p>
          </article>
        </section>

        {/* Resume */}
        <section
          id="resume"
          className="border-y border-white/10 bg-white/[0.02] px-6 py-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="My Resume"
              title="Explore My Professional Profile"
              description="View or download my resume."
            />

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-500"
              >
                View My Resume ↗
              </a>

              <a
                href="/resume/resume.pdf"
                download="Abhilash-Pg-Resume.pdf"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/5"
              >
                Download Resume ↓
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="px-6 py-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="Get In Touch"
              title="Let's Connect"
              description="Connect with me about AI, machine learning, software development, and professional opportunities."
            />

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-500"
              >
                LinkedIn ↗
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/5"
              >
                GitHub ↗
              </a>
            </div>

            <p className="mt-12 text-sm text-slate-500">
              © 2026 Abhilash Pg · React Portfolio
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
