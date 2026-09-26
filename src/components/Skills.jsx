const skillGroups = [
    {
        title: "Languages",
        skills: [
            "Java",
            "JavaScript",
            "TypeScript",
            "Python",
            "PHP",
            "SQL",
        ],
    },
    {
        title: "Frontend",
        skills: [
            "React.js",
            "Angular",
            "Vite",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
        ],
    },
    {
        title: "Backend",
        skills: [
            "Spring Boot",
            "Spring Security",
            "Node.js",
            "Express.js",
            "REST APIs",
            "Microservices",
            "WordPress",
            "PHP",
        ],
    },
    {
        title: "Database",
        skills: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Prisma",
            "Hibernate",
            "JPA",
            "JDBC",
        ],
    },
    {
        title: "Cloud & Tools",
        skills: [
            "Spring Cloud",
            "Eureka",
            "API Gateway",
            "Git",
            "GitHub",
            "Docker",
            "Maven",
            "Postman",
            "VS Code",
            "IntelliJ IDEA",
        ],
    },
    {
        title: "Security",
        skills: [
            "JWT",
            "OAuth 2.0",
            "OTP",
            "RBAC",
        ],
    },
];

export default function Skills() {
    return (
        <section className="skills section" id="skills">

            <div className="skills-intro">

                <p className="section-label">
                    TECHNOLOGIES
                </p>

                <h2>
                    Skills
                    <br />
                    & Tools
                </h2>

                <p>
                    Technologies I work with to build modern
                    and scalable applications.
                </p>

            </div>

            <div className="skills-grid">

                {skillGroups.map((group) => (
                    <div className="skill-group" key={group.title}>

                        <h3>
                            {group.title}
                        </h3>

                        <div className="skill-tags">

                            {group.skills.map((skill) => (
                                <span key={skill}>
                                    {skill}
                                </span>
                            ))}

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}