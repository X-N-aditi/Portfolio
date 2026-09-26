export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-left">
                © {new Date().getFullYear()} Aditi Shukla.
                All rights reserved.
            </div>

            <a href="#home" className="back-to-top">
                Back to top ↑
            </a>

        </footer>
    );
}