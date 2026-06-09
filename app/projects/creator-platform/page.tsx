"use client";

import Link from "next/link";
import { useState } from "react";

export default function CreatorPlatform() {
  const [interviewOpen, setInterviewOpen] = useState(false);

  return (
    <main className="page">

      {/* PROFILE BUTTON */}
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

      {/* NAV */}
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
          <p className="heroLabel">TIKTOK ⟡ CONCEPT 2026</p>
          <h1>Assisting TikTok Affiliates Discover Brands with Confidence</h1>
          <div className="heroMockup">
            <img src="/tiktokmainpic.png" alt="TikTok main page" className="heroImg" />
          </div>
        </div>
      </section>

      <div className="container">

        {/* PROJECT METADATA */}
        <div className="meta">
          <div className="metaItem">
            <span className="metaLabel">ROLE</span>
            <span className="metaValue">Product Designer & UX Researcher</span>
          </div>
          <div className="metaItem">
            <span className="metaLabel">TIMELINE</span>
            <span className="metaValue">April – June 2026</span>
          </div>
          <div className="metaItem">
            <span className="metaLabel">TEAM</span>
            <span className="metaValue">Fidan Jabrayilova & Samantha Ramos</span>
          </div>
          <div className="metaItem">
            <span className="metaLabel">TOOLS</span>
            <span className="metaValue">Figma & Google Suites</span>
          </div>
        </div>

        <hr className="divider" />

        {/* OVERVIEW */}
        <section className="textSection">
          <span className="sectionLabel">OVERVIEW</span>
          <h2>Social commerce and affiliate marketing have rapidly become one of the largest and fastest-growing sectors of the creator economy.</h2>
          <p>
            As affiliate marketing expands, creators face increasing challenges in evaluating which
            collaboration opportunities are legitimate, trustworthy, and financially worthwhile. User
            interviews revealed that creators often rely on trial and error to determine whether
            brands are reliable, with trust developing only after repeated successful interactions
            such as timely payments and positive communication.
          </p>
        </section>

        <hr className="divider" />

        {/* PROBLEM */}
        <section className="textSection">
          <span className="sectionLabel">PROBLEM</span>
          <h2>Affiliate creators struggle to identify trustworthy partnerships.</h2>
          <p>
            Independent affiliate marketers rely on guesswork to choose brand partnerships. They
            need to evaluate brand reliability, such as payment and communication, to make informed
            decisions and avoid risky collaborations.
          </p>
        </section>

        <hr className="divider" />

        {/* SOLUTION */}
        <section className="textSection">
          <span className="sectionLabel">SOLUTION</span>
          <h2>A trust-centered review system built directly into TikTok Shop & messages.</h2>
        </section>

        <span className="sectionLabel">CORE FLOWS</span>

        <div className="coreFlows">
          <div className="coreFlow">
            <div className="mockupPhone"><video src="/seewhataffiliatessay.mov" autoPlay loop muted playsInline className="mockupVideo" /></div>
            <p>Added "See what affiliates say" in the product listing</p>
          </div>
          <div className="coreFlow">
            <div className="mockupPhone"><video src="/filtermessages.mov" autoPlay loop muted playsInline className="mockupVideo" /></div>
            <p>Filtering collage messages</p>
          </div>
          <div className="coreFlow">
            <div className="mockupPhone"><video src="/productmessagepage.mov" autoPlay loop muted playsInline className="mockupVideo" /></div>
            <p>Filtering collab messages</p>
          </div>
        </div>

        <hr className="divider" />

        {/* RESEARCH */}
        <section className="textSection">
          <span className="sectionLabel">PROCESS & KEY INSIGHTS</span>
          <h2>Conducting user interviews.</h2>
          <p>
            We conducted contextual inquiries and interviews with TikTok affiliate creators to map
            fragmented trust-building behaviors and uncover gaps in brand transparency. We referenced
            the problem statements I created to make sure that my design really addresses the
            user's needs.
          </p>
        </section>

        {/* KEY INSIGHTS */}
        <div className="insights">
          <div className="insight">
            <span className="insightNum">KEY INSIGHT 1</span>
            <h3>Trust is Earned, Not Assessed</h3>
            <p>Creators had no way to evaluate brand reliability upfront — trust only emerged through repeated interactions and consistent payments over time.</p>
          </div>
          <div className="insight">
            <span className="insightNum">KEY INSIGHT 2</span>
            <h3>Product Over Partner</h3>
            <p>Creators prioritized product performance over how brands treat affiliates, revealing a blind spot around partner accountability.</p>
          </div>
          <div className="insight">
            <span className="insightNum">KEY INSIGHT 3</span>
            <h3>Experience Shifts Strategy</h3>
            <p>Seasoned creators approached deals with more skepticism and strategy, while newer creators took on risk without the context to recognize it.</p>
          </div>
        </div>

        {/* PARTICIPANT QUOTES */}
        <div className="quotesSection">
          <h3 className="quotesHeading">Participants quoted...</h3>
          <div className="quotes">
            <div className="quote">"If they've been good to you for multiple months, then there is a low chance that they're going to be bad to you."</div>
            <div className="quote">"It took them literally like one month to pay me… I thought I wasn't going to get paid."</div>
            <div className="quote">Affiliates often rely on external networks or curated groups to access "trusted" brands, rather than using built-in platform tools.</div>
            <div className="quote">"That's why I'm working with multiple brands… I don't want to put all my eggs in one basket."</div>
            <div className="quote">Brands failed to pay due to factors outside the creator's control (e.g., business failure or bankruptcy).</div>
          </div>
        </div>

        {/* INTERVIEW QUESTIONS TOGGLE */}
        <button className="interviewToggle" onClick={() => setInterviewOpen(v => !v)}>
          View user interview questions {interviewOpen ? "−" : "+"}
        </button>
        {interviewOpen && (
          <div className="interviewQuestions">
            <p><strong>Introduction:</strong> I'm working on a project about affiliate creators and brand partnerships. I am curious to learn more about your experience in the field.</p>
            <p><strong>Leading Questions:</strong> Can you tell me a bit about your experience with affiliate marketing? How long have you been doing it and what kind of brands do you usually work with?</p>
            <p><strong>Current situation:</strong> Can you walk me through the last time you decided to work with a brand? How did you find them and what made you say yes? What does your process usually look like from first contact to posting?</p>
            <p><strong>Pain Point questions:</strong> Have you ever had a partnership that didn't go as expected? Have there been times where communication or payment didn't go as planned?</p>
            <p><strong>Trust / lack of it:</strong> How do you usually decide if a brand is trustworthy? What signals or signs do you look for? Have you ever felt unsure before agreeing to a partnership?</p>
            <p><strong>Existing Gaps:</strong> Is there anything you wish you knew before working with a brand? What would make choosing partnerships easier or less risky?</p>
            <p><strong>Open ended:</strong> Is there anything about working with brands that we didn't cover that you think is important?</p>
          </div>
        )}

        <hr className="divider" />

        {/* FIRST ROUND */}
        <section className="textSection">
          <h2>First round of prototypes.</h2>
        </section>

        <div className="protoBlock">
          <div className="protoText">
            <h3>Inbox Page</h3>
            <p>
              Our first prototype followed TikTok's existing navigation structure, keeping the same
              multi-screen flow — we only added affiliate rating badges to help users quickly assess
              brand trustworthiness without changing how they navigate. This let us test whether
              surfacing trust signals alone was enough to improve the experience before making bigger
              structural changes.
            </p>
            <p>
              However, user testing revealed that the multi-screen navigation still created too much
              cognitive load — affiliates had to hold too much context in their head just to get to
              the information they needed.
            </p>
          </div>
          <div className="protoPlaceholder" />
        </div>

        <div className="protoBlock">
          <div className="protoText">
            <h3>Shop Page</h3>
            <p>
              Another part of our prototype followed TikTok's existing Shop page flow. However, the
              affiliate ratings were buried far down the page, requiring users to scroll significantly
              before reaching the information most relevant to their partnership decision.
            </p>
          </div>
          <div className="protoPlaceholder" />
        </div>

        <hr className="divider" />

        {/* SECOND ROUND */}
        <section className="textSection">
          <h2>Second round of prototypes.</h2>
          <p className="subhead">Inspired by our first round of usability testing.</p>
          <p>
            After our first iteration of our digital wireframes, we decided to conduct a usability
            study with one of our previous interviewees, a successful affiliate marketer, to
            understand whether real users would benefit from our extension.
          </p>
        </section>

        <div className="mockupRow">
          <div className="twoPhonesCol">
            <div className="protoPlaceholder" />
            <div className="protoPlaceholder" />
          </div>
          <div className="mockupText">
            <span className="designTag">DESIGN 1</span>
            <h3>Affiliate Reviews in Brand Message Page</h3>
            <p>
              Our first round of testing revealed that affiliates had no way to evaluate a brand's
              reliability before agreeing to work with them. Brands will sometimes lower commissions
              after the fact or not pay at all. Having feedback from other affiliates upfront saves
              time and helps avoid those situations.
            </p>
            <p>
              That feedback was the reason we embedded reviews inside the brand message page,
              putting the information exactly where the decision is already happening.
            </p>
          </div>
        </div>

        <div className="mockupRow reverse">
          <div className="twoPhonesCol">
            <div className="protoPlaceholder" />
            <div className="protoPlaceholder" />
          </div>
          <div className="mockupText">
            <span className="designTag">DESIGN 2</span>
            <h3>Filtering System in New Connections Inbox</h3>
            <p>
              When we showed our interviewee the existing filter tools, they told us they rarely use
              them. That raised a question: if affiliates aren't using filters that already exist,
              what would actually make them useful?
            </p>
            <p>
              The confusion they described around affiliate ratings versus shop ratings led us to
              add info tooltips explaining what each one means, so affiliates could filter with
              confidence rather than guessing.
            </p>
          </div>
        </div>

        <div className="mockupRow">
          <div className="twoPhonesCol">
            <div className="protoPlaceholder" />
            <div className="protoPlaceholder" />
          </div>
          <div className="mockupText">
            <span className="designTag">DESIGN 3</span>
            <h3>Collab Messages Inbox</h3>
            <p>
              This design came almost entirely from one quote. Our interviewee said that even after
              using the platform for so long, they still couldn't tell which brands they had already
              worked with versus which ones were new: <em>"Even with the updates, even though I've
              been on this platform for like two and a half years, I still don't even know what that
              is? It's just so confusing. I wish it actually said, you know, new connections or
              existing brands"</em>.
            </p>
            <p>
              The tab structure organizing messages into Active, Previously Partnered, and New
              Connections was our direct response to that frustration.
            </p>
          </div>
        </div>

        <div className="mockupRow reverse">
          <div className="twoPhonesCol">
            <div className="protoPlaceholder" />
            <div className="protoPlaceholder" />
          </div>
          <div className="mockupText">
            <span className="designTag">DESIGN 4</span>
            <h3>Product Listing with "See What Affiliates Say" Button</h3>
            <p>
              The commission rate is the very first thing an affiliate checks when evaluating a
              product. If we were going to surface affiliate feedback anywhere on that page, it
              should live right next to the commission number because that is where their eyes go
              first.
            </p>
            <p>
              Moving the "See What Affiliates Say" button to sit beside the commission rate was a
              direct result of that one piece of feedback, and it reframed how we thought about
              placement for the rest of the design.
            </p>
          </div>
        </div>

        <hr className="divider" />

        {/* THIRD ROUND */}
        <section className="textSection">
          <h2>Third round of prototypes.</h2>
          <p className="subhead">Inspired by our second round of usability testing.</p>
          <p>
            After our second round of digital wireframes, we conducted usability testing with 2
            participants in our target audience to evaluate whether our design updates addressed the
            pain points identified in the previous round.
          </p>
        </section>

        {/* BEFORE / AFTER */}
        <div className="beforeAfter">
          <h3>CHANGES MADE TO PRODUCT RESEARCH PAGE</h3>
          <div className="beforeAfterCols">
            <div className="col">
              <span className="baLabel">BEFORE</span>
              <div className="baPlaceholder" />
              <p>The "Shop Performance" page was buried within the product section. Users had to scroll and select the brand to access it.</p>
              <p>The "Affiliate Feedback" rating appeared as the final category under Shop Performance, making it easy to overlook.</p>
            </div>
            <div className="col">
              <span className="baLabel">AFTER</span>
              <div className="baPlaceholder" />
              <p>A more visible and accessible button now appears as soon as users open a product listing.</p>
              <p>Selecting the button takes users directly to a page with affiliate reviews and ratings.</p>
            </div>
          </div>
        </div>

        <div className="beforeAfter">
          <h3>CHANGES MADE TO AFFILIATE REVIEW PAGE</h3>
          <div className="beforeAfterCols">
            <div className="col">
              <span className="baLabel">BEFORE</span>
              <div className="baPlaceholder" />
            </div>
            <div className="col">
              <span className="baLabel">AFTER</span>
              <div className="baPlaceholder" />
              <p>Added review count to show how many affiliates had shared feedback, making the rating feel more trustworthy.</p>
              <p>Added a filter option so affiliates can sort reviews by the type of feedback they want to see most.</p>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* WHERE WE LANDED */}
        <section className="textSection">
          <span className="sectionLabel">WHERE WE LANDED</span>
          <h2>Moving forward.</h2>
        </section>

        <div className="landing">
          <div className="landingItem">
            <span className="designTag">DESIGN 1 + DESIGN 2 + DESIGN 3</span>
            <p>We combined affiliate reviews, trust filtering, and inbox organization into a single flow, giving creators multiple ways to evaluate and manage brand opportunities in one place.</p>
          </div>
          <div className="landingItem">
            <span className="designTag">DESIGN 4</span>
            <p>We also retained the product listing flow, relocating "See what affiliates say" next to the commission rate based on user feedback, which reframed how we approached placement across the rest of the design.</p>
          </div>
        </div>

        <hr className="divider" />

        {/* REFLECTION */}
        <section className="textSection">
          <span className="sectionLabel">REFLECTION</span>
          <h2>What I learned.</h2>
        </section>

        <div className="reflections">
          <div className="reflection">
            <h3>Staying open to the unexpected.</h3>
            <p>This project taught me to resist forming a solution too early — the most meaningful design decisions came from staying open to what users implied, not just what I expected to hear.</p>
          </div>
          <div className="reflection">
            <h3>Design for the system.</h3>
            <p>It's not just about designing an aesthetic feature — it has to fit naturally into the existing system and match the way users already think.</p>
          </div>
        </div>

      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #fff;
          font-family: var(--font-sans, Arial, sans-serif);
          color: #32404f;
        }

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
        .profileText h3 { font-size: 20px; font-weight: 600; color: #111; }
        .profileText p  { font-size: 16px; color: #999; margin-top: 2px; }
        .arrowCircle {
          width: 58px; height: 58px; border-radius: 999px;
          background: black; color: white;
          display: flex; align-items: center; justify-content: center;
          font-size: 36px;
        }
        .hoverText { margin-left: 18px; }
        .hoverText span { font-size: 20px; color: #111; }
        .hoverText p    { font-size: 16px; color: #999; margin-top: 2px; }

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
        .pillNav a {
          text-decoration: none; color: #111;
          font-size: 16px; font-weight: 500;
          position: relative; transition: opacity 0.25s ease;
        }
        .pillNav a:hover { opacity: 0.6; }
        .pillNav a::after {
          content: ""; position: absolute; left: 0; bottom: -6px;
          width: 0%; height: 2px; background: black;
          transition: width 0.3s ease;
        }
        .pillNav a:hover::after { width: 100%; }

        /* ===== HERO ===== */
        .hero {
          background: #3e2b17;
          padding: 160px 40px 0;
          margin-bottom: 64px;
        }
        .heroInner { max-width: 800px; margin: 0 auto; }
        .heroLabel {
          font-size: 13px; letter-spacing: 2px;
          color: #a08070; margin-bottom: 20px;
          text-transform: uppercase;
        }
        h1 {
          font-family: var(--font-serif);
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 500; color: #fff;
          line-height: 1.1; margin-bottom: 48px;
          max-width: 640px;
        }
        .heroMockup {
          width: 100%;
          border-radius: 16px 16px 0 0;
          overflow: hidden;
        }
        .heroImg {
          width: 100%; display: block;
          border-radius: 16px 16px 0 0;
        }

        /* ===== CONTAINER ===== */
        .container {
          max-width: 800px; margin: 0 auto;
          padding: 0 40px 120px;
        }

        /* ===== META ===== */
        .meta {
          display: flex; gap: 48px; flex-wrap: wrap;
          padding: 8px 0 40px;
        }
        .metaItem { display: flex; flex-direction: column; gap: 4px; }
        .metaLabel {
          font-size: 11px; letter-spacing: 1.5px;
          color: #32404f; opacity: 0.6; text-transform: uppercase;
        }
        .metaValue { font-size: 14px; color: #32404f; }

        /* ===== DIVIDER ===== */
        .divider { border: none; border-top: 1px solid #e8e8e8; margin: 40px 0; }

        /* ===== TEXT SECTIONS ===== */
        .sectionLabel {
          display: block;
          font-size: 11px; letter-spacing: 2px;
          color: #32404f; opacity: 0.6;
          text-transform: uppercase; margin-bottom: 12px;
        }
        .textSection { margin-bottom: 32px; }
        .textSection h2 {
          font-family: var(--font-serif);
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 600; line-height: 1.2;
          margin-bottom: 16px; color: #32404f;
        }
        .textSection p {
          font-size: 16px; line-height: 1.8; color: #32404f;
        }
        .subhead { font-size: 16px; color: #32404f; opacity: 0.7; margin-bottom: 8px; margin-top: -8px; }

        /* ===== KEY INSIGHTS ===== */
        .insights { display: flex; gap: 24px; margin: 32px 0; flex-wrap: wrap; }
        .insight {
          flex: 1; min-width: 200px;
          border: 1px solid #e8e8e8;
          border-radius: 12px; padding: 24px;
        }
        .insightNum {
          display: block; font-size: 11px; letter-spacing: 1.5px;
          color: #32404f; opacity: 0.5; text-transform: uppercase;
          margin-bottom: 8px;
        }
        .insight h3 { font-size: 16px; font-weight: 600; color: #111; margin-bottom: 8px; }
        .insight p  { font-size: 14px; line-height: 1.7; color: #32404f; }

        /* ===== QUOTES ===== */
        .quotesSection { margin: 32px 0; }
        .quotesHeading { font-size: 21px; font-weight: 400; color: #111; margin-bottom: 16px; }
        .quotes { display: flex; flex-wrap: wrap; gap: 12px; }
        .quote {
          background: #e4f0ff; color: #0366ff;
          border-radius: 10px; padding: 16px 20px;
          font-size: 13px; line-height: 1.6;
          flex: 1; min-width: 200px;
        }

        /* ===== INTERVIEW TOGGLE ===== */
        .interviewToggle {
          background: #000; color: #fff;
          border: none; border-radius: 999px;
          padding: 12px 24px; font-size: 16px;
          cursor: pointer; margin: 24px 0;
          transition: opacity 0.2s;
        }
        .interviewToggle:hover { opacity: 0.8; }
        .interviewQuestions {
          background: #f7f7f7; border-radius: 12px;
          padding: 24px 28px; margin-bottom: 24px;
        }
        .interviewQuestions p {
          font-size: 14px; line-height: 1.8; color: #32404f;
          margin-bottom: 12px;
        }

        /* ===== USER FLOWS ===== */
        .flows { display: flex; gap: 24px; margin: 24px 0 32px; flex-wrap: wrap; }
        .flow {
          flex: 1; min-width: 240px;
          border-left: 3px solid #3e2b17;
          padding-left: 20px;
        }
        .flowLabel {
          display: block; font-size: 11px; letter-spacing: 1.5px;
          font-weight: 600; color: #3e2b17;
          text-transform: uppercase; margin-bottom: 8px;
        }
        .flow p { font-size: 14px; line-height: 1.7; color: #32404f; }

        /* ===== CORE FLOWS (3 videos side by side) ===== */
        .coreFlows {
          display: flex; gap: 24px; margin: 24px 0 32px;
          align-items: flex-start;
        }
        .coreFlow { flex: 1; display: flex; flex-direction: column; gap: 12px; }
        .coreFlow p { font-size: 13px; color: #32404f; line-height: 1.5; }
        .coreFlow .mockupPhone { width: 100%; height: 340px; }

        /* ===== TWO PHONES SIDE BY SIDE ===== */
        .twoPhonesCol {
          display: flex; gap: 12px; flex-shrink: 0;
        }
        .twoPhonesCol .protoPlaceholder {
          width: 140px; height: 280px; flex-shrink: 0;
        }

        /* ===== PROTOTYPE BLOCKS ===== */
        .protoBlock {
          display: flex; gap: 40px; align-items: flex-start;
          margin-bottom: 48px;
        }
        .protoText { flex: 1; }
        .protoText h3 { font-size: 18px; font-weight: 600; color: #111; margin-bottom: 10px; }
        .protoText p  { font-size: 15px; line-height: 1.8; color: #32404f; margin-bottom: 10px; }
        .protoPlaceholder {
          width: 200px; flex-shrink: 0; height: 380px;
          background: #f2f0ed; border-radius: 24px;
          border: 1px dashed #ccc;
        }

        /* ===== MOCKUP ROWS ===== */
        .mockupRow {
          display: flex; align-items: flex-start;
          gap: 48px; margin-bottom: 64px;
        }
        .mockupRow.reverse { flex-direction: row-reverse; }
        .mockupPhone {
          width: 220px; height: 420px; flex-shrink: 0;
          border-radius: 28px; overflow: hidden;
          background: #000;
        }
        .mockupVideo {
          width: 100%; height: 100%;
          object-fit: contain;
          display: block;
        }
        .designTag {
          display: inline-block;
          font-size: 11px; letter-spacing: 1.5px;
          text-transform: uppercase; color: #32404f;
          opacity: 0.6; margin-bottom: 8px;
        }
        .mockupText h3 {
          font-size: 21px; font-weight: 400; color: #111;
          margin-bottom: 10px; line-height: 1.3;
        }
        .mockupText p { font-size: 15px; line-height: 1.75; color: #32404f; margin-bottom: 10px; }
        .designDetail { font-size: 14px; color: #32404f; opacity: 0.8; }

        /* ===== BEFORE / AFTER ===== */
        .beforeAfter { margin: 32px 0 48px; }
        .beforeAfter h3 {
          font-size: 12px; letter-spacing: 1.5px;
          text-transform: uppercase; color: #32404f;
          opacity: 0.6; margin-bottom: 20px;
        }
        .beforeAfterCols { display: flex; gap: 32px; }
        .col { flex: 1; }
        .baLabel {
          display: block; font-size: 11px; letter-spacing: 1.5px;
          text-transform: uppercase; color: #32404f;
          opacity: 0.5; margin-bottom: 10px;
        }
        .baPlaceholder {
          width: 100%; height: 240px;
          background: #f2f0ed; border-radius: 12px;
          border: 1px dashed #ccc; margin-bottom: 14px;
        }
        .col p { font-size: 14px; line-height: 1.7; color: #707070; margin-bottom: 8px; }

        /* ===== WHERE WE LANDED ===== */
        .landing { display: flex; gap: 32px; margin: 24px 0 32px; flex-wrap: wrap; }
        .landingItem { flex: 1; min-width: 240px; }
        .landingItem p { font-size: 15px; line-height: 1.8; color: #32404f; margin-top: 8px; }

        /* ===== REFLECTION ===== */
        .reflections { display: flex; gap: 32px; margin: 24px 0; flex-wrap: wrap; }
        .reflection { flex: 1; min-width: 240px; }
        .reflection h3 { font-size: 21px; font-weight: 600; color: #111; margin-bottom: 10px; }
        .reflection p  { font-size: 15px; line-height: 1.8; color: #32404f; }
      `}</style>
    </main>
  );
}
