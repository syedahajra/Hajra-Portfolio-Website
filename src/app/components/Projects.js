const projects = [
  {
    title: "Facial Recognition System",
    description: "Final year project using Django, Next.js, and PostgreSQL. Implemented face detection, user access control, and live camera feed integration.",
  },
  {
    title: "Sentiment Analysis App",
    description: "Built with Next.js, Prisma, and OpenAI API. Allows users to log moods, journal entries, and get personalized insights.",
  },
  {
    title: "Academic Statement Generator",
    description: "Python Flask app that generates academic statements using custom input and formatting templates.",
  },
];

export default function ProjectsSection() {
  return (
    <section style={{ padding: "4rem", background: "#1e1e2f", color: "white" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: "bold" }}>
        Projects
      </h2>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{project.title}</h3>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>{project.description}</p>
        </div>
      ))}
    </section>
  );
}
