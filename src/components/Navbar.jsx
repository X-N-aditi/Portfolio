import resume from "../assets/Resume.pdf";

export default function Navbar() {
    return (
        <header className="navbar">
            <a href="#home" className="navbar-logo">
                Aditi Shukla
            </a>

            <nav className="navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>

            <a href={resume} className="resume-btn" download>
                Download Resume
            </a>
        </header>
    );
}