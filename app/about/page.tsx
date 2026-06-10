"use client";

import Link from "next/link";

export default function About() {
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
          <Link href="/about">About</Link>
          <Link href="/fun">Fun</Link>
          <a href="/resume">Resume</a>
        </div>
      </nav>

      <div className="bento">

        {/* MY STORY */}
        <div className="card storyCard">
          <h2>My story</h2>
          <p>
            When I transitioned from computer science to design and interaction,
            people often asked <strong>how I knew it was the right move</strong>.
          </p>
          <p>
            Looking back, <strong>the signs were always there</strong>. I've
            always been drawn to creating — from designing homemade cards for
            birthdays and holidays to helping loved ones shape their spaces into
            places that feel intentional and personal.
          </p>
          <p>
            I always felt out of place until everything fell into place.{" "}
            <strong>I was designing long before I claimed the title.</strong>
          </p>
        </div>

        {/* PORTRAIT */}
        <div className="photoCard">
          <img src="/meteoraprofilepic.JPG" alt="Isabella Howell" className="portrait" />
        </div>

        {/* SKILLS + TOOLS */}
        <div className="rightTop">
          <div className="card skillsCard">
            <p className="eyebrow">the good stuff...</p>
            <h2 className="skillsHeading">my skills</h2>
            <div className="tagCloud">
              {["Interaction Design", "User Research", "Problem Solving",
                "Visual & UI Design", "Storytelling", "Collaboration",
                "Usability Testing", "Data Analysis"].map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="card toolsCard">
            <h3 className="toolsHeading">tools I live in</h3>
            <div className="toolGrid">
              {["Figma", "Framer", "Claude", "Google", "Pinterest", "ChatGPT", "Dribbble", "Spotify"].map((t) => (
                <div key={t} className="toolChip">{t}</div>
              ))}
            </div>
          </div>
        </div>

        {/* TRAVEL */}
        <div className="card travelCard">
          <h3 className="sectionHeading">I love to travel</h3>
          <img src="/profile.JPG" alt="Traveling" className="travelImg" />
        </div>

        {/* NOW + FACTS */}
        <div className="rightBottom">
          <div className="card nowCard">
            <h3 className="sectionHeading">What am I doing right now?</h3>
            <ul className="simpleList">
              <li>Planning my best friend's bachelorette</li>
              <li>Watching the new season of <em>Bridgerton</em></li>
              <li>Listening to SoulGum & Inner Worlds</li>
              <li>Looking forward to summer</li>
            </ul>
          </div>

          <div className="card factsCard">
            <h3 className="sectionHeading">Fun facts:</h3>
            <ul className="simpleList">
              <li>Played piano for 20 years!</li>
              <li>Work as a server!</li>
              <li>Traveled to 10 countries!</li>
              <li>Cat & dog mom!</li>
            </ul>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footerContact">
          <p className="footerLabel">Contact</p>
          <a href="mailto:isabellahowell16@gmail.com" className="footerLink">isabellahowell16@gmail.com</a>
          <a href="#" className="footerLink">linkedin</a>
        </div>
        <a href="#" className="backToTop">Back to top ↑</a>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f0ece6;
          padding: 130px 32px 32px;
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

        /* ================= BENTO GRID ================= */

        .bento {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas:
            "story photo right-top"
            "travel travel right-bottom";
          gap: 16px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .storyCard   { grid-area: story; }
        .photoCard   { grid-area: photo; border-radius: 16px; overflow: hidden; min-height: 420px; }
        .rightTop    { grid-area: right-top; display: flex; flex-direction: column; gap: 16px; }
        .travelCard  { grid-area: travel; }
        .rightBottom { grid-area: right-bottom; display: flex; flex-direction: column; gap: 16px; }

        /* ================= CARDS ================= */

        .card {
          background: white;
          border-radius: 16px;
          padding: 28px;
        }

        /* ================= STORY ================= */

        h2 {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .storyCard p {
          font-size: 14px;
          line-height: 1.75;
          color: #333;
          margin-bottom: 12px;
        }

        .storyCard p:last-child { margin-bottom: 0; }

        /* ================= PORTRAIT ================= */

        .portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        /* ================= SKILLS ================= */

        .eyebrow {
          font-size: 13px;
          color: #999;
          margin-bottom: 2px;
        }

        .skillsHeading {
          font-family: var(--font-serif);
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .tagCloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pill {
          font-size: 13px;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1px solid #ddd;
          background: #f7f4ef;
          color: #333;
        }

        /* ================= TOOLS ================= */

        .toolsHeading {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 14px;
          color: #222;
        }

        .toolGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .toolChip {
          background: #f7f4ef;
          border-radius: 12px;
          padding: 12px 6px;
          font-size: 11px;
          font-weight: 500;
          text-align: center;
          color: #444;
        }

        /* ================= SHARED ================= */

        .sectionHeading {
          font-size: 15px;
          font-weight: 600;
          color: #222;
          margin-bottom: 14px;
        }

        /* ================= TRAVEL ================= */

        .travelImg {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 10px;
        }

        /* ================= NOW + FACTS ================= */

        .simpleList {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .simpleList li {
          font-size: 13px;
          color: #444;
          line-height: 1.5;
        }

        /* ================= FOOTER ================= */

        .footer {
          max-width: 1100px;
          margin: 24px auto 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 24px 0;
          border-top: 1px solid #ddd;
        }

        .footerLabel {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .footerLink {
          display: block;
          font-size: 13px;
          color: #555;
          text-decoration: none;
          margin-bottom: 4px;
        }

        .footerLink:hover { color: #111; }

        .backToTop {
          font-size: 13px;
          color: #555;
          text-decoration: none;
        }

        .backToTop:hover { color: #111; }
      `}</style>
    </main>
  );
}
