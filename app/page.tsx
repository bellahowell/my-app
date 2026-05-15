"use client";

export default function Home() {
  return (
    <main className="page">
      {/* PROFILE BUTTON (TOP LEFT) */}
      <a href="/" className="profileButton">
        <div className="profileContent">
          <img
            src="/profile.JPG"
            alt="profile"
            className="profileImage"
          />

          <div className="profileText">
            <h3>Isabella Howell</h3>
            <p>San Diego, CA</p>
          </div>
        </div>

        <div className="hoverContent">
          <div className="arrowCircle">←</div>

          <div className="hoverText">
            <span>Go back to</span>
            <p>Homepage</p>
          </div>
        </div>
      </a>

      {/* NAV (TOP RIGHT) */}
      <nav className="nav">
        <div className="pillNav">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="about">
        <p className="tag">UX/UI DESIGNER</p>

        <h1>
          Welcome to
          <br />
          bella's corner
          <br />
          of the internet.
        </h1>

        <p className="description">
          Great design solves real problems. I'm here to do that creatively,
          collaboratively, & with intent.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="card">
          <div className="image pink"></div>
          <h2>Creator Platform</h2>
          <p>Product design / Branding</p>
        </div>

        <div className="card">
          <div className="image blue"></div>
          <h2>Fashion App</h2>
          <p>Mobile UX / Interface</p>
        </div>

        <div className="card">
          <div className="image purple"></div>
          <h2>Portfolio System</h2>
          <p>Creative Development</p>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 40px 60px 80px;
          background: #f7f4ef;
          color: #111;
          font-family: Arial, sans-serif;
        }

        /* ================= NAV ================= */

        .nav {
          position: fixed;
          top: 24px;
          right: 24px;
          z-index: 10;
        }

        .pillNav {
          display: flex;
          align-items: center;
          gap: 48px;

          background: rgba(248, 248, 248, 0.9);
          backdrop-filter: blur(10px);

          padding: 20px 38px;
          border-radius: 999px;

          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
        }

        .pillNav a {
          text-decoration: none;
          color: #111;
          font-size: 16px;
          font-weight: 500;
          position: relative;
          transition: opacity 0.25s ease;
        }

        .pillNav a:hover {
          opacity: 0.6;
        }

        .pillNav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: black;
          transition: width 0.3s ease;
        }

        .pillNav a:hover::after {
          width: 100%;
        }

        /* ================= PROFILE BUTTON ================= */

        .profileButton {
          position: fixed;
          top: 24px;
          left: 24px;

          width: 320px;
          height: 82px;

          background: rgba(248, 248, 248, 0.9);
          backdrop-filter: blur(10px);

          border-radius: 999px;

          display: flex;
          align-items: center;

          padding: 10px 18px;

          overflow: hidden;
          text-decoration: none;

          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);

          cursor: pointer;
        }

        .profileContent,
        .hoverContent {
          position: absolute;
          inset: 0;

          display: flex;
          align-items: center;

          padding: 10px 18px;

          transition: opacity 0.35s ease,
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .profileContent {
          opacity: 1;
          transform: translateY(0);
        }

        .hoverContent {
          opacity: 0;
          transform: translateY(20px);
        }

        .profileButton:hover .profileContent {
          opacity: 0;
          transform: translateY(-20px);
        }

        .profileButton:hover .hoverContent {
          opacity: 1;
          transform: translateY(0);
        }

        .profileImage {
          width: 58px;
          height: 58px;
          border-radius: 999px;
          object-fit: cover;
        }

        .profileText {
          margin-left: 18px;
        }

        .profileText h3 {
          font-size: 20px;
          font-weight: 600;
        }

        .profileText p {
          font-size: 16px;
          color: #999;
          margin-top: 2px;
        }

        .arrowCircle {
          width: 58px;
          height: 58px;

          border-radius: 999px;
          background: black;
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 36px;
        }

        .hoverText {
          margin-left: 18px;
        }

        .hoverText span {
          font-size: 20px;
        }

        .hoverText p {
          font-size: 16px;
          color: #999;
          margin-top: 2px;
        }

        /* ================= HERO ================= */

        .hero {
          margin-top: 120px;
          max-width: 900px;
        }

        .tag {
          letter-spacing: 2px;
          font-size: 12px;
          margin-bottom: 24px;
          color: #666;
        }

        h1 {
          font-size: clamp(60px, 10vw, 120px);
          line-height: 0.95;
          font-weight: 600;
          letter-spacing: -4px;
        }

        .description {
          margin-top: 32px;
          max-width: 520px;
          font-size: 18px;
          line-height: 1.7;
          color: #555;
        }

        /* ================= PROJECTS ================= */

        .projects {
          margin-top: 120px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        .card {
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .card:hover {
          transform: translateY(-14px);
        }

        .image {
          height: 360px;
          border-radius: 28px;
          margin-bottom: 18px;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .card:hover .image {
          transform: scale(1.03);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.15);
        }

        .pink {
          background: linear-gradient(135deg, #ffd6e7, #ffe8cc);
        }

        .blue {
          background: linear-gradient(135deg, #d9e8ff, #e8f5ff);
        }

        .purple {
          background: linear-gradient(135deg, #e6dcff, #f3e8ff);
        }

        h2 {
          font-size: 24px;
          margin-bottom: 6px;
        }

        .card p {
          color: #666;
        }
      `}</style>
    </main>
  );
}