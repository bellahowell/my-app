"use client";

import Link from "next/link";

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
            <h3>Bella Howell</h3>
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

      {/* NAV (TOP CENTER) */}
      <nav className="nav">
        <div className="pillNav">
          <Link href="/">Work</Link>
          <Link href="/about">About</Link>
          <a href="/resume">Resume</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="about">
        <div className="heroLeft">
          <p className="tag">UX/UI DESIGNER</p>

          <h1>
            Welcome to
            <br />
            <em className="accent">bella's</em> corner
            <br />
            of the internet.
          </h1>

          <p className="description">
            Great design solves real problems. I'm here to do that creatively,
            collaboratively, & with intent.
          </p>
        </div>

        <div className="heroRight">
          <img src="/meteoraprofilepic.JPG" alt="Isabella Howell" className="heroImage" />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="cardWrapper">
          <Link href="/projects/creator-platform" className="card">
            <div className="cardImage pink"></div>
            <div className="cardBody">
              <h2>Creator Platform</h2>
              <p className="cardDesc">Unified form filling experience introducing a Form pattern that improved 30+ customer-facing products and drove 2x adoption within 90 days.</p>
              <span className="cardDate">Sept 2024 – Till Date</span>
            </div>
          </Link>
        </div>

        <div className="cardWrapper">
          <Link href="/projects/fashion-app" className="card">
            <div className="cardImage blue"></div>
            <div className="cardBody">
              <h2>Fashion App</h2>
              <p className="cardDesc">End-to-end mobile UX for styling and outfit planning, increasing engagement by 40% through personalized recommendation flows.</p>
              <span className="cardDate">Jan 2024 – Aug 2024</span>
            </div>
          </Link>
        </div>

        <div className="cardWrapper">
          <Link href="/projects/portfolio-system" className="card">
            <div className="cardImage purple"></div>
            <div className="cardBody">
              <h2>Portfolio System</h2>
              <p className="cardDesc">A modular portfolio builder concept designed to let creatives showcase work with minimal setup and maximum visual impact.</p>
              <span className="cardDate">Sep 2023 – Dec 2023</span>
            </div>
          </Link>
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
          left: 50%;
          transform: translateX(-50%);
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

        .pillNav a, .pillNav :global(a) {
          text-decoration: none;
          color: #111;
          font-size: 13px;
          font-weight: 400;
          font-family: var(--font-mono);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          position: relative;
          transition: opacity 0.25s ease;
        }

        .pillNav a:hover, .pillNav :global(a:hover) { opacity: 0.6; }

        .pillNav a::after, .pillNav :global(a::after) {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: black;
          transition: width 0.3s ease;
        }

        .pillNav a:hover::after, .pillNav :global(a:hover::after) { width: 100%; }

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
          font-family: var(--font-mono);
        }

        .profileText p {
          font-size: 16px;
          color: #999;
          margin-top: 2px;
          font-family: var(--font-mono);
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
          display: flex;
          align-items: flex-start;
          gap: 60px;
        }

        .heroLeft {
          flex: 1;
          min-width: 0;
        }

        .heroRight {
          width: 340px;
          flex-shrink: 0;
        }

        .heroImage {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: 20px;
        }

        .tag {
          letter-spacing: 2px;
          font-size: 12px;
          margin-bottom: 24px;
          color: #666;
        }

        h1 {
          font-family: var(--font-serif);
          font-size: clamp(52px, 8vw, 100px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .accent {
          font-style: italic;
          color: #c0522a;
        }

        .description {
          margin-top: 32px;
          max-width: 480px;
          font-size: 18px;
          line-height: 1.7;
          color: #555;
        }

        /* ================= PROJECTS ================= */

        .projects {
          margin-top: 120px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .cardWrapper {
          border-radius: 20px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .cardWrapper:hover {
          transform: scale(1.015);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
        }

        .card {
          display: block;
          text-decoration: none;
          color: inherit;
          background: white;
          border-radius: 20px;
          overflow: hidden;
        }

        .cardImage {
          width: 100%;
          height: 340px;
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

        .cardBody {
          padding: 28px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        h2 {
          font-size: 22px;
          font-weight: 600;
          margin: 0;
        }

        .cardDesc {
          font-size: 15px;
          line-height: 1.65;
          color: #444;
          margin: 0;
        }

        .cardDate {
          display: block;
          margin-top: 8px;
          font-size: 14px;
          color: #999;
        }
      `}</style>
    </main>
  );
}