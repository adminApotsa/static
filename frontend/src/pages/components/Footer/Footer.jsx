// Footer Component
export default function Footer() {
  return (
    <footer className="footer">
      <h3>Apotsa</h3>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#team">Team</a>
        <a href="#privacy">Privacy</a>
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/company/apotsa/">in</a>
        <a href="https://x.com/apotsa_hq">𝕏</a>
        <a href="https://instagram.com/apotsa_hq">ig</a>
      </div>
      <div className="footer-bottom">
        <span>©2025 Apotsa, all rights reserved.</span>
        <div>
          <a href="#terms">Terms</a> · <a href="#privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
};
