import resume from "../assets/Resume.pdf";

const experiences = [
    {
        company: "Mechlar Technology",
        role: "Full Stack Developer",
        period: "Apr 2026 – Present",
        location: "Lucknow",
        points: [
            "Developed Founders Brew Versions using React, Vite, Node.js, Express.js, Prisma and PostgreSQL.",
            "Worked across frontend, backend, database, authentication and email workflows.",
            "Built a complete Employee Management System using WordPress, PHP and MySQL.",
            "Developed HR and employee modules including leave, holidays, WFH, notifications, chat and offer letters.",
        ],
    },
    {
        company: "ProdcomTech Pvt Ltd",
        role: "Java Full Stack Developer",
        period: "Jan 2026 – Mar 2026",
        location: "Jhansi",
        points: [
            "Worked on Bizkarm using Java, Spring Boot Microservices, Spring Security, Hibernate, MySQL, Angular and TypeScript.",
            "Developed and maintained REST APIs across 9+ Spring Boot microservices.",
            "Worked with Spring Cloud, Eureka Service Discovery and API Gateway.",
            "Resolved backend, database, API integration and Angular UI issues.",
        ],
    },
];

export default function Experience() {
    return (
        <section className="experience section" id="experience">

            <div className="experience-intro">

                <p className="section-label">
                    WORK EXPERIENCE
                </p>

                <h2>
                    My Journey
                </h2>

                <p>
                    Building real-world applications, solving complex
                    problems and continuously growing as a developer.
                </p>

                <a href={resume} className="dark-btn" download>
                    View Resume ↓
                </a>

            </div>

            <div className="experience-timeline">

                {experiences.map((experience, index) => (
                    <article
                        className="experience-item"
                        key={experience.company}
                    >

                        <div className="timeline-marker">
                            0{index + 1}
                        </div>

                        <div className="experience-details">

                            <div className="experience-top">

                                <div>
                                    <h3>
                                        {experience.company}
                                    </h3>

                                    <p className="experience-role">
                                        {experience.role}
                                    </p>
                                </div>

                                <div className="experience-meta">
                                    <span>
                                        {experience.period}
                                    </span>

                                    <span>
                                        {experience.location}
                                    </span>
                                </div>

                            </div>

                            <ul>
                                {experience.points.map((point) => (
                                    <li key={point}>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}