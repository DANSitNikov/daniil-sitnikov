import "./App.css";
// let's test yaml
const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Next.js",
  "Material UI",
  "Tailwind CSS",
  "Redux",
  "TanStack Query",
  "Zustand",
  "Context API",
  "React Testing Library",
  "Cypress",
  "Jest",
  "Vite",
  "Rollup",
  "Storybook",
  "Git",
  "CI/CD",
  "REST APIs",
  "Jira",
  "Atomic Design",
  "Responsive Design",
  "Figma",
  "ESLint",
  "Prettier",
];

const experience = [
  {
    company: "IronFX",
    period: "2023 - 2026",
    location: "Remote",
    description:
      "IronFX is an international online trading platform serving retail and institutional clients.",
    responsibilities: [
      "Improved and maintained existing web platforms by delivering feature updates, troubleshooting production issues, and optimizing performance.",
      "Implemented and maintained complex admin panel UIs used daily by internal teams and business users.",
      "Collaborated closely with backend developers to integrate REST APIs across multiple frontend modules.",
      "Mentored junior frontend developers, supporting onboarding, code quality, and professional growth.",
      "Participated in code reviews and team discussions, contributing to shared coding standards and frontend quality.",
    ],
  },
  {
    company: "DevopsToday",
    period: "2021 - 2023",
    location: "Remote",
    description:
      "DevopsToday is a web development company delivering custom web and mobile solutions for international clients.",
    responsibilities: [
      "Developed frontend solutions for multiple international client projects.",
      "Communicated directly with clients to clarify requirements and support effective project delivery.",
      "Built applications from scratch, improved the performance of existing projects, and refactored frontend code following best practices.",
      "Developed a reusable, component-based UI kit in close collaboration with designers.",
      "Mentored new team members during onboarding and team integration.",
      "Implemented end-to-end (E2E) tests to ensure application stability and validate critical user flows.",
    ],
  },
];

function App() {
  console.log("check deploy");
  return (
    <main className="cv-page">
      hello
      <header className="hero">
        <h1>Daniil Sitnikov</h1>
        <p className="hero__role">Frontend Engineer</p>
        <p className="hero__contacts">
          <span>Yerevan, Armenia</span>
          <span>/</span>
          <a href="tel:+37455792740">Tel.: +37455792740</a>
          <span>/</span>
          <a href="mailto:sitnikovdan13@gmail.com">
            Email: sitnikovdan13@gmail.com
          </a>
          <span>/</span>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </p>
      </header>
      <section className="cv-section">
        <p className="lead">
          <strong>Summary:</strong> Frontend Engineer with 5 years of
          experience building product-oriented web applications,
          including complex admin systems and consumer-facing apps.
          Strong hands-on experience with React and TypeScript,
          designing scalable UI architectures and collaborating with
          international teams to deliver reliable, high-quality user
          interfaces.
        </p>
      </section>
      <section className="cv-section">
        <p className="lead">
          <strong>Key skills:</strong>{" "}
          {skills.map((skill, index) => (
            <span key={skill}>
              {skill}
              {index < skills.length - 1 ? " | " : ""}
            </span>
          ))}
        </p>
      </section>
      <section className="cv-section">
        <div className="section-heading">
          <h2>Professional Experience</h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-item__header">
                <h3>
                  {item.company} <span>({item.period})</span>
                </h3>
                <p>Location: {item.location}</p>
              </div>
              <p className="experience-item__description">
                {item.description}
              </p>
              <p className="experience-item__label">
                Responsibilities:
              </p>
              <ul>
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="cv-section">
        <div className="section-heading">
          <h2>Additional Information</h2>
        </div>
        <p className="lead">
          <strong>Languages:</strong> Russian (native), English
          (upper-intermediate)
        </p>
      </section>
    </main>
  );
}

export default App;
