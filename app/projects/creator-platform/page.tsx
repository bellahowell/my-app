"use client";

import Link from "next/link";

export default function CreatorPlatform() {
  return (
    <main className="page">

      {/* PROFILE BUTTON (TOP LEFT) */}
      <a href="/" className="profileButton">
        <div className="profileContent">
          <img src="/profile.JPG" alt="profile" className="profileImage" />
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

      {/* NAV (TOP CENTER) */}
      <nav className="nav">
        <div className="pillNav">
          <a href="#contact">Connect</a>
          <Link href="/about">About</Link>
          <a href="/resume">Resume</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="heroInner">
          <p className="heroLabel">UX / Product Design</p>
          <h1>Assisting TikTok Affiliates Discover Brands with Confidence</h1>
          <div className="heroMockup">
            {/* swap in your hero image here */}
          </div>
        </div>
      </section>

      <div className="container">

        {/* STATS */}
        <div className="stats">
          <div className="stat">
            <span className="statNum">3.2M+</span>
            <span className="statLabel">Active TikTok affiliates</span>
          </div>
          <div className="stat">
            <span className="statNum">68%</span>
            <span className="statLabel">Report difficulty vetting brands</span>
          </div>
          <div className="stat">
            <span className="statNum">#1</span>
            <span className="statLabel">Pain point: lack of brand trust signals</span>
          </div>
        </div>

        <hr className="divider" />

        {/* CONTEXT */}
        <p className="intro">
          Social commerce and affiliate marketing have rapidly become one of the
          largest and fastest-growing sectors of the creator economy. TikTok Shop
          alone has driven billions in GMV, yet the tools for affiliates to evaluate
          brand partnerships remain underdeveloped.
        </p>

        <hr className="divider" />

        {/* PROBLEM */}
        <section className="textSection">
          <h2>Affiliate creators struggle to identify trustworthy partnerships.</h2>
          <p>
            Without reliable signals — reviews, response rates, payout history —
            affiliates are left guessing. Bad experiences with brands damage their
            audience trust and their income. There's no built-in way to filter
            or evaluate within TikTok's existing surfaces.
          </p>
        </section>

        <hr className="divider" />

        {/* SOLUTION */}
        <section className="textSection">
          <h2>A trust-centered review system built directly into TikTok Shop & messages.</h2>
        </section>

        <hr className="divider" />

        {/* MOCKUP 1 */}
        <div className="mockupRow">
          <div className="mockupPhone">
            {/* swap in screenshot 1 */}
          </div>
          <div className="mockupText">
            <h3>Added 'rate this affiliate rep' in the product listing</h3>
            <p>
              Surfacing a rating prompt directly on the product page gives
              affiliates the social proof they need at the exact moment of
              decision — before accepting a brand collaboration.
            </p>
          </div>
        </div>

        {/* MOCKUP 2 */}
        <div className="mockupRow">
          <div className="mockupPhone">
            {/* swap in screenshot 2 */}
          </div>
          <div className="mockupText">
            <h3>Filtering in-app messages</h3>
            <p>
              Allowing affiliates to filter brand outreach by trust score and
              review count means less time wading through spam and more time
              finding partnerships worth pursuing.
            </p>
          </div>
        </div>

        {/* MOCKUP 3 */}
        <div className="mockupRow">
          <div className="mockupPhone">
            {/* swap in screenshot 3 */}
          </div>
          <div className="mockupText">
            <h3>Filtering in-app messages</h3>
            <p>
              A second pass at filtering surfaces verified and highly-rated
              brands at the top, reducing cognitive load and building
              confidence before any commitment is made.
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #fff;
          font-family: var(--font-sans, Arial, sans-serif);
          color: #111;
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
        .profileText h3 { font-size: 20px; font-weight: 600; }
        .profileText p  { font-size: 16px; color: #999; margin-top: 2px; }

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

        /* ================= HERO ================= */

        .hero {
          background: #2c1f18;
          padding: 160px 40px 0;
          margin-bottom: 64px;
        }

        .heroInner {
          max-width: 800px;
          margin: 0 auto;
        }

        .heroLabel {
          font-size: 13px;
          letter-spacing: 2px;
          color: #a08070;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        h1 {
          font-family: var(--font-serif);
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 48px;
          max-width: 640px;
        }

        .heroMockup {
          width: 100%;
          height: 320px;
          background: rgba(255,255,255,0.05);
          border-radius: 16px 16px 0 0;
          border: 1px dashed rgba(255,255,255,0.15);
        }

        /* ================= CONTAINER ================= */

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 40px 120px;
        }

        /* ================= STATS ================= */

        .stats {
          display: flex;
          gap: 48px;
          padding: 8px 0 40px;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .statNum {
          font-size: 28px;
          font-weight: 700;
          color: #111;
        }

        .statLabel {
          font-size: 13px;
          color: #888;
          max-width: 160px;
          line-height: 1.4;
        }

        /* ================= DIVIDER ================= */

        .divider {
          border: none;
          border-top: 1px solid #e8e8e8;
          margin: 40px 0;
        }

        /* ================= TEXT SECTIONS ================= */

        .intro {
          font-size: 17px;
          line-height: 1.8;
          color: #444;
        }

        .textSection h2 {
          font-family: var(--font-serif);
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 16px;
          color: #111;
        }

        .textSection p {
          font-size: 16px;
          line-height: 1.8;
          color: #555;
        }

        /* ================= MOCKUP ROWS ================= */

        .mockupRow {
          display: flex;
          align-items: center;
          gap: 48px;
          margin-bottom: 64px;
        }

        .mockupPhone {
          width: 220px;
          flex-shrink: 0;
          height: 420px;
          background: #f2f0ed;
          border-radius: 28px;
          border: 1px dashed #ccc;
        }

        .mockupText h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          line-height: 1.3;
          color: #111;
        }

        .mockupText p {
          font-size: 15px;
          line-height: 1.75;
          color: #666;
        }
      `}</style>
    </main>
  );
}
