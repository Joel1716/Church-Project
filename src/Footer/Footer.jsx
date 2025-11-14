import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About */}
        <div className="footer-section">
          <img
            src="RCCG-Goshen.png"
            alt="RCCG Goshen Logo"
            className="footer-logo"
          />
          <p>
            The Redeemed Christian Church of God (RCCG) Goshen, a place where
            faith is strengthened, lives are changed, and God’s presence is
            real.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Groups</a>
            </li>
            <li>
              <a href="#">Sermons</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Visit / Contact */}
        <div className="footer-section contact">
          <h4>Visit Us</h4>
          <p>Goshen Parish, Redemption Road, Lagos, Nigeria</p>
          <p>📞 +234 812 345 6789</p>
          <p>📧 info@rccggoshen.org</p>

          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 RCCG Goshen. All rights reserved.</p>
      </div>
    </footer>
  );
}
