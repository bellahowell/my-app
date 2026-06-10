"use client";

import Link from "next/link";

export default function Home() {
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

      {/* NAV */}
      <nav className="nav">
        <div className="pillNav">
          <Link href="/about">About</Link>
          <Link href="/fun">Fun</Link>
          <a href="/resume">Resume</a>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="content">

        {/* HERO HEADING */}
        <h1>I'm Bella, a product designer who creates with intention.</h1>

        {/* BENTO GRID */}
        <div className="bento">

          {/* LEFT COLUMN */}
          <div className="bentoCol">
            <div className="cardUnit">
              <Link href="/projects/creator-platform" className="tikTokCard">
                <img src="/tiktokproductcard.png" alt="TikTok project" className="tikTokImg" />
              </Link>
              <div className="cardMeta">
                <p className="tikTokTitle">Assisting TikTok affiliates discover brands with confidence</p>
                <span className="tikTokLabel">TIKTOK ⟡ CONCEPT 2026</span>
              </div>
            </div>
            <div className="placeholderCard" style={{height: '505px'}} />
          </div>

          {/* RIGHT COLUMN */}
          <div className="bentoCol">
            <div className="placeholderCard" style={{height: '505px'}} />
            <div className="placeholderCard" style={{height: '401px'}} />
          </div>

        </div>

        {/* FOOTER */}
        <footer className="footer">
          <span>CRAFTED WITH &lt;3 AND NESPRESSO BY BELLA</span>
          <div className="socialLinks">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href="mailto:ihowell@ucsd.edu">EMAIL</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TIKTOK</a>
          </div>
        </footer>

      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #fff;
          color: #111;
          font-family: var(--font-sans, Arial, sans-serif);
        }

        /* ===== NAV ===== */
        .nav {
          position: fixed; top: 24px; left: 50%;
          transform: translateX(-50%); z-index: 10;
        }
        .pillNav {
          display: flex; align-items: center; gap: 48px;
          background: rgba(248,248,248,0.9); backdrop-filter: blur(10px);
          padding: 20px 38px; border-radius: 999px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.04);
        }
        .pillNav a, .pillNav :global(a) {
          text-decoration: none; color: #111;
          font-size: 13px; font-weight: 400;
          font-family: var(--font-mono);
          letter-spacing: 1.5px; text-transform: uppercase;
          position: relative; transition: opacity 0.25s ease;
        }
        .pillNav a:hover, .pillNav :global(a:hover) { opacity: 0.6; }
        .pillNav a::after, .pillNav :global(a::after) {
          content: ""; position: absolute; left: 0; bottom: -6px;
          width: 0%; height: 2px; background: black;
          transition: width 0.3s ease;
        }
        .pillNav a:hover::after, .pillNav :global(a:hover::after) { width: 100%; }

        /* ===== PROFILE BUTTON ===== */
        .profileButton {
          position: fixed; top: 24px; left: 24px;
          width: 320px; height: 82px;
          background: rgba(248,248,248,0.9); backdrop-filter: blur(10px);
          border-radius: 999px;
          display: flex; align-items: center;
          padding: 10px 18px; overflow: hidden;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(0,0,0,0.04);
          cursor: pointer; z-index: 10;
        }
        .profileContent, .hoverContent {
          position: absolute; inset: 0;
          display: flex; align-items: center;
          padding: 10px 18px;
          transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.22,1,0.36,1);
        }
        .profileContent { opacity: 1; transform: translateY(0); }
        .hoverContent   { opacity: 0; transform: translateY(20px); }
        .profileButton:hover .profileContent { opacity: 0; transform: translateY(-20px); }
        .profileButton:hover .hoverContent   { opacity: 1; transform: translateY(0); }
        .profileImage { width: 58px; height: 58px; border-radius: 999px; object-fit: cover; }
        .profileText { margin-left: 18px; }
        .profileText h3 { font-size: 20px; font-weight: 600; font-family: var(--font-mono); }
        .profileText p  { font-size: 16px; color: #999; margin-top: 2px; font-family: var(--font-mono); }
        .arrowCircle {
          width: 58px; height: 58px; border-radius: 999px;
          background: black; color: white;
          display: flex; align-items: center; justify-content: center;
          font-size: 36px;
        }
        .hoverText { margin-left: 18px; }
        .hoverText span { font-size: 20px; color: #111; font-family: var(--font-mono); }
        .hoverText p    { font-size: 16px; color: #999; margin-top: 2px; font-family: var(--font-mono); }

        /* ===== CONTENT ===== */
        .content {
          padding: 140px 38px 60px;
          max-width: 1440px;
          margin: 0 auto;
        }

        /* ===== HERO HEADING ===== */
        h1 {
          font-family: var(--font-garamond);
          font-size: 44px;
          font-weight: 600;
          color: #111;
          line-height: 1.2;
          margin-bottom: 32px;
          max-width: 542px;
        }

        /* ===== BENTO GRID ===== */
        .bento {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 60px;
        }
        .bentoCol {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* ===== CARD UNIT ===== */
        .cardUnit { display: flex; flex-direction: column; }
        .tikTokCard {
          display: block;
          text-decoration: none;
          overflow: hidden;
          transition: opacity 0.2s;
        }
        .tikTokCard:hover { opacity: 0.88; }
        .tikTokImg {
          display: block;
          width: 100%;
          object-fit: cover;
        }
        .cardMeta {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          padding: 10px 0 0;
        }
        .tikTokTitle {
          font-family: var(--font-garamond);
          font-size: 18px;
          font-weight: 400;
          color: #111;
          line-height: 1.3;
          margin: 0;
        }
        .tikTokLabel {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(50,64,79,0.58);
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ===== PLACEHOLDER CARDS ===== */
        .placeholderCard {
          background: #d9d9d9;
          width: 100%;
        }

        /* ===== FOOTER ===== */
        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid #e8e8e8;
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(50,64,79,0.7);
        }
        .socialLinks {
          display: flex;
          gap: 32px;
        }
        .socialLinks a {
          text-decoration: none;
          color: rgba(50,64,79,0.7);
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: opacity 0.2s;
        }
        .socialLinks a:hover { opacity: 0.5; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .profileButton { width: 240px; }
          h1 { font-size: 36px; }
        }
        @media (max-width: 640px) {
          .profileButton { display: none; }
          .content { padding: 100px 20px 48px; }
          h1 { font-size: 28px; max-width: 100%; }
          .bento { grid-template-columns: 1fr; }
          .footer { flex-direction: column; gap: 16px; align-items: flex-start; }
        }
      `}</style>
    </main>
  );
}
