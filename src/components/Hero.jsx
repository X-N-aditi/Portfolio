import profileImage from "../assets/Port-profile.png";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <p className="hero-label">
                    FULL STACK DEVELOPER
                </p>

                <h1>
                    Aditi
                    <br />
                    Shukla
                </h1>

                <p className="hero-role">
                    Java Full Stack Developer
                    <span>|</span>
                    Full Stack Developer
                </p>

                <p className="hero-description">
                    I build scalable web applications using Java, Spring Boot,
                    React, Express, PHP, WordPress, Angular, and modern backend technologies.
                </p>

                <div className="hero-actions">

                    <a href="#projects" className="hero-primary-btn">
                        View My Projects
                    </a>

                    <a href="#contact" className="hero-secondary-btn">
                        Contact Me
                    </a>

                </div>

            </div>

            <div className="hero-image-wrapper">

                <div className="hero-image-bg"></div>

                <img
                    src={profileImage}
                    alt="Aditi Shukla"
                    className="hero-image"
                />

                <div className="hero-image-bg-2"></div>

            </div>

        </section>
    );
}