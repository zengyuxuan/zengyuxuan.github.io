// variants/magazine.jsx — oversized display type, splash badges

function Magazine({ route, go, accent }) {
  return (
    <div className="mg page-fade">
      <div className="page">
        <header className="topbar" style={{ fontFamily: "\"Instrument Serif\"", fontWeight: "500" }}>
          <div className="masthead">
            <span style={{ fontWeight: "600", fontSize: "46px" }}>Yuxuan Zeng</span>
            <span className="issue" style={{ fontFamily: "\"Cormorant Garamond\"" }}>
</span>
          </div>
          <nav className="nav">
            <a className={route === "home" ? "active" : ""} onClick={(e) => {e.preventDefault();go("home");}} href="#/home" style={{ fontSize: "15px" }}>HOME
            </a>
            <a className={route === "projects" ? "active" : ""} onClick={(e) => {e.preventDefault();go("projects");}} href="#/projects" style={{ fontSize: "15px" }}>Projects</a>
            <a className={route === "publications" ? "active" : ""} onClick={(e) => {e.preventDefault();go("publications");}} href="#/publications" style={{ fontSize: "15px" }}>Publications</a>
            <a className={route === "contact" ? "active" : ""} onClick={(e) => {e.preventDefault();go("contact");}} href="#/contact" style={{ fontSize: "15px" }}>Contact</a>
          </nav>
        </header>

        {route === "home" && <MgHome />}
        {route === "projects" && <MgProjects />}
        {route === "publications" && <MgPubs />}
        {route === "contact" && <MgContact />}
        {route === "wip" && <MgWip go={go} />}

        <div className="stripe" style={{ height: "35px", fontSize: "15px" }}>
          <div className="marquee">
            <span style={{ color: "rgb(217, 122, 31)", fontSize: "15px" }}>Looking for — a postdoc in vision and computational neuroscience</span>
            <span style={{ fontSize: "15px" }}>Working on — an fMRI manuscript</span>
            <span style={{ fontSize: "15px" }}>Home team — two newlyweds + two cats, Lumos and Dobby</span>
            <span style={{ fontSize: "15px" }}>Collected joys — LEGO, stationery</span>
            <span style={{ fontSize: "15px", color: "rgb(217, 122, 31)" }}>Looking for — a postdoc in vision and computational neuroscience</span>
            <span style={{ fontSize: "15px" }}>Working on — an fMRI manuscript</span>
            <span>Home team — two newlyweds + two cats, Lumos and Dobby</span>
            <span>Collected joys — LEGO, stationery</span>
          </div>
        </div>
      </div>
    </div>);}

function MgHome() {
  return (
    <section className="hero">
      <div className="kicker">LAST UPDATE 05/2026</div>
      <h1 className="display" style={{ fontSize: "100px", lineHeight: "1" }}>
        I study <span className="swap">how people</span><br />
        make sense of the <span className="lab" style={{ fontSize: "85px" }}>
visual world</span>.
      </h1>
      <div className="splash" style={{ fontWeight: "600", fontFamily: "\"Instrument Serif\"", fontSize: "35px" }}>
        Looking for PostDoc<br />
        <small>
</small>
      </div>
      <div className="below">
        <p className="lede" style={{ fontSize: "21px", maxWidth: "none", width: "740px" }}>
          <span className="dropcap">C</span>urrently I study how vision makes sense of global and local information. Holistic processing has long been treated as a special property of face perception. My work challenges that view. Using carefully controlled non-face objects, I show that when recognition depends on configural information, object perception can also become holistic. This suggests that global structure is not a niche component of face perception, but a fundamental source of visual information that has been overlooked. I use behavioral experiments, neuroimaging, and computational modeling to study how humans and models represent local features, global structure, and the relationship between them.
        </p>
        <div className="meta-grid">
          <div><b style={{ fontSize: "13px" }}>Affiliation</b><span style={{ fontSize: "15px" }}>Ohio State University<br />Dept. of Psychology</span></div>
          <div><b style={{ fontSize: "13px" }}>Position</b><span style={{ fontSize: "15px" }}>5th-year PhD candidate</span></div>
          <div><b style={{ fontSize: "13px" }}>Advisor</b><span style={{ fontSize: "15px" }}>Dr. David Osher</span></div>
          <div><b style={{ fontSize: "13px" }}>Curriculum vitae</b><span><a href={SITE.cv} style={{ fontSize: "15px" }}>PDF →</a></span></div>
          <div><b style={{ fontSize: "13px" }}>Email</b><span><a href={`mailto:zeng.774@osu.edu`} style={{ fontSize: "15px" }}>zeng.774@osu.edu</a></span></div>
        </div>
      </div>
    </section>);}
function MgProjects() {
  const items = [
  { ...SITE.projects[0], status: "live", accent: "var(--crimson)" },
  { ...SITE.projects[1], status: "published", accent: "var(--ink)" },
  { ...SITE.projects[2], status: "published", accent: "var(--crimson)" },
  { ...SITE.projects[3], status: "paused", accent: "var(--ginger)" }];

  const statusLabel = { live: "LIVE", published: "PUBLISHED", paused: "ON HOLD" };
  const hero = items[0];
  const rest = items.slice(1);

  // small reusable bits
  const Meta = ({ p, big }) =>
  <header style={{
    display: "flex", alignItems: "center", flexWrap: "wrap", gap: big ? 16 : 12,
    fontFamily: "var(--mono)", fontSize: big ? 12 : 10.5,
    letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ink-faint)"
  }}>
      <span style={{ color: p.accent, fontWeight: 600 }}>{p.code}</span>
      <span style={{ color: "var(--rule)" }}>·</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--ink-soft)" }}>
        <span style={{
        width: big ? 9 : 7, height: big ? 9 : 7, borderRadius: "50%",
        background: p.accent,
        boxShadow: p.status === "live" ? `0 0 0 4px ${p.accent}22` : "none"
      }}></span>
        {statusLabel[p.status]}
      </span>
      <span style={{ color: "var(--rule)" }}>·</span>
      <span style={{ color: "var(--ink-faint)" }}>{p.year}</span>
    </header>;


  const OutputList = ({ items, accent, dense }) =>
  <ul style={{
    listStyle: "none", padding: 0, margin: 0,
    display: "flex", flexDirection: "column", gap: dense ? 6 : 8
  }}>
      {items.map((o, k) =>
    <li key={k} style={{
      fontFamily: "var(--serif-body)",
      fontSize: dense ? 13.5 : 15.5,
      lineHeight: 1.45, color: "var(--ink)",
      paddingLeft: 18, position: "relative"
    }}>
          <span aria-hidden="true" style={{
        position: "absolute", left: 0, top: dense ? 7 : 9,
        width: 8, height: 1.5, background: accent
      }}></span>
          {o}
        </li>
    )}
    </ul>;


  const SectionLabel = ({ children, accent }) =>
  <div style={{
    fontFamily: "var(--mono)", fontSize: 9.5,
    letterSpacing: ".24em", textTransform: "uppercase",
    color: accent, fontWeight: 600, marginBottom: 6
  }}>{children}</div>;

  return (
    <section style={{ paddingTop: 24 }}>
      <h1 className="display" style={{ lineHeight: 1.0, margin: "0 0 48px 0", letterSpacing: "-.04em", fontSize: "90px" }}>
        Past <span className="swap">and</span> current.
      </h1>
      {/* HERO — full-width featured project */}
      <article className="proj-card" style={{
        background: "var(--paper)",
        border: "1px solid var(--rule)",
        borderTop: `8px solid ${hero.accent}`,
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)",
        position: "relative",
        overflow: "hidden",
        marginBottom: 36
      }}>
        <div aria-hidden="true" style={{
          fontFamily: "var(--serif-display)", fontSize: 520, fontWeight: 400,
          lineHeight: .8, letterSpacing: "-.06em",
          color: hero.accent, opacity: 0.07,
          position: "absolute", right: -20, top: -60, pointerEvents: "none", zIndex: 0
        }}>01</div>

        {/* LEFT: meta + huge title + lede */}
        <div style={{
          padding: "36px 44px 40px",
          display: "flex", flexDirection: "column", gap: 20,
          position: "relative", zIndex: 1, borderRight: "1px solid var(--rule)"
        }}>
          <Meta p={hero} big />
          <h2 style={{
            fontFamily: "var(--serif-display)", fontSize: 78, fontWeight: 400,
            margin: 0, lineHeight: .98, letterSpacing: "-.025em", textWrap: "balance"
          }}>
            {hero.title}
          </h2>
          <p style={{
            margin: 0, fontFamily: "var(--serif-body)",
            fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)"
          }}>
            {hero.blurb}
          </p>
          <div style={{ marginTop: 4 }}>
            <SectionLabel accent={hero.accent}>Collaborators</SectionLabel>
            <div style={{
              fontFamily: "var(--serif-body)", fontSize: 15.5,
              lineHeight: 1.5, color: "var(--ink)"
            }}>{hero.collab}</div>
          </div>
        </div>

        {/* RIGHT: outputs */}
        <aside style={{
          padding: "36px 40px 40px",
          background: `${hero.accent}08`,
          position: "relative", zIndex: 1,
          display: "flex", flexDirection: "column", gap: 14
        }}>
          <SectionLabel accent={hero.accent}>Outputs</SectionLabel>
          <OutputList items={hero.outputs} accent={hero.accent} />
        </aside>
      </article>

      {/* ROW — three smaller cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 24
      }}>
        {rest.map((p, i) =>
        <article key={p.code} className="proj-card" style={{
          background: "var(--paper)",
          border: "1px solid var(--rule)",
          borderTop: `6px solid ${p.accent}`,
          display: "flex", flexDirection: "column",
          position: "relative", overflow: "hidden",
          padding: "22px 22px 24px", gap: 14
        }}>
            <div aria-hidden="true" style={{
            fontFamily: "var(--serif-display)", fontSize: 200, fontWeight: 400,
            lineHeight: .85, letterSpacing: "-.06em",
            color: p.accent, opacity: 0.08,
            position: "absolute", right: -10, top: -20, pointerEvents: "none", zIndex: 0
          }}>
              {String(i + 2).padStart(2, "0")}
            </div>

            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
              <Meta p={p} />
              <h3 style={{
              fontFamily: "var(--serif-display)", fontSize: 30, fontWeight: 400,
              margin: 0, lineHeight: 1.05, letterSpacing: "-.015em", textWrap: "balance"
            }}>
                {p.title}
              </h3>
              <p style={{
              margin: 0, fontFamily: "var(--serif-body)",
              fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-soft)"
            }}>
                {p.blurb}
              </p>
            </div>

            <div style={{
            position: "relative", zIndex: 1, marginTop: "auto",
            paddingTop: 14, borderTop: "1px solid var(--rule)",
            display: "flex", flexDirection: "column", gap: 12
          }}>
              <div>
                <SectionLabel accent={p.accent}>Collaborators</SectionLabel>
                <div style={{
                fontFamily: "var(--serif-body)", fontSize: 13.5,
                lineHeight: 1.45, color: "var(--ink)"
              }}>{p.collab}</div>
              </div>
              <div>
                <SectionLabel accent={p.accent}>Outputs</SectionLabel>
                <OutputList items={p.outputs} accent={p.accent} dense />
              </div>
            </div>
          </article>
        )}
      </div>
    </section>);

}

function MgPubs() {
  // group publications by year (descending)
  const byYear = (arr) => {
    const groups = {};
    arr.forEach((p) => {(groups[p.yr] = groups[p.yr] || []).push(p);});
    return Object.keys(groups).sort((a, b) => b.localeCompare(a)).map((y) => [y, groups[y]]);
  };

  const SectionTitle = ({ children, accent = "var(--ink)" }) =>
  <div style={{
    display: "flex", alignItems: "baseline", gap: 18,
    marginTop: 56, marginBottom: 22,
    borderBottom: `2px solid ${accent}`, paddingBottom: 10
  }}>
      <h2 style={{
      fontFamily: "var(--serif-display)", fontSize: 38, fontWeight: 400,
      margin: 0, letterSpacing: "-.02em", color: accent
    }}>{children}</h2>
    </div>;


  const YearLabel = ({ y }) =>
  <div style={{
    fontFamily: "var(--serif-display)", fontSize: 56, lineHeight: 1,
    color: "var(--crimson)", letterSpacing: "-.02em"
  }}>{y}</div>;


  return (
    <section style={{ paddingTop: 24 }}>
      <h1 className="display" style={{ fontSize: "90px", margin: "0 0 16px", letterSpacing: "-.04em", lineHeight: 1.0 }}>
        Bibliography, <span className="lab">2021—</span>
      </h1>

      {/* IN PREP highlight block */}
      <div style={{
        marginTop: 44,
        background: "var(--paper)",
        border: "1px solid var(--rule)",
        borderTop: "8px solid var(--crimson)",
        padding: "28px 32px 30px",
        position: "relative", overflow: "hidden"
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", right: -18, top: -50,
          fontFamily: "var(--serif-display)", fontSize: 320, lineHeight: .8,
          color: "var(--crimson)", opacity: 0.06, letterSpacing: "-.06em",
          pointerEvents: "none"
        }}>∴</div>
        <div style={{
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".24em",
          textTransform: "uppercase", color: "var(--crimson)", fontWeight: 600,
          marginBottom: 18, position: "relative", zIndex: 1
        }}>
          In Preparation · {SITE.inPrep.length} manuscripts
        </div>
        <ul style={{
          listStyle: "none", padding: 0, margin: 0,
          display: "flex", flexDirection: "column", gap: 18,
          position: "relative", zIndex: 1
        }}>
          {SITE.inPrep.map((p, i) =>
          <li key={i} style={{
            display: "grid", gridTemplateColumns: "32px 1fr",
            gap: 18, alignItems: "baseline"
          }}>
              <span style={{
              fontFamily: "var(--serif-display)", fontSize: 28,
              color: "var(--crimson)", lineHeight: 1
            }}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div style={{
                fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".12em",
                color: "var(--ink-faint)", textTransform: "uppercase", marginBottom: 4
              }}>{p.who}</div>
                <div style={{
                fontFamily: "var(--serif-display)", fontSize: 22, lineHeight: 1.25,
                color: "var(--ink)", letterSpacing: "-.005em"
              }}>{p.t}</div>
              </div>
            </li>
          )}
        </ul>
      </div>

      {/* PUBLICATIONS by year */}
      <SectionTitle>Publications</SectionTitle>
      {byYear(SITE.publications).map(([y, pubs], gi) =>
      <div key={y} style={{
        display: "grid", gridTemplateColumns: "120px 1fr", gap: 28,
        padding: "22px 0", borderTop: gi === 0 ? "none" : "1px solid var(--rule)"
      }}>
          <YearLabel y={y} />
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {pubs.map((p, i) =>
          <article key={i}>
                <div style={{
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em",
              color: "var(--ink-faint)", textTransform: "uppercase", marginBottom: 6
            }}>{p.who}</div>
                <h3 style={{
              fontFamily: "var(--serif-display)", fontSize: 24, fontWeight: 400,
              margin: "0 0 6px", lineHeight: 1.2, letterSpacing: "-.005em",
              color: "var(--ink)"
            }}>{p.t}</h3>
                <div style={{ fontStyle: "italic", color: "var(--ink-soft)", fontSize: 15.5 }}>
                  {p.j}{p.vol && <span style={{ fontStyle: "normal", color: "var(--ink-faint)" }}>, {p.vol}</span>}
                  {p.tag && <span style={{
                marginLeft: 12, fontStyle: "normal",
                background: "var(--ginger)", color: "var(--cream)",
                fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: ".18em",
                textTransform: "uppercase", padding: "3px 8px", verticalAlign: "1px"
              }}>{p.tag}</span>}
                </div>
                <div className="pub-chips" style={{ marginTop: 6 }}>
                  {p.link && <a href={p.link} target="_blank" rel="noopener">[link]</a>}
                  {p.pdf && <a href={p.pdf}>[pdf]</a>}
                </div>
              </article>
          )}
          </div>
        </div>
      )}

      {/* PRESENTATIONS by year */}
      <SectionTitle accent="var(--ginger)">Presentations</SectionTitle>
      {byYear(SITE.presentations).map(([y, talks], gi) =>
      <div key={y} style={{
        display: "grid", gridTemplateColumns: "120px 1fr", gap: 28,
        padding: "22px 0", borderTop: gi === 0 ? "none" : "1px solid var(--rule)"
      }}>
          <div style={{
          fontFamily: "var(--serif-display)", fontSize: 56, lineHeight: 1,
          color: "var(--ginger)", letterSpacing: "-.02em"
        }}>{y}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {talks.map((p, i) =>
          <article key={i}>
                <div style={{
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em",
              color: "var(--ink-faint)", textTransform: "uppercase", marginBottom: 4
            }}>{p.who}</div>
                <h3 style={{
              fontFamily: "var(--serif-display)", fontSize: 22, fontWeight: 400,
              margin: "0 0 4px", lineHeight: 1.25, letterSpacing: "-.005em"
            }}>{p.t}</h3>
                <div style={{ fontSize: 14.5, color: "var(--ink-soft)" }}>
                  <span style={{ fontStyle: "italic" }}>{p.v}</span>
                  <span style={{
                marginLeft: 10, fontFamily: "var(--mono)", fontSize: 9.5,
                letterSpacing: ".18em", textTransform: "uppercase",
                color: "var(--ginger)", fontWeight: 600,
                border: "1px solid var(--ginger)", padding: "2px 7px", verticalAlign: "1px"
              }}>{p.kind}</span>
                </div>
                <div className="pub-chips" style={{ marginTop: 6 }}>
                  {p.pdf && <a href={p.pdf}>[pdf]</a>}
                </div>
              </article>
          )}
          </div>
        </div>
      )}

      {/* PATENTS by year */}
      <SectionTitle accent="var(--ink)">Patents</SectionTitle>
      {byYear(SITE.patents).map(([y, pats], gi) =>
      <div key={y} style={{
        display: "grid", gridTemplateColumns: "120px 1fr", gap: 28,
        padding: "22px 0", borderTop: gi === 0 ? "none" : "1px solid var(--rule)"
      }}>
          <div style={{
          fontFamily: "var(--serif-display)", fontSize: 56, lineHeight: 1,
          color: "var(--ink)", letterSpacing: "-.02em"
        }}>{y}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {pats.map((p, i) =>
          <article key={i}>
                <h3 style={{
              fontFamily: "var(--serif-display)", fontSize: 22, fontWeight: 400,
              margin: "0 0 6px", lineHeight: 1.25, letterSpacing: "-.005em"
            }}>{p.t}</h3>
                <div style={{
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".18em",
              textTransform: "uppercase", color: "var(--ink-soft)",
              display: "inline-flex", alignItems: "center", gap: 8
            }}>
                  <span style={{
                border: "1px solid var(--ink)", padding: "3px 9px",
                color: "var(--ink)", fontWeight: 600
              }}>Patent · CN</span>
                  <span>{p.id}</span>
                </div>
              </article>
          )}
          </div>
        </div>
      )}
    </section>);

}

function MgContact() {
  return (
    <section style={{ paddingTop: 36 }}>
      <h1 className="display" style={{ color: "rgb(26, 22, 18)", fontSize: "90px" }}>
        Get in <span className="swap">touch</span>.
      </h1>
      <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        <div>
          <p style={{ fontSize: 22, lineHeight: 1.5, fontFamily: "var(--serif-body)", color: "var(--ink)" }}>For potential collaborations, advisors, or just to say hi —

          </p>
          <a href={`mailto:${SITE.email}`} style={{ display: "inline-block", marginTop: 14, fontFamily: "var(--serif-display)", color: "var(--crimson)", borderBottom: "3px solid var(--ginger)", paddingBottom: 4, fontSize: "40px" }}>{SITE.email}</a>
        </div>
        <div className="meta-grid">
          <div style={{ fontSize: "15px" }}><b style={{ fontSize: "15px" }}>Office</b>Lezenby Hall 207</div>
          <div><b style={{ fontSize: "15px" }}>BLUESKY</b><a href={SITE.bluesky} target="_blank" rel="noopener" style={{ fontSize: "15px" }}>@yuxuanzeng →</a></div>
          <div><b style={{ fontSize: "15px" }}>Scholar</b><a href={SITE.scholar} target="_blank" rel="noopener" style={{ fontSize: "15px" }}>profile →</a></div>
          <div><b style={{ fontSize: "15px" }}>GitHub</b><a href={SITE.github} target="_blank" rel="noopener" style={{ fontSize: "15px" }}>@zengyuxuan →</a></div>
        </div>
      </div>
    </section>);

}

function MgWip({ go }) {
  const quips = [
    "This corner of the site is still in the lab.",
    "The PDF is technically real. The link is technically not.",
    "Pre-print of a pre-print of a pre-print.",
    "n = 0 (so far).",
    "Currently being thought about, possibly even written.",
    "Awaiting peer review from future-Yuxuan.",
  ];
  const [q] = React.useState(() => quips[Math.floor(Math.random() * quips.length)]);
  return (
    <section className="wip-page">
      <div className="wip-stamp">DRAFT · NOT YET FILED</div>

      <h1 className="wip-headline">
        <span className="wip-w1">Working</span>
        <span className="wip-w2">on it.</span>
      </h1>

      <p className="wip-quip">"{q}"</p>

      <div className="wip-checklist" aria-hidden="true">
        <div className="wip-cl-eyebrow">Editor's checklist</div>
        <div className="wip-cl-rule"></div>
        <ol>
          <li><span className="wip-cl-box"></span> Upload the PDF</li>
          <li><span className="wip-cl-box"></span> Double-check author list</li>
          <li className="done"><span className="wip-cl-box checked">✕</span> Procrastinate</li>
        </ol>
        <div className="wip-cl-rule"></div>
        <div className="wip-cl-foot">/ folio 02 — pending</div>
      </div>

      <div className="wip-actions">
        <a className="wip-btn" href="#/home" onClick={(e) => { e.preventDefault(); go("home"); }}>← back home</a>
        <a className="wip-btn alt" href={`mailto:${SITE.email}`}>email me for the file</a>
      </div>

      <div className="wip-progress" aria-hidden="true">
        <span>PROGRESS</span>
        <div className="wip-bar"><i></i></div>
        <span className="wip-pct">73%*</span>
      </div>
      <div className="wip-footnote">* fabricated for emotional support</div>
    </section>
  );
}

window.Magazine = Magazine;