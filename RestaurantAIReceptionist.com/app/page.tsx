"use client";

import { useState } from "react";

const capabilities = [
  ["01", "AI phone answering", "A warm, consistent first response for every caller — during service, between shifts, or after hours."],
  ["02", "Common questions", "Hours, location, menu, parking, dietary questions, and the details guests ask most."],
  ["03", "Catering inquiry capture", "Collect event date, guest count, menu preferences, and follow-up details for your team."],
  ["04", "Reservation inquiries", "Handle reservation questions and route guests toward the right next step."],
  ["05", "Call summaries", "Turn every conversation into a concise handoff your team can actually use."],
  ["06", "Staff escalation", "When a human needs to step in, the assistant knows when and how to pass it along."],
];

const faqs = [
  ["Is this a live phone line?", "Not yet. This page includes an interactive sample conversation so you can experience the flow without pretending a phone integration is live. Your consultation is where we map the right phone setup for your restaurant."],
  ["What kinds of restaurants is this for?", "The receptionist can be configured for restaurants, cafés, pizzerias, catering companies, bakeries, bars, and other hospitality businesses with recurring call workflows."],
  ["What happens during setup?", "We collect your operating details, menu and policy information, common questions, escalation preferences, and the shape of calls your team receives. Then we configure and test the assistant around those specifics."],
  ["Can it replace my staff?", "It is designed to support your team, not pretend to be your team. The assistant handles repeatable questions and captures intent so staff can focus on guests and service."],
];

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

function ReceptionistDemo() {
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(playing ? 3 : 0);
  const run = () => {
    setPlaying(true); setStep(0);
    [1, 2, 3].forEach((next, index) => setTimeout(() => setStep(next), (index + 1) * 650));
    setTimeout(() => setPlaying(false), 2600);
  };
  return <div className="demo-shell" aria-label="Interactive sample AI receptionist conversation">
    <div className="demo-top"><span className="window-dots"><i /><i /><i /></span><span className="demo-label">SAMPLE CALL / FICTIONAL DATA</span><span className="demo-status"><b /> Preview mode</span></div>
    <div className="demo-grid">
      <div className="call-column">
        <div className="call-orbit"><div className="call-icon">⌁</div></div>
        <span className="eyebrow">Incoming call</span>
        <h3>Oak &amp; Ember</h3>
        <p className="muted">Sacramento, CA · Main line</p>
        <div className="caller-card"><span className="avatar">JM</span><div><strong>Jordan Miller</strong><small>Fictional caller</small></div><span className="pulse" /></div>
        <button className="play-button" onClick={run} disabled={playing}><span>{playing ? "●" : "▶"}</span>{playing ? "Playing sample…" : "Play sample call"}</button>
      </div>
      <div className="conversation">
        <div className="conversation-head"><span>Conversation</span><span>00:0{Math.min(step + 1, 4)} / 00:42</span></div>
        <div className="messages">
          <div className={`message ai ${step >= 1 ? "show" : ""}`}><span className="speaker">AI RECEPTIONIST</span>Thanks for calling Oak &amp; Ember. How can I help today?</div>
          <div className={`message caller ${step >= 2 ? "show" : ""}`}><span className="speaker">JORDAN MILLER · FICTIONAL</span>Hi — I’m planning a dinner for about 35 people. Do you handle catering?</div>
          <div className={`message ai ${step >= 3 ? "show" : ""}`}><span className="speaker">AI RECEPTIONIST</span>We can help with that. I’ll capture your event details and have the team follow up with options.</div>
        </div>
        <div className={`summary ${step >= 3 ? "show" : ""}`}><span className="summary-mark">✓</span><div><span className="eyebrow">Call summary</span><strong>Catering inquiry captured</strong><small>35 guests · follow-up requested · Jordan Miller</small></div></div>
      </div>
    </div>
  </div>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  return <main>
    <nav className="nav"><a className="brand" href="#top"><span className="brand-mark">◔</span><span>Restaurant AI Receptionist</span></a><div className="nav-links"><a href="#how-it-works">How it works</a><a href="#capabilities">For restaurants</a><a href="#consultation">Pricing</a></div><a className="nav-cta" href="#demo">Hear a demo</a></nav>

    <section className="hero" id="top"><div className="hero-copy"><p className="kicker"><span /> Your front of house, always on</p><h1>Every call.<br />Answered.</h1><p className="hero-sub">A polished AI host that picks up, answers questions, and captures reservations while your team takes care of the room.</p><div className="hero-actions"><a className="button primary" href="#demo">Hear the host <span className="sound-icon">▮▮▮</span></a><a className="button text-button" href="#how-it-works">See how it works <Arrow /></a></div><div className="hero-foot"><span>Good food deserves<br />a greater welcome</span><span>Est. 2024</span></div></div><div className="hero-image"><div className="hero-image-note">Reservations<br />Questions<br />Special requests<br />24/7<br /><br />AI host</div><div className="call-preview"><div className="preview-head"><span className="sound-icon">▮▮▮</span><span>Incoming call · 7:42 PM</span><small>00:12</small></div><blockquote>“Do you have a table for four tonight?”</blockquote><div className="preview-foot"><span><b /> Reservation captured</span><small>4 guests · 7:30 PM <Arrow /></small></div></div></div></section>

    <section className="benefit-strip"><div><span>01　—　◷</span><p><b>24/7 call coverage</b><small>Never miss a guest, day or night.</small></p></div><div><span>02　—　♧</span><p><b>More seated guests</b><small>Turn more calls into reservations.</small></p></div><div><span>03　—　▮</span><p><b>Less time on the phone</b><small>Let AI handle the routine, so your team can focus on the room.</small></p></div></section>

    <section className="hero-demo" id="demo"><div className="section-intro"><span className="section-index">00 / EXPERIENCE</span><p>See what happens when a guest calls your restaurant and your team is already in the middle of service.</p></div><ReceptionistDemo /></section>

    <section className="problem section-dark"><div className="split-heading"><div><span className="section-index">01 / THE PROBLEM</span><h2>Your restaurant is busy.<br /><i>Your phone doesn’t stop ringing.</i></h2></div><p>Great service shouldn’t depend on someone being free to pick up. When the line rings during the rush, opportunities disappear quietly.</p></div><div className="compare"><div className="compare-card old"><div className="compare-head"><span className="compare-icon">×</span><span>Without a receptionist</span></div><div className="compare-line"><b>5:42 PM</b><span>Phone rings during dinner service</span></div><div className="compare-line"><b>5:44 PM</b><span>Guest hangs up, tries again later</span></div><div className="compare-line"><b>9:16 PM</b><span>Missed catering inquiry, no context</span></div><small>Missed calls become missed momentum.</small></div><div className="compare-card new"><div className="compare-head"><span className="compare-icon">✳</span><span>With an AI receptionist</span></div><div className="compare-line"><b>5:42 PM</b><span>Call answered with your restaurant’s voice</span></div><div className="compare-line"><b>5:44 PM</b><span>Questions handled, details captured</span></div><div className="compare-line"><b>9:16 PM</b><span>Summary waiting for your team</span></div><small>Every conversation has a next step.</small></div></div></section>

    <section className="solution" id="solution"><div className="solution-copy"><span className="section-index">02 / THE SOLUTION</span><h2>Your restaurant’s<br /><i>AI receptionist.</i></h2><p>Designed around the way your restaurant actually operates — from the questions guests ask to the moments your team needs a human handoff.</p><a className="inline-link" href="#capabilities">Explore capabilities <Arrow /></a></div><div className="mini-interface"><div className="interface-bar"><span>RestaurantAI / Oak &amp; Ember</span><span className="live-dot">● Ready</span></div><div className="interface-body"><div className="mini-call"><span className="mini-avatar">JM</span><div><strong>Jordan Miller</strong><small>Inbound call · 00:42</small></div><b>↗</b></div><div className="mini-wave">{Array.from({length: 34}, (_, i) => <i key={i} style={{height: `${15 + ((i * 17) % 42)}px`}} />)}</div><div className="mini-transcript"><span className="eyebrow">Live transcript</span><p><b>AI</b> “I’ll make sure the team has everything they need to follow up.”</p></div><div className="mini-tags"><span>Catering inquiry</span><span>35 guests</span><span>Follow-up requested</span></div></div></div></section>

    <section className="capabilities section-dark" id="capabilities"><div className="section-intro"><span className="section-index">03 / CAPABILITIES</span><h2>More than just<br /><i>answering calls.</i></h2><p>One calm, intelligent layer between your guests and the busy parts of running a restaurant.</p></div><div className="cap-grid">{capabilities.map(([n, title, copy]) => <article key={n} className="cap-card"><span className="cap-number">{n}</span><h3>{title}</h3><p>{copy}</p><Arrow /></article>)}</div></section>

    <section className="works" id="how-it-works"><div className="split-heading"><div><span className="section-index">04 / HOW IT WORKS</span><h2>Configured for<br /><i>your restaurant.</i></h2></div><p>There is no generic script. We start with the real details that make your front-of-house experience yours.</p></div><div className="steps"><div className="step"><span>01</span><div><h3>We learn your operation</h3><p>Restaurant information, hours, menu, policies, frequently asked questions, and the calls you want handled.</p></div></div><div className="step"><span>02</span><div><h3>We configure the assistant</h3><p>Voice, responses, escalation rules, and call summaries are shaped around your team and your guests.</p></div></div><div className="step"><span>03</span><div><h3>Calls get a next step</h3><p>Questions are answered, inquiries are captured, and your staff receives the context needed to follow through.</p></div></div></div></section>

    <section className="local section-dark" id="areas"><div className="local-art"><div className="radar"><span /><span /><span /></div><div className="map-label sacramento">SACRAMENTO <b>●</b></div><div className="map-label roseville">ROSEVILLE</div><div className="map-label folsom">FOLSOM</div><div className="map-label elk">ELK GROVE</div><div className="map-label rocklin">ROCKLIN</div></div><div className="local-copy"><span className="section-index">05 / LOCAL SERVICE</span><h2>Built for Sacramento<br /><i>restaurants.</i></h2><p>Local context matters. We serve restaurants across Sacramento and surrounding communities, with workflows that reflect the pace and personality of the region.</p><div className="areas-list"><span>Sacramento</span><span>Roseville</span><span>Folsom</span><span>Elk Grove</span><span>Rocklin</span><span>Rancho Cordova</span><span>Citrus Heights</span></div></div></section>

    <section className="pricing"><div className="pricing-copy"><span className="section-index">06 / CONSULTATION</span><h2>A better phone<br /><i>experience starts here.</i></h2><p>Every restaurant has a different call mix. We’ll learn yours, talk through the right configuration, and outline what a useful first version could look like.</p><a className="button primary" href="#consultation">Schedule your free consultation <Arrow /></a></div><div className="price-note"><span className="price-symbol">✳</span><strong>Pricing is shaped<br />around your operation.</strong><small>No public package claims.<br />No invented promises.<br />Just a useful conversation.</small></div></section>

    <section className="faq section-dark"><div className="section-intro"><span className="section-index">07 / QUESTIONS</span><h2>Good to know.</h2></div><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{q}</span><b>{openFaq === i ? "−" : "+"}</b></button><div className="faq-answer"><p>{a}</p></div></div>)}</div></section>

    <section className="final-cta" id="consultation"><div className="cta-orbit">✳</div><span className="section-index">08 / YOUR NEXT CUSTOMER</span><h2>Your next customer<br /><i>is calling.</i></h2><p>Make it easy to answer.</p><a className="button light" href="mailto:hello@restaurantaireceptionist.com?subject=Free consultation">Schedule your free consultation <Arrow /></a><small>Phone integration is configured during consultation.<br />Sample conversations on this site use fictional data.</small></section>
    <footer><a className="brand" href="#top"><span className="brand-mark">✳</span><span>Restaurant<span>AI</span><em>Receptionist</em></span></a><span>Restaurant phone answering for Sacramento &amp; surrounding areas.</span><span>© 2026 RestaurantAIReceptionist.com</span></footer>
  </main>;
}
