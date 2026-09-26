import foundersBrewImage from "../assets/FoundersBrew.png";
import ems from "../assets/EMS.png";
import bizkarm from "../assets/Bizkarm.png";
import imgConv from "../assets/img-convertor.png";

const projects = [
    {
        id: 1,
        title: "Employee Management System",
        description:
            "Multi-company employee management platform with HR and employee dashboards, leave management, notifications, chat, payroll and offer-letter workflows.",
        technologies: ["WordPress", "PHP", "MySQL"],
        image: ems,
    },
    {
        id: 2,
        title: "Founders Brew",
        description:
            "Full-stack startup networking platform with authentication, dashboards, REST APIs, database workflows and responsive interfaces.",
        technologies: ["React", "Node.js", "PostgreSQL"],
        image: foundersBrewImage,
    },
    {
        id: 3,
        title: "Bizkarm",
        description:
            "B2B project , Connect Business Vendors to customers, customers can get coupens, book services, chat with business vendors",
        technologies: ["Java", "Spring-Boot", "MySQL", "Angular"],
        image: bizkarm,
    },
    {
        id: 4,
        title: "Image Converter",
        description:
            "Image conversion and resizing application supporting common image formats with a simple user interface.",
        technologies: ["Python", "PIL", "JavaScript"],
        image: imgConv,
    },
];

export default function Projects() {
    return (
        <section className="projects section-dark" id="projects">

            <div className="projects-header">

                <div>
                    <p className="section-label">
                        SELECTED PROJECTS
                    </p>

                    <h2>
                        My Works
                    </h2>
                </div>

                <a href="#contact" className="view-all">
                    Let's Work Together →
                </a>

            </div>

            <div className="projects-grid">

                {projects.map((project) => (
                    <article className="project-card" key={project.id}>

                        <div className="project-image">

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                        </div>

                        <div className="project-content">

                            <h3>
                                {project.title}
                            </h3>

                            <p>
                                {project.description}
                            </p>

                            <div className="project-footer">

                                <div className="technology-list">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}