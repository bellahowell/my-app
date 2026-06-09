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
          <h1>Assisting TikTok Affiliates<br />Discover Brands with Confidence</h1>
          <img src="/titktoklandingpageimage.png" alt="TikTok affiliate app mockups" className="heroImg" />
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
          <p>As affiliate marketing expands, creators face increasing challenges in evaluating which collaboration opportunities are legitimate, trustworthy, and financially worthwhile. User interviews revealed that creators often rely on trial and error to determine whether brands are reliable, with trust developing only after repeated successful interactions such as timely payments and positive communication.</p>
        </section>

        <hr className="divider" />

        {/* PROBLEM */}
        <section className="textSection">
          <span className="sectionLabel">PROBLEM</span>
          <h2>Affiliate creators struggle to identify trustworthy partnerships.</h2>
          <p>Independent affiliate marketers rely on guesswork to choose brand partnerships. They need to evaluate brand reliability, such as payment and communication, to make informed decisions and avoid risky collaborations.</p>
        </section>

        <hr className="divider" />

        {/* SOLUTION */}
        <section className="textSection">
          <span className="sectionLabel">SOLUTION</span>
          <h2>A trust-centered review system built directly into TikTok shop & messages.</h2>
        </section>

        <span className="sectionLabel">CORE FLOWS</span>

        {/* 3 phone placeholders side by side */}
        <div className="coreFlows">
          <div className="coreFlowRow">
            <video src="/seewhataffiliatessay.mov" autoPlay loop muted playsInline className="coreVideo" />
            <div className="coreFlowText">
              <p>Added "See what affiliates say" in the product listing</p>
              <p className="caption">Affiliate feedback lives next to the commission rate, exactly where creators look first when evaluating a product.</p>
            </div>
          </div>
          <div className="coreFlowRow">
            <video src="/filtermessages.mov" autoPlay loop muted playsInline className="coreVideo" />
            <div className="coreFlowText">
              <p>Filtering collage messages</p>
              <p className="caption">An organized way to know relationship with the brand & the ability to filter by affiliate rating.</p>
            </div>
          </div>
          <div className="coreFlowRow">
            <video src="/productmessagepage.mov" autoPlay loop muted playsInline className="coreVideo" />
            <div className="coreFlowText">
              <p>Filtering collab messages</p>
              <p className="caption">Embedded reviews inside the brand message page, putting the information exactly where the decision is already happening.</p>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* PROCESS & KEY INSIGHTS */}
        <div className="insightsLayout">
          <div className="insightsLeft">
            <span className="sectionLabel">PROCESS & KEY INSIGHTS</span>
            <h2>Conducting user interviews.</h2>
            <p>We conducted contextual inquiries and interviews with TikTok affiliate creators to map fragmented trust-building behaviors and uncover gaps in brand transparency. We <strong>referenced the problem statements I created to make sure that my design really addresses the user's needs.</strong></p>
          </div>
          <div className="insightsRight">
            <div className="insightItem">
              <span className="insightNum">KEY INSIGHT 1:</span>
              <h3>Trust is Earned, Not Assessed</h3>
              <p>creators had no way to evaluate brand reliability upfront, trust only emerged through repeated interactions and consistent payments over time.</p>
            </div>
            <div className="insightItem">
              <span className="insightNum">KEY INSIGHT 2:</span>
              <h3>Product Over Partner</h3>
              <p>creators prioritized product performance over how brands treat affiliates, revealing a blind spot around partner accountability.</p>
            </div>
            <div className="insightItem">
              <span className="insightNum">KEY INSIGHT 3:</span>
              <h3>Experience Shifts Strategy</h3>
              <p>seasoned creators approached deals with more skepticism and strategy, while newer creators took on risk without the context to recognize it.</p>
            </div>
          </div>
        </div>

        {/* QUOTES */}
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

        {/* INTERVIEW TOGGLE */}
        <div className="interviewToggleWrap">
          <button className="interviewToggle" onClick={() => setInterviewOpen(v => !v)}>
            View user interview questions {interviewOpen ? "−" : "+"}
          </button>
          {interviewOpen && (
            <div className="interviewDropdown">
              <img src="/interviewquestionsimage.png" alt="User interview questions" className="interviewImg" />
            </div>
          )}
        </div>

        <hr className="divider" />

        {/* DESIGN PROCESS — USER FLOWS */}
        <section className="textSection">
          <span className="sectionLabel">DESIGN PROCESS</span>
          <h2>User flows.</h2>
          <p>We mapped two flows around the most natural moments for affiliates to encounter and act on trust signals.</p>
        </section>

        <div className="userFlows">
          <div className="userFlowRow">
            <img src="/1stuserflow.png" alt="User flow 1" className="flowImg" />
            <div className="flowText">
              <span className="sectionLabel">USER FLOW 1:</span>
              <p>Starts in the inbox, where creators naturally receive partnership requests, and introduces an affiliate rating filter that turns complex credibility signals into simple categories like "Trusted" or "Good" — helping creators quickly identify reliable collaborations without feeling overwhelmed.</p>
            </div>
          </div>
          <div className="userFlowRow">
            <div className="flowText">
              <span className="sectionLabel">USER FLOW 2:</span>
              <p>Begins on the home screen during product browsing and leads users to an "About this shop" section where a new affiliate feedback layer gives creators peer-sourced insight into brand reliability, filling a gap that general customer reviews don't address.</p>
            </div>
            <img src="/2nduserflow.png" alt="User flow 2" className="flowImg" />
          </div>
        </div>

        <hr className="divider" />

        {/* FIRST ROUND */}
        <section className="textSection">
          <h2>First round of prototypes.</h2>
        </section>

        <div className="protoRow">
          <div className="protoText">
            <h3>Inbox Page</h3>
            <p>Our first prototype followed TikTok's existing navigation structure, keeping the same multi-screen flow — we only added affiliate rating badges to help users quickly assess brand trustworthiness without changing how they navigate.</p>
            <p>However, user testing revealed that the multi-screen navigation still created too much cognitive load — affiliates had to hold too much context in their head just to get to the information they needed.</p>
          </div>
          <video src="/inboxvideo.mov" autoPlay loop muted playsInline className="protoVideo" />
        </div>

        <div className="protoRow">
          <div className="protoText">
            <h3>Shop Page</h3>
            <p>Another part of our prototype followed TikTok's existing Shop page flow. However, the affiliate ratings were buried far down the page, requiring users to scroll significantly before reaching the information most relevant to their partnership decision.</p>
          </div>
          <video src="/shoppagevideo.mov" autoPlay loop muted playsInline className="protoVideo" />
        </div>

        <hr className="divider" />

        {/* SECOND ROUND */}
        <section className="textSection">
          <h2>Second round of prototypes.</h2>
          <p className="subhead">Inspired by our first round of usability testing.</p>
          <p>After our first iteration of our digital wireframes, we decided to conduct a usability study with 1 of our previous interviewees, a successful affiliate marketer, to understand whether real users would benefit from our extension.</p>
        </section>

        {/* DESIGN 1 */}
        <div className="designRow">
          <span className="designTag">DESIGN 1</span>
          <div className="designContent">
            <div className="twoPhones">
              <img src="/design-1.1.png" alt="Design 1.1" className="designPhone" />
              <img src="/design-1.2.png" alt="Design 1.2" className="designPhone" />
            </div>
            <div className="designText">
              <h3>Affiliate Reviews in Brand Message Page</h3>
              <p>Our first round of testing revealed that affiliates had no way to evaluate a brand's reliability before agreeing to work with them. Brands will sometimes lower commissions after the fact or not pay at all, <em>"I think the affiliate rating is good because I know sometimes affiliates will work with brands and they'll lower their commissions or they just won't pay them"</em>.</p>
              <p>Having feedback from other affiliates upfront would save time and help avoid those situations. That feedback was the reason we embedded reviews inside the brand message page, putting the information exactly where the decision is already happening.</p>
            </div>
          </div>
        </div>

        {/* DESIGN 2 */}
        <div className="designRow">
          <span className="designTag">DESIGN 2</span>
          <div className="designContent reverse">
            <div className="designText">
              <h3>Filtering System in New Connections Inbox</h3>
              <p>When we showed our interviewee the existing filter tools, they told us they rarely use them. That raised a question for us: if affiliates aren't using filters that already exist, what would actually make them useful?</p>
              <p>The confusion they described around affiliate ratings versus shop ratings led us to add info tooltips explaining what each one means, so affiliates could filter with confidence rather than guessing.</p>
            </div>
            <div className="twoPhones">
              <img src="/design-2.1.png" alt="Design 2.1" className="designPhone" />
              <img src="/design-2.2.png" alt="Design 2.2" className="designPhone" />
            </div>
          </div>
        </div>

        {/* DESIGN 3 */}
        <div className="designRow">
          <span className="designTag">DESIGN 3</span>
          <div className="designContent">
            <div className="twoPhones">
              <img src="/design-3.1.png" alt="Design 3.1" className="designPhone" />
              <img src="/design-3.2.png" alt="Design 3.2" className="designPhone" />
            </div>
            <div className="designText">
              <h3>Collab Messages Inbox</h3>
              <p>This design came almost entirely from one quote. Our interviewee said that even after using the platform for so long, they still couldn't tell which brands they had already worked with versus which ones were new: <em>"Even with the updates, even though I've been on this platform for like two and a half years, I still don't even know what that is? It's just so confusing. I wish it actually said, you know, new connections or existing brands"</em>.</p>
              <p>The tab structure organizing messages into Active, Previously Partnered, and New Connections was our direct response to that frustration.</p>
            </div>
          </div>
        </div>

        {/* DESIGN 4 */}
        <div className="designRow">
          <span className="designTag">DESIGN 4</span>
          <div className="designContent reverse">
            <div className="designText">
              <h3>Product Listing with "See What Affiliates Say" Button</h3>
              <p>The commission rate is the very first thing an affiliate checks when evaluating a product. If we were going to surface affiliate feedback anywhere on that page, it should live right next to the commission number because that is where their eyes go first.</p>
              <p>Moving the "See What Affiliates Say" button to sit beside the commission rate was a direct result of that one piece of feedback, and it reframed how we thought about placement for the rest of the design.</p>
            </div>
            <div className="twoPhones">
              <img src="/design-4.1.png" alt="Design 4.1" className="designPhone" />
              <img src="/design-4.2.png" alt="Design 4.2" className="designPhone" />
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* THIRD ROUND */}
        <section className="textSection">
          <h2>Third round of prototypes.</h2>
          <p className="subhead">Inspired by our second round of usability testing.</p>
          <p>After our second round of digital wireframes, we conducted usability testing with 2 participants in our target audience to evaluate whether our design updates addressed the pain points identified in the previous round.</p>
        </section>

        <div className="beforeAfter">
          <h3>CHANGES MADE TO PRODUCT RESEARCH PAGE</h3>
          <div className="baThreeCols">
            <div className="baThreeCol">
              <span className="baLabel">BEFORE</span>
              <video src="/productpagebefore.mov" autoPlay loop muted playsInline className="baMediaSm" />
            </div>
            <div className="baThreeColText">
              <p>The "Shop Performance" page was buried within the product section. Users had to scroll and select the brand to access it.</p>
              <p>The "Affiliate Feedback" rating appeared as the final category under Shop Performance, making it easy to overlook. It was also not clickable, so users could not access additional reviews or ratings from this page.</p>
              <p>A more visible and accessible button now appears as soon as users open a product listing.</p>
              <p>Selecting the button takes users directly to a page with affiliate reviews and ratings.</p>
            </div>
            <div className="baThreeCol">
              <span className="baLabel">AFTER</span>
              <video src="/productpageafter.mov" autoPlay loop muted playsInline className="baMediaSm" />
            </div>
          </div>
        </div>

        <div className="beforeAfter">
          <h3>CHANGES MADE TO AFFILIATE REVIEW PAGE</h3>
          <div className="baThreeCols">
            <div className="baThreeCol">
              <span className="baLabel">BEFORE</span>
              <img src="/affiliatereviewbefore.png" alt="Affiliate review before" className="baMediaSm" />
            </div>
            <div className="baThreeColText">
              <p>Added review count to show how many affiliates had shared feedback, making the rating feel more trustworthy.</p>
              <p>Added a filter option so affiliates can sort reviews by the type of feedback they want to see most.</p>
            </div>
            <div className="baThreeCol">
              <span className="baLabel">AFTER</span>
              <img src="/affiliatereviewafter.png" alt="Affiliate review after" className="baMediaSm" />
            </div>
          </div>
        </div>

        {/* AFFILIATE REVIEW 2 — standalone centered with side annotations */}
        <div className="annotatedRow">
          <p className="annotation">Users can view reviews based on star ratings from other affiliates.</p>
          <img src="/affiliatereviewafter2.png" alt="Affiliate review filter" className="annotatedImg" />
          <p className="annotation">They can also filter reviews from the company's categories of products.</p>
        </div>

        <hr className="divider" />

        {/* WHERE WE LANDED */}
        <section className="textSection">
          <span className="sectionLabel">WHERE WE LANDED</span>
          <h2>Moving forward.</h2>
        </section>

        <div className="landingRow">
          <video src="/design123.mov" autoPlay loop muted playsInline className="landingVideo" />
          <div className="landingText">
            <span className="designTag">DESIGN 1 + DESIGN 2 + DESIGN 3</span>
            <p>We combined affiliate reviews, trust filtering, and inbox organization into a single flow, giving creators multiple ways to evaluate and manage brand opportunities in one place.</p>
          </div>
        </div>

        <div className="landingRow reverse">
          <div className="landingText">
            <span className="designTag">DESIGN 4</span>
            <p>We also retained the product listing flow, relocating "See what affiliates say" next to the commission rate based on user feedback, which reframed how we approached placement across the rest of the design.</p>
          </div>
          <video src="/design4final.mov" autoPlay loop muted playsInline className="landingVideo" />
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
          background: #fff;
          padding: 140px 40px 0;
          margin-bottom: 64px;
        }
        .heroInner { max-width: 900px; margin: 0 auto; }
        .heroLabel {
          font-size: 13px; letter-spacing: 2px;
          color: rgba(50,64,79,0.58); margin-bottom: 20px;
          text-transform: uppercase; font-family: var(--font-mono);
        }
        h1 {
          font-family: var(--font-serif);
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 500; color: #111;
          line-height: 1.1; margin-bottom: 40px;
          max-width: 640px;
        }
        .heroImg {
          width: 100%; display: block;
          border-radius: 0;
        }

        /* ===== CONTAINER ===== */
        .container {
          max-width: 860px; margin: 0 auto;
          padding: 0 40px 120px;
        }

        /* ===== META ===== */
        .meta { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 8px 0 40px; }
        .metaItem { display: flex; flex-direction: column; gap: 4px; }
        .metaLabel { font-size: 11px; letter-spacing: 1.5px; color: rgba(50,64,79,0.58); font-family: var(--font-mono); text-transform: uppercase; }
        .metaValue { font-size: 14px; color: rgba(50,64,79,0.58); font-family: var(--font-mono); }

        /* ===== DIVIDER ===== */
        .divider { border: none; border-top: 1px solid #e8e8e8; margin: 40px 0; }

        /* ===== TEXT SECTIONS ===== */
        .sectionLabel {
          display: block; font-size: 11px; letter-spacing: 2px;
          color: rgba(50,64,79,0.58);
          font-family: var(--font-mono);
          text-transform: uppercase; margin-bottom: 12px;
        }
        .textSection { margin-bottom: 32px; }
        .textSection h2 {
          font-family: var(--font-serif);
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 600; line-height: 1.2;
          margin-bottom: 16px; color: #32404f;
        }
        .textSection p { font-size: 16px; line-height: 1.8; color: #32404f; }
        .subhead { font-size: 16px; opacity: 0.7; margin-bottom: 8px; margin-top: -8px; }

        /* ===== PLACEHOLDERS ===== */
        .phonePlaceholder {
          width: 180px; flex-shrink: 0; height: 360px;
          background: #f0eeec; border-radius: 24px;
          border: 1px dashed #ccc;
        }
        .imgPlaceholder {
          width: 100%; height: 260px;
          background: #f0eeec; border-radius: 12px;
          border: 1px dashed #ccc; margin-bottom: 16px;
        }
        .imgPlaceholder.wide { height: 320px; margin: 24px 0; }
        .flowImgPlaceholder {
          width: 100%; height: 200px;
          background: #f0eeec; border-radius: 12px;
          border: 1px dashed #ccc; margin-bottom: 12px;
        }

        /* ===== CORE FLOWS ===== */
        .coreFlows { display: flex; flex-direction: column; gap: 48px; margin: 24px 0 32px; }
        .coreFlowRow { display: flex; align-items: center; gap: 48px; }
        .coreVideo {
          width: 340px; flex-shrink: 0; display: block;
          border-radius: 16px;
          mix-blend-mode: multiply;
        }
        .coreFlowText { flex: 1; }
        .coreFlowText p { font-size: 18px; font-weight: 500; color: #111; line-height: 1.4; margin-bottom: 8px; }
        .coreFlowText .caption { font-size: 15px; font-weight: 400; color: #32404f; opacity: 0.8; }

        /* ===== INSIGHTS LAYOUT (2-col) ===== */
        .insightsLayout { display: flex; gap: 48px; margin: 32px 0; align-items: flex-start; }
        .insightsLeft { flex: 1; }
        .insightsLeft h2 {
          font-family: var(--font-serif);
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 600; line-height: 1.2;
          margin-bottom: 16px; color: #32404f;
        }
        .insightsLeft p { font-size: 15px; line-height: 1.8; color: #32404f; }
        .insightsRight { flex: 1; display: flex; flex-direction: column; gap: 24px; }
        .insightItem {}
        .insightNum { display: block; font-size: 11px; letter-spacing: 1.5px; color: rgba(50,64,79,0.58); font-family: var(--font-mono); text-transform: uppercase; margin-bottom: 4px; }
        .insightItem h3 { font-size: 15px; font-weight: 600; color: #111; margin-bottom: 4px; }
        .insightItem p  { font-size: 14px; line-height: 1.7; color: #32404f; }

        /* ===== QUOTES ===== */
        .quotesSection { margin: 32px 0; }
        .quotesHeading { font-size: 21px; font-weight: 400; color: #111; margin-bottom: 16px; }
        .quotes { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
        .quote {
          background: #e4f0ff; color: #0366ff;
          border-radius: 10px; padding: 16px 18px;
          font-size: 13px; line-height: 1.6;
        }

        /* ===== INTERVIEW TOGGLE ===== */
        .interviewToggleWrap { display: flex; flex-direction: column; align-items: center; margin: 24px 0; }
        .interviewToggle {
          background: none; color: rgba(50,64,79,0.7);
          border: 1.5px solid rgba(50,64,79,0.3); border-radius: 999px;
          padding: 10px 28px; font-size: 13px; letter-spacing: 1px;
          font-family: var(--font-mono); text-transform: uppercase;
          cursor: pointer; transition: border-color 0.2s, color 0.2s;
        }
        .interviewToggle:hover { border-color: rgba(50,64,79,0.7); color: rgba(50,64,79,1); }
        .interviewDropdown {
          margin-top: 16px; border-radius: 16px; overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
        }
        .interviewImg { display: block; width: 600px; max-width: 100%; }

        /* ===== USER FLOWS ===== */
        .userFlows { display: flex; flex-direction: column; gap: 48px; margin: 24px 0 32px; }
        .userFlowRow { display: flex; gap: 40px; align-items: flex-start; }
        .flowImg { flex: 1; width: 0; min-width: 0; border-radius: 8px; display: block; }
        .flowText { flex: 0 0 220px; }
        .flowText p { font-size: 14px; line-height: 1.7; color: #32404f; margin-top: 8px; }

        /* ===== PROTO ROWS (first round) ===== */
        .protoRow { display: flex; gap: 40px; align-items: flex-start; margin-bottom: 48px; }
        .protoText { flex: 1; }
        .protoText h3 { font-size: 18px; font-weight: 600; color: #111; margin-bottom: 10px; }
        .protoText p  { font-size: 15px; line-height: 1.8; color: #32404f; margin-bottom: 8px; }
        .protoVideo { width: 220px; flex-shrink: 0; border-radius: 16px; display: block; mix-blend-mode: multiply; }

        /* ===== DESIGN ROWS (second round) ===== */
        .designRow { margin-bottom: 56px; }
        .designTag {
          display: inline-block; font-size: 11px; letter-spacing: 1.5px;
          text-transform: uppercase; color: rgba(50,64,79,0.58);
          font-family: var(--font-mono); margin-bottom: 16px;
        }
        .designContent { display: flex; gap: 40px; align-items: flex-start; }
        .designContent.reverse { flex-direction: row-reverse; }
        .twoPhones { display: flex; gap: 12px; flex-shrink: 0; }
        .designPhone { width: 160px; border-radius: 16px; display: block; }
        .designText { flex: 1; }
        .designText h3 { font-size: 21px; font-weight: 400; color: #111; margin-bottom: 12px; line-height: 1.3; }
        .designText p  { font-size: 15px; line-height: 1.8; color: #32404f; margin-bottom: 10px; }

        /* ===== BEFORE / AFTER ===== */
        .beforeAfter { margin: 32px 0 48px; }
        .beforeAfter h3 { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(50,64,79,0.58); font-family: var(--font-mono); margin-bottom: 20px; }
        .baThreeCols { display: flex; gap: 24px; align-items: flex-start; }
        .baThreeCol { flex: 0 0 220px; }
        .baThreeColText { flex: 1; padding-top: 20px; }
        .baLabel { display: block; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(50,64,79,0.58); font-family: var(--font-mono); margin-bottom: 10px; }
        .baThreeColText p { font-size: 13px; line-height: 1.7; color: #707070; margin-bottom: 8px; }
        .baMediaSm { width: 100%; display: block; border-radius: 12px; mix-blend-mode: multiply; }

        /* ===== ANNOTATED IMAGE ===== */
        .annotatedRow { display: flex; align-items: center; gap: 24px; margin: 32px 0; }
        .annotatedImg { width: 220px; flex-shrink: 0; display: block; border-radius: 12px; mix-blend-mode: multiply; }
        .annotation { flex: 1; font-size: 13px; line-height: 1.6; color: #32404f; text-align: center; }

        /* ===== WHERE WE LANDED ===== */
        .landingRow { display: flex; gap: 40px; align-items: center; margin-bottom: 48px; }
        .landingRow.reverse { flex-direction: row-reverse; }
        .landingText { flex: 1; }
        .landingText p { font-size: 15px; line-height: 1.8; color: #32404f; margin-top: 8px; }

        /* ===== REFLECTION ===== */
        .reflections { display: flex; gap: 32px; margin: 24px 0; flex-wrap: wrap; }
        .reflection { flex: 1; min-width: 240px; }
        .reflection h3 { font-family: var(--font-garamond); font-size: 24px; font-weight: 500; color: #111; margin-bottom: 10px; }
        .landingVideo { width: 130px; border-radius: 16px; mix-blend-mode: multiply; flex-shrink: 0; }
        .reflection p  { font-size: 15px; line-height: 1.8; color: #32404f; }
      `}</style>
    </main>
  );
}
