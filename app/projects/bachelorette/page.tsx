"use client";

import Link from "next/link";
import { useState } from "react";

export default function BachelorettePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="page">

      {/* PROFILE BUTTON */}
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

      {/* MOBILE NAV BAR */}
      <div className="mobileNav">
        <a href="/" className="mobileNavProfile">
          <img src="/profile.JPG" alt="profile" className="mobileNavImg" />
          <div>
            <div className="mobileNavName">Bella Howell</div>
            <div className="mobileNavLocation">San Diego, CA</div>
          </div>
        </a>
        <button className="mobileMenuBtn" onClick={() => setMobileMenuOpen(v => !v)}>
          MENU ☰
        </button>
        {mobileMenuOpen && (
          <div className="mobileMenuDropdown">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/fun" onClick={() => setMobileMenuOpen(false)}>Fun</Link>
            <a href="/resume" onClick={() => setMobileMenuOpen(false)}>Resume</a>
          </div>
        )}
      </div>

      {/* DESKTOP NAV */}
      <nav className="nav">
        <div className="pillNav">
          <Link href="/about">About</Link>
          <Link href="/fun">Fun</Link>
          <a href="/resume">Resume</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="heroInner">
          <p className="heroLabel">GROUP TRAVEL ⟡ CONCEPT 2026</p>
          <h1>Helping bridesmaids plan Bachelorette trips with confidence</h1>
          <img src="/groupbachpic.JPG" alt="Bachelorette planning app" className="heroImg" />
        </div>
      </section>

      <div className="container">

        {/* META */}
        <div className="meta">
          <div className="metaItem">
            <span className="metaLabel">ROLE</span>
            <span className="metaValue">Product Designer & UX Researcher</span>
          </div>
          <div className="metaItem">
            <span className="metaLabel">TIMELINE</span>
            <span className="metaValue">1 week</span>
          </div>
          <div className="metaItem">
            <span className="metaLabel">TEAM</span>
            <span className="metaValue">Solo designer</span>
          </div>
          <div className="metaItem">
            <span className="metaLabel">TOOLS</span>
            <span className="metaValue">Figma & Goodnotes</span>
          </div>
        </div>

        {/* PROBLEM */}
        <section className="textSection">
          <span className="sectionLabel">PROBLEM</span>
          <h2>Managing accommodations, activities, budgets, and communication can overwhelm the maid of honor.</h2>
          <p>Being my best friend's maid of honor was an honor, but coordinating a destination bachelorette trip for 13 women coming from different locations revealed just how stressful and fragmented the planning process can be.</p>
        </section>

        {/* CHALLENGES & CONSTRAINTS */}
        <section className="textSection">
          <span className="sectionLabel">CHALLENGES & CONSTRAINTS</span>
          <h2>Designing for a specific user within a tight academic timeline.</h2>
          <p>This project was completed within a condensed academic timeline, requiring us to rapidly iterate on designs while incorporating feedback from multiple critique sessions. A key challenge was balancing feature exploration with refinement, as each design decision needed to directly address user needs rather than add unnecessary complexity.</p>
          <p>Throughout the project, our professor emphasized designing for a specific user, the maid of honor, rather than a broad audience. This pushed us to continually evaluate whether each screen, feature, and piece of content supported her primary goal of organizing a Bachelorette trip. We also focused on reducing unnecessary white space and removing non-essential content to ensure the interface remained concise, purposeful, and easy to navigate.</p>
        </section>

        {/* DESIGN PROCESS */}
        <section className="textSection">
          <span className="sectionLabel">DESIGN PROCESS</span>
        </section>

        {/* FIRST ITERATION */}
        <section className="textSection">
          <h2>First iteration.</h2>
        </section>

        <div className="iterationBlock">
          <span className="iterTag">INCH SCALE</span>
          <div className="phoneRow">
            <img src="/1.1.png" alt="First iteration inch scale 1" className="phoneImg" />
            <img src="/1.2.png" alt="First iteration inch scale 2" className="phoneImg" />
          </div>
        </div>

        <div className="iterationBlock">
          <span className="iterTag">YARD SCALE</span>
          <img src="/1stiteraitionyard.png" alt="First iteration yard scale overview" className="yardImg" />
        </div>

        {/* SECOND ITERATION */}
        <section className="textSection">
          <h2>Second iteration.</h2>
          <p className="subhead">Inspired by our first critique session with students & the professor.</p>
          <p>I received feedback like removing the legend from the inch scale & making it intuitive, making important content larger across both scales, and removing unnecessary features.</p>
        </section>

        <div className="iterationBlock">
          <span className="iterTag">INCH SCALE</span>
          <div className="phoneRow">
            <img src="/2.1.png" alt="Second iteration inch scale 1" className="phoneImg" />
            <img src="/2.2.png" alt="Second iteration inch scale 2" className="phoneImg" />
          </div>
        </div>

        <div className="iterationBlock">
          <span className="iterTag">YARD SCALE</span>
          <img src="/2nditerationyard.png" alt="Second iteration yard scale overview" className="yardImg" />
        </div>

        {/* THIRD ITERATION */}
        <section className="textSection">
          <h2>Third iteration.</h2>
          <p className="subhead">Inspired by more critique sessions with students & the professor.</p>
        </section>

        <div className="iterationBlock">
          <span className="iterTag">FOOT SCALE</span>
          <img src="/4thiterationfoot.png" alt="Third iteration foot scale" className="yardImg" />
        </div>

        <div className="sixGrid">
          <img src="/3.1.png" alt="Iteration 3 screen 1" className="gridImg" />
          <img src="/3.2.png" alt="Iteration 3 screen 2" className="gridImg" />
          <img src="/3.3.png" alt="Iteration 3 screen 3" className="gridImg" />
          <img src="/3.4.png" alt="Iteration 3 screen 4" className="gridImg" />
          <img src="/3.5.png" alt="Iteration 3 screen 5" className="gridImg" />
          <img src="/3.6.png" alt="Iteration 3 screen 6" className="gridImg" />
        </div>

        <div className="tvRow">
          <img src="/tv13.1.png" alt="TV screen design 1" className="tvImg" />
          <img src="/tv3.3.png" alt="TV screen design 2" className="tvImg" />
        </div>

        <div className="tvAnnotation">
          <p>I researched that a dark screen with white text is more readable, so I updated the aesthetic of the smart watch app. I added a shadow to afford pressing & 4 separate screens that can branch into other ones like the location for dinner or other events. In this iteration I wanted to add more tasks a user could use the app for.</p>
        </div>

        {/* FINAL */}
        <section className="textSection">
          <span className="iterTag">FINAL INCH SCALE</span>
          <div className="phoneRow" style={{marginTop: '20px'}}>
            <img src="/finalinch1.png" alt="Final design screen 1" className="phoneImg" />
            <img src="/finalinch2.png" alt="Final design screen 2" className="phoneImg" />
            <img src="/finalinch3.png" alt="Final design screen 3" className="phoneImg" />
          </div>
        </section>

        {/* REFLECTION */}
        <section className="textSection">
          <span className="sectionLabel">REFLECTION</span>
          <h2>What I learned.</h2>
        </section>

        <div className="reflections">
          <div className="reflection">
            <h3>Define a specific user & specific task.</h3>
            <p>This project taught me the importance of designing for a specific user rather than a broad audience. Instead of trying to solve every problem associated with Bachelorette planning, I focused on a single user (the maid of honor) and a specific task for each interface! Defining a clear user and goal helped guide my design decisions and ensured every feature addressed a real need.</p>
          </div>
          <div className="reflection">
            <h3>Intentionally use whitespace.</h3>
            <p>This project also reinforced that whitespace should be used intentionally. Rather than leaving large empty areas or filling every space with content, whitespace should help organize information, improve readability, and guide the user's attention. Effective use of whitespace made the interface feel clearer and easier to navigate without adding unnecessary clutter.</p>
          </div>
          <div className="reflection">
            <h3>No unnecessary features.</h3>
            <p>Start with the essentials rather than adding features too quickly. Instead of asking what else could be included, we focused on what users absolutely needed to accomplish their primary task. An example could be, starting with a blank screen and brainstorming immediate content the user needs for that task.</p>
          </div>
          <div className="reflection">
            <h3>Important content largest.</h3>
            <p>This project taught me the importance of visual hierarchy. Users should be able to identify the most important information at a glance, which means critical content should be larger and more visually prominent than secondary details. By prioritizing information through size, weight, and placement, we created interfaces that were easier to scan and understand.</p>
          </div>
        </div>

      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #fff;
          font-family: var(--font-sans, Arial, sans-serif);
          color: rgba(50,64,79,0.58);
        }
        .page p { color: rgba(50,64,79,0.58); }

        /* ===== PROFILE BUTTON ===== */
        .profileButton {
          position: fixed; top: 24px; left: 24px;
          width: 320px; height: 82px;
          background: rgba(248,248,248,0.9);
          backdrop-filter: blur(10px);
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
        .profileText h3 { font-size: 20px; font-weight: 600; color: #111; font-family: var(--font-mono); }
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

        /* ===== MOBILE NAV ===== */
        .mobileNav {
          display: none;
          position: fixed; top: 0; left: 0; right: 0;
          height: 64px;
          background: rgba(248,248,248,0.95);
          backdrop-filter: blur(10px);
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          z-index: 100;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .mobileNavProfile {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; color: inherit;
        }
        .mobileNavImg { width: 36px; height: 36px; border-radius: 999px; object-fit: cover; }
        .mobileNavName { font-family: var(--font-mono); font-size: 13px; font-weight: 600; color: #111; text-transform: uppercase; letter-spacing: 1px; }
        .mobileNavLocation { font-family: var(--font-mono); font-size: 11px; color: #999; }
        .mobileMenuBtn {
          font-family: var(--font-mono); font-size: 12px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          background: none; border: none; cursor: pointer; color: #111;
          padding: 8px 12px;
        }
        .mobileMenuDropdown {
          position: fixed; top: 64px; left: 0; right: 0;
          background: rgba(248,248,248,0.98);
          backdrop-filter: blur(10px);
          display: flex; flex-direction: column;
          padding: 12px 0;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          z-index: 99;
        }
        .mobileMenuDropdown a, .mobileMenuDropdown :global(a) {
          display: block; padding: 14px 24px;
          font-family: var(--font-mono); font-size: 13px;
          font-weight: 600; letter-spacing: 1.5px;
          text-transform: uppercase; color: #111;
          text-decoration: none;
        }
        .mobileMenuDropdown a:hover, .mobileMenuDropdown :global(a:hover) { background: #f5f5f5; }

        /* ===== NAV ===== */
        .nav {
          position: fixed; top: 24px; left: 50%;
          transform: translateX(-50%); z-index: 10;
        }
        .pillNav {
          display: flex; align-items: center; gap: 48px;
          background: rgba(248,248,248,0.9);
          backdrop-filter: blur(10px);
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
          content: ""; position: absolute;
          left: 0; bottom: -6px; width: 0%; height: 2px;
          background: black; transition: width 0.3s ease;
        }
        .pillNav a:hover::after, .pillNav :global(a:hover::after) { width: 100%; }

        /* ===== HERO ===== */
        .hero {
          padding-top: 140px;
          padding-bottom: 60px;
          background: #fff;
        }
        .heroInner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .heroLabel {
          font-family: var(--font-mono);
          font-size: 15px; font-weight: 400;
          letter-spacing: 0; text-transform: uppercase;
          color: rgba(50,64,79,0.58);
          margin-bottom: 20px;
        }
        .hero h1 {
          font-family: var(--font-garamond);
          font-size: 44px; font-weight: 500;
          line-height: 1.15; color: #111;
          margin-bottom: 40px;
        }
        .heroImg {
          width: 100%; max-height: 520px;
          object-fit: cover; display: block;
        }

        /* ===== CONTAINER ===== */
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 40px 80px;
        }

        /* ===== META ===== */
        .meta {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: 40px 0;
          border-top: 1px solid rgba(50,64,79,0.12);
          border-bottom: 1px solid rgba(50,64,79,0.12);
          margin-bottom: 60px;
        }
        .metaItem { display: flex; flex-direction: column; gap: 6px; }
        .metaLabel {
          font-family: var(--font-mono);
          font-size: 15px; font-weight: 400;
          color: rgba(50,64,79,0.58);
        }
        .metaValue {
          font-family: var(--font-mono);
          font-size: 15px; font-weight: 400;
          color: rgba(50,64,79,0.58); line-height: 1.5;
        }

        /* ===== TEXT SECTIONS ===== */
        .textSection { margin-bottom: 48px; }
        .sectionLabel {
          display: block;
          font-family: var(--font-mono);
          font-size: 15px; font-weight: 400;
          color: rgba(50,64,79,0.58);
          margin-bottom: 14px;
        }
        .textSection h2 {
          font-family: var(--font-garamond);
          font-size: 32px; font-weight: 600;
          color: #32404f; line-height: 1.2;
          margin-bottom: 16px;
        }
        .textSection p { font-size: 16px; line-height: 1.75; margin-bottom: 12px; }
        .textSection p:last-child { margin-bottom: 0; }
        .subhead { font-size: 16px !important; color: rgba(50,64,79,0.58); font-style: normal; }

        /* ===== ITERATION BLOCKS ===== */
        .iterationBlock { margin-bottom: 40px; }
        .iterTag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 16px; font-weight: 400;
          color: rgba(50,64,79,0.58);
          margin-bottom: 20px;
        }
        .phoneRow {
          display: flex; gap: 24px;
          flex-wrap: wrap;
        }
        .phoneImg {
          width: 220px;
          height: auto;
          display: block;
        }
        .yardImg {
          width: 100%; height: auto; display: block;
        }

        /* ===== SIX GRID ===== */
        .sixGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .gridImg { width: 100%; height: auto; display: block; }

        /* ===== TV ROW ===== */
        .tvRow {
          display: flex; gap: 24px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .tvImg { flex: 1; min-width: 0; height: auto; display: block; }

        /* ===== TV ANNOTATION ===== */
        .tvAnnotation {
          margin-bottom: 60px;
        }
        .tvAnnotation p {
          font-size: 15px; line-height: 1.75;
          color: rgba(50,64,79,0.58); margin: 0;
        }

        /* ===== REFLECTIONS ===== */
        .reflections {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }
        .reflection h3 {
          font-family: var(--font-garamond);
          font-size: 21.2px; font-weight: 600;
          color: #32404f; line-height: 1.3;
          margin-bottom: 12px;
        }
        .reflection p {
          font-size: 16px; line-height: 1.75;
          color: rgba(50,64,79,0.58);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .profileButton { display: none; }
          .mobileNav { display: flex; }
          .nav { display: none; }
          .hero { padding-top: 80px; }
          .heroInner { padding: 0 20px; }
          .hero h1 { font-size: 32px; }
          .container { padding: 0 20px 60px; }
          .meta { grid-template-columns: repeat(2, 1fr); }
          .reflections { grid-template-columns: 1fr; }
          .sixGrid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .hero h1 { font-size: 26px; }
          .meta { grid-template-columns: 1fr 1fr; gap: 16px; }
          .textSection h2 { font-size: 24px; }
          .phoneRow { gap: 12px; }
          .phoneImg { width: 160px; }
          .sixGrid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .tvRow { flex-direction: column; }
          .reflections { gap: 28px; }
        }
      `}</style>
    </main>
  );
}
