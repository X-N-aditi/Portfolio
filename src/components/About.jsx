const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();

    let months =
        (today.getFullYear() - start.getFullYear()) * 12 +
        (today.getMonth() - start.getMonth());

    // If the current month's day hasn't reached the joining day yet
    if (today.getDate() < start.getDate()) {
        months--;
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    // Less than 1 year
    if (years === 0) {
        return `${months}+ Months`;
    }

    // Exact number of years
    if (remainingMonths === 0) {
        return `${years}+ ${years === 1 ? "Year" : "Years"}`;
    }

    // Years + remaining months
    return `${years} Year${years > 1 ? "s" : ""} ${remainingMonths} Month${remainingMonths > 1 ? "s" : ""}`;
};


export default function About() {

    const experienceStartDate = "2026-01-01";

    const experience = calculateExperience(experienceStartDate);


    return (
        <section className="about section" id="about">

            <div className="about-image-wrapper">

                <div className="about-blue-block"></div>

                <div className="about-image">
                    <div className="about-image-placeholder">
                        <span>ABOUT</span>
                    </div>
                </div>

            </div>


            {/* =========================
                ABOUT CONTENT
            ========================= */}

            <div className="about-content">

                <p className="section-label">
                    ABOUT ME
                </p>

                <h2>
                    Turning Ideas
                    <br />
                    Into Scalable
                    <br />
                    Solutions
                </h2>

                <p>
                    I'm a Full Stack Developer with {experience} of
                    professional experience building web applications using
                    Java, Spring Boot, React, Angular, Node.js, PHP, and
                    WordPress.
                </p>

                <p>
                    I enjoy working across frontend, backend, databases,
                    authentication, APIs, and real-world business
                    applications.
                </p>

                <a href="#experience" className="text-link">
                    Know More <span>→</span>
                </a>

            </div>


            {/* =========================
                ABOUT INFORMATION
            ========================= */}

            <div className="about-info">

                {/* EDUCATION */}

                <div className="info-item">

                    <span className="info-number">
                        01
                    </span>

                    <div>

                        <h4>
                            Education
                        </h4>

                        <p>
                            B.Tech in Computer Science & Engineering
                        </p>

                        <small>
                            2022 – 2025
                        </small>

                    </div>

                </div>


                {/* EXPERIENCE */}

                <div className="info-item">

                    <span className="info-number">
                        02
                    </span>

                    <div>

                        <h4>
                            Experience
                        </h4>

                        <p>
                            {experience} Professional Experience
                        </p>

                    </div>

                </div>


                {/* LOCATION */}

                <div className="info-item">

                    <span className="info-number">
                        03
                    </span>

                    <div>

                        <h4>
                            Based In
                        </h4>

                        <p>
                            Lucknow, India
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}
