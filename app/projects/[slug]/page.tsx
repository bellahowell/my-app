"use client";

import Link from "next/link";

export default function ProjectPage() {

  return (
    <main className="page">

      {/* PROFILE BUTTON (TOP LEFT) */}
      <a href="/" className="profileButton">
        <div className="profileContent">
          <img src="/profile.JPG" alt="profile" className="profileImage" />
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
          <a href="#contact">Connect</a>
          <Link href="/about">About</Link>
          <a href="/resume">Resume</a>
        </div>
      </nav>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f7f4ef;
          font-family: Arial, sans-serif;
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
          z-index: 10;
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

        .profileContent { opacity: 1; transform: translateY(0); }
        .hoverContent   { opacity: 0; transform: translateY(20px); }

        .profileButton:hover .profileContent { opacity: 0; transform: translateY(-20px); }
        .profileButton:hover .hoverContent   { opacity: 1; transform: translateY(0); }

        .profileImage {
          width: 58px;
          height: 58px;
          border-radius: 999px;
          object-fit: cover;
        }

        .profileText { margin-left: 18px; }
        .profileText h3 { font-size: 20px; font-weight: 600; font-family: var(--font-mono); }
        .profileText p  { font-size: 16px; color: #999; margin-top: 2px; font-family: var(--font-mono); }

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

        .hoverText { margin-left: 18px; }
        .hoverText span { font-size: 20px; }
        .hoverText p    { font-size: 16px; color: #999; margin-top: 2px; }

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

        .pillNav a {
          text-decoration: none;
          color: #111;
          font-size: 16px;
          font-weight: 500;
          position: relative;
          transition: opacity 0.25s ease;
        }

        .pillNav a:hover { opacity: 0.6; }

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

        .pillNav a:hover::after { width: 100%; }
      `}</style>
    </main>
  );
}
