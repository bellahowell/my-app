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
          <h1>Helping bridesmaids plan<br />Bachelorette trips with confidence</h1>
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
          <h2>Planning a bachelorette trip is chaotic without a shared system.</h2>
          <p>Bridesmaids juggle group chats, spreadsheets, and multiple booking sites to coordinate a trip for a dozen people. There's no single space to align on budget, activities, and timing, leaving the maid of honor to shoulder most of the mental load while details fall through the cracks.</p>
        </section>

        {/* CHALLENGES & CONSTRAINTS */}
        <section className="textSection">
          <span className="sectionLabel">CHALLENGES & CONSTRAINTS</span>
          <h2>Designing for groups with competing priorities.</h2>
          <p>Every bridesmaids group has a different dynamic: varying budgets, different levels of involvement, and one person who always goes quiet in the group chat. The challenge was designing a planning system that accommodates real group behavior instead of assuming everyone participates equally. The one-week timeline pushed me to move fast from research to prototyping.</p>
        </section>

        {/* FIRST ITERATION */}
        <section className="textSection">
          <span className="sectionLabel">FIRST ITERATION</span>
          <h2>Starting at the inch scale.</h2>
          <p>My first iteration focused on individual screens in isolation, exploring how each core planning task, budget tracking, activity voting, itinerary building, could look and feel on its own before thinking about the full system.</p>
        </section>

        <div className="iterationBlock">
          <span className="iterTag">INCH SCALE</span>
          <div className="phoneRow">
            <img src="/1.1.png" alt="First iteration screen 1" className="phoneImg" />
            <img src="/1.2.png" alt="First iteration screen 2" className="phoneImg" />
          </div>
        </div>

        <div className="iterationBlock">
          <span className="iterTag">YARD SCALE</span>
          <img src="/1stiteraitionyard.png" alt="First iteration yard scale overview" className="yardImg" />
        </div>

        {/* SECOND ITERATION */}
        <section className="textSection">
          <span className="sectionLabel">SECOND ITERATION</span>
          <h2>Zooming out to understand the full flow.</h2>
          <p>After mapping individual screens, I stepped back to evaluate how they connected. This iteration focused on making the planning journey feel cohesive, where does someone land when they open the app, how do they move from setting a budget to selecting activities, and how do group decisions get surfaced without overwhelming anyone.</p>
        </section>

        <div className="iterationBlock">
          <span className="iterTag">INCH SCALE</span>
          <div className="phoneRow">
            <img src="/2.1.png" alt="Second iteration screen 1" className="phoneImg" />
            <img src="/2.2.png" alt="Second iteration screen 2" className="phoneImg" />
          </div>
        </div>

        <div className="iterationBlock">
          <span className="iterTag">YARD SCALE</span>
          <img src="/2nditerationyard.png" alt="Second iteration yard scale overview" className="yardImg" />
        </div>

        <div className="feedbackBlock">
          <span className="sectionLabel">FEEDBACK FROM ITERATION 2</span>
          <p>The navigation felt too linear. Real bachelorette planning isn't a step-by-step process, people jump between tasks depending on what's been decided and what's still up in the air. I needed to design for non-linear use.</p>
        </div>

        {/* THIRD ITERATION */}
        <section className="textSection">
          <span className="sectionLabel">THIRD ITERATION</span>
          <h2>Scaling up: designing for the big screen.</h2>
          <p>In the third iteration I explored how the planning experience could extend to a shared TV screen, something a group of bridesmaids might use together during a planning night. Designing for this context meant rethinking information density, touch targets, and which features benefit most from a communal display.</p>
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

        {/* FINAL */}
        <section className="textSection">
          <span className="sectionLabel">FINAL INCH SCALE</span>
          <h2>The finished screens.</h2>
          <p>The final design brings together everything learned across three iterations: a flexible dashboard that accommodates different levels of participation, a budget view that keeps everyone aligned without requiring constant updates, and an activity voting system that surfaces group consensus without turning into another group chat.</p>
        </section>

        <div className="finalRow">
          <img src="/finalinch1.png" alt="Final design screen 1" className="phoneImg" />
          <img src="/finalinch2.png" alt="Final design screen 2" className="phoneImg" />
          <img src="/finalinch3.png" alt="Final design screen 3" className="phoneImg" />
        </div>

        {/* REFLECTION */}
        <section className="textSection">
          <span className="sectionLabel">REFLECTION</span>
          <h2>What I learned.</h2>
        </section>

        <div className="reflections">
          <div className="reflection">
            <h3>Groups are not monoliths.</h3>
            <p>Designing for group dynamics means accepting that participation will always be uneven. The goal isn't to force equal input, it's to make the process feel fair even when it isn't symmetrical.</p>
          </div>
          <div className="reflection">
            <h3>Constraints accelerate clarity.</h3>
            <p>A one-week timeline forced me to make decisions faster and commit earlier than I normally would. The constraints pushed me toward simplicity in ways that extended timelines rarely do.</p>
          </div>
          <div className="reflection">
            <h3>Scale changes everything.</h3>
            <p>Designing for a TV forced me to reconsider every assumption I'd made for mobile. The same information hierarchy that works on a phone can completely fall apart on a 55-inch shared display.</p>
          </div>
          <div className="reflection">
            <h3>Design for the real moment.</h3>
            <p>Bachelorette planning happens in group chats at midnight and on Sundays with wine. The best design decisions came from imagining the actual context, not the ideal one.</p>
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
          font-size: 12px; font-weight: 400;
          letter-spacing: 2px; text-transform: uppercase;
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
          font-size: 10px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(50,64,79,0.58);
        }
        .metaValue {
          font-size: 14px; color: #32404f; line-height: 1.5;
        }

        /* ===== TEXT SECTIONS ===== */
        .textSection { margin-bottom: 48px; }
        .sectionLabel {
          display: block;
          font-family: var(--font-mono);
          font-size: 10px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(50,64,79,0.58);
          margin-bottom: 14px;
        }
        .textSection h2 {
          font-size: 22px; font-weight: 600;
          color: #32404f; line-height: 1.35;
          margin-bottom: 16px;
        }
        .textSection p { font-size: 16px; line-height: 1.75; margin-bottom: 12px; }
        .textSection p:last-child { margin-bottom: 0; }

        /* ===== ITERATION BLOCKS ===== */
        .iterationBlock { margin-bottom: 40px; }
        .iterTag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 10px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
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

        /* ===== FEEDBACK BLOCK ===== */
        .feedbackBlock {
          background: rgba(50,64,79,0.04);
          border-left: 3px solid rgba(50,64,79,0.2);
          padding: 24px 28px;
          margin-bottom: 60px;
        }
        .feedbackBlock p {
          font-size: 15px; line-height: 1.7;
          color: rgba(50,64,79,0.58); margin: 0;
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
          margin-bottom: 60px;
          flex-wrap: wrap;
        }
        .tvImg { flex: 1; min-width: 0; height: auto; display: block; }

        /* ===== FINAL ROW ===== */
        .finalRow {
          display: flex; gap: 24px;
          margin-bottom: 60px;
          flex-wrap: wrap;
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
          font-size: 21px; font-weight: 500;
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
          .phoneRow { gap: 12px; }
          .phoneImg { width: 160px; }
          .sixGrid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .tvRow { flex-direction: column; }
          .finalRow { gap: 12px; }
          .reflections { gap: 28px; }
        }
      `}</style>
    </main>
  );
}
