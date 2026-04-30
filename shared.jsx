// shared.jsx — site-wide content + small components

const SITE = {
  // Contact
  email: "zeng.774@osu.edu",
  cv: "pdfs/cv.pdf",
  scholar: "https://scholar.google.com/citations?user=nvoB5SAAAAAJ",
  github: "https://github.com/zengyuxuan",
  bluesky: "https://bsky.app/profile/yuxuanzeng.bsky.social",

  // Manuscripts in preparation
  inPrep: [
    { who: "Zeng, Y., Hentz, R. E., & Osher, D. E.", t: "Dissociable neural coding of configuration and feature information in visual cortex." },
    { who: "Zeng, Y., Hentz, R. E., & Osher, D. E.", t: "Post-criterion exposure shapes the development of holistic processing." },
  ],

  // Peer-reviewed publications
  publications: [
    { yr: "2026", who: "Zeng, Y., Lu, Z., Hentz, R. E., & Osher, D. E.", t: "Face-like holistic processing in non-face stimuli.", j: "Cognitive Psychology", vol: "164, 101801", tag: "1st author", link: "https://www.sciencedirect.com/science/article/pii/S0010028526000216", pdf: "pdfs/zeng-2026-cogpsy.pdf" },
    { yr: "2024", who: "Zeng, Y., Oechslin, T. S., Widmer, D. E., Kulp, M. T., Fogt, N., Toole, A., … & Osher, D. E.", t: "Neural consequences of symptomatic convergence insufficiency: A small sample study.", j: "Ophthalmic and Physiological Optics", vol: "44(3), 537–545", tag: "1st author", link: "https://link.springer.com/article/10.1111/opo.13303", pdf: "pdfs/zeng-2024-opo.pdf" },
    { yr: "2023", who: "Li, Z., Zhang, L., Zeng, Y., Zhao, Q., & Hu, L.", t: "Gamma-band oscillations of pain and nociception: A systematic review and meta-analysis of human and rodent studies.", j: "Neuroscience & Biobehavioral Reviews", vol: "105062", tag: "", link: "https://www.sciencedirect.com/science/article/pii/S0149763423000313", pdf: "#/wip" },
    { yr: "2021", who: "Wang, F., Zhang, L., Yue, L., Zeng, Y., Zhao, Q., Gong, Q., … & Hu, L.", t: "A novel method to simultaneously record spinal cord electrophysiology and electroencephalography signals.", j: "NeuroImage", vol: "232, 117892", tag: "", link: "https://www.sciencedirect.com/science/article/pii/S1053811921001695", pdf: "pdfs/wang-2021-neuroimage.pdf" },
    { yr: "2021", who: "Wang, X. Q., Mokhtari, T., Zeng, Y. X., Yue, L. P., & Hu, L.", t: "The distinct functions of dopaminergic receptors on pain modulation: A narrative review.", j: "Neural Plasticity", vol: "", tag: "", link: "https://www.proquest.com/docview/2497888263", pdf: "pdfs/wang-2021-np.pdf" },
  ],

  // Conference presentations
  presentations: [
    { yr: "2026", who: "Zeng, Y., Hentz, R. E., & Osher, D. E.", t: "Holistic processing requires expertise, but expertise may develop rapidly.", v: "Vision Sciences Society 2026", kind: "Conference", pdf: "#/wip" },
    { yr: "2025", who: "Zeng, Y., Hentz, R. E., & Osher, D. E.", t: "Rethinking configurational and feature-based processing in visual recognition.", v: "Vision Sciences Society 2025", kind: "Conference", pdf: "pdfs/vss-2025-poster.pdf" },
    { yr: "2024", who: "Zeng, Y., Hentz, R. E., & Osher, D. E.", t: "Selectivity to object features and configuration in the ventral visual stream.", v: "Organization for Human Brain Mapping 2024", kind: "Conference", pdf: "#/wip" },
    { yr: "2024", who: "Zeng, Y., Hentz, R. E., & Osher, D. E.", t: "An occipitotemporal region that identifies relevant features.", v: "Vision Sciences Society 2024", kind: "Conference", pdf: "pdfs/vss-2024-poster.pdf" },
    { yr: "2023", who: "Zeng, Y., Fogt, N., Kulp, M., Toole, A., … & Osher, D. E.", t: "The neural consequences of symptomatic convergence insufficiency and reading.", v: "Organization for Human Brain Mapping 2023", kind: "Conference", pdf: "pdfs/ohbm-2023-poster.pdf" },
    { yr: "2023", who: "Zeng, Y., Hentz, R. E., & Osher, D. E.", t: "A novel framework to study configural and holistic processing.", v: "Vision Sciences Society 2023", kind: "Conference", pdf: "pdfs/vss-2023-poster.pdf" },
  ],

  // Patents
  patents: [
    { yr: "2021", t: "An Adaptive Multimodal Emotion Regulation System and Method.", id: "CN112618913A" },
    { yr: "2021", t: "A System for Synchronous Recording of Brain and Spinal Cord Electrophysiological Signals.", id: "CN215272834U" },
    { yr: "2021", t: "A System and Method for Synchronous Recording of Brain and Spinal Cord Electrophysiological Signals.", id: "CN112754499A" },
  ],

  // Projects
  projects: [
    {
      code: "P-01", title: "Configural and Featural Processing", year: "2022 — present",
      blurb: "Holistic processing has long been treated as a signature of face perception. Across behavioral and fMRI studies, I show that when recognition depends on configural information, non-face object perception can also become holistic, suggesting that global structure is not face-specific but a broader visual mechanism. My fMRI work further separates configural and featural processing in the brain, showing stronger dorsal involvement for configural information and stronger ventral involvement for featural information, with distinct profiles across face-selective regions. I am now extending this framework to CNNs and vision transformers to test whether holistic-style representations emerge from training pressures alone.",
      collab: "Dr. David Osher",
      outputs: ["Published in Cognitive Psychology (2026)", "Poster at VSS (2026)", "Poster at VSS (2025)", "Poster at VSS (2024)", "Poster at VSS (2023)"]
    },
    {
      code: "P-02", title: "Convergence Insufficiency", year: "2021 — 2022",
      blurb: "Symptomatic convergence insufficiency was associated with smaller arcuate fasciculi and reduced left-hemisphere radial diffusivity, with stronger reading-related symptoms linked to weaker white matter structure. These findings suggest that disrupted reading experience may have downstream neural consequences.",
      collab: "Dr. David Osher · Dr. Marjean Kulp",
      outputs: ["Published in Ophthalmic and Physiological Optics (2024)", "Poster at OHBM (2023)"]
    },
    {
      code: "P-03", title: "Pain Perception", year: "2020 — 2021",
      blurb: "This project examined pain from cortical oscillations to brain-spinal interactions, identifying gamma-band activity as a candidate marker of pain and using simultaneous spinal cord electrophysiology and EEG to study corticospinal dynamics in chronic pain.",
      collab: "Dr. Li Hu",
      outputs: ["Published in NeuroImage (2021)", "Published in Neural Plasticity (2021)", "Published in Neuroscience & Biobehavioral Reviews (2023)"]
    },
    {
      code: "P-04", title: "Visual Auditory Integration", year: "2018 — 2019",
      blurb: "Using real-world images, sounds, and videos, this project mapped the gap between perceived similarity and EEG-decodable structure, tracing how multisensory object representations emerge over time.",
      collab: "Dr. Ian Charest · Jasper van den Bosch",
      outputs: ["Poster at VSS (2019)"]
    },
  ],
};

window.SITE = SITE;

// ---- Inline highlightable word ----
function HL({ children, color = "ginger" }) {
  return (
    <span className={`hl accent-${color}`} data-hl>{children}</span>
  );
}

// ---- Confetti easter egg (citation brackets) ----
function spawnConfetti() {
  const glyphs = ["[1]", "[2]", "[†]", "[‡]", "✦", "p<.05", "n=42"];
  for (let i = 0; i < 28; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-40px";
    el.style.animationDelay = Math.random() * 0.6 + "s";
    el.style.color = ["#d97a1f", "#a52a2a", "#1a1612"][Math.floor(Math.random() * 3)];
    el.style.fontSize = 18 + Math.random() * 18 + "px";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }
}
window.spawnConfetti = spawnConfetti;

// ---- Hash routing ----
const VALID_ROUTES = ["home", "projects", "publications", "contact", "wip"];
function useRoute() {
  const parse = () => {
    const r = location.hash.replace(/^#\/?/, "");
    return VALID_ROUTES.includes(r) ? r : "home";
  };
  const [route, setRoute] = React.useState(parse);
  React.useEffect(() => {
    const onHash = () => setRoute(parse());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (r) => { location.hash = "#/" + r; }];
}
window.useRoute = useRoute;

// ---- Annotation cursor (Manuscript variant) ----
function useAnnotateCursor(enabled) {
  const [state, setState] = React.useState({ x: 0, y: 0, text: "", on: false });
  React.useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      const t = e.target.closest("[data-note]");
      if (t) {
        setState({ x: e.clientX, y: e.clientY, text: t.dataset.note, on: true });
      } else {
        setState((s) => ({ ...s, on: false }));
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);
  return state;
}
window.useAnnotateCursor = useAnnotateCursor;

// ---- Konami-ish: type "boo" to spawn confetti ----
function useEasterEggs() {
  React.useEffect(() => {
    let buf = "";
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      buf = (buf + e.key).slice(-6).toLowerCase();
      if (buf.endsWith("boo")) spawnConfetti();
      if (buf.endsWith("hi")) {
        const t = document.createElement("div");
        t.textContent = "👋";
        t.style.cssText = "position:fixed;left:50%;top:40%;font-size:80px;z-index:200;pointer-events:none;animation:pf 1s ease;transform:translate(-50%,-50%)";
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 1000);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
}
window.useEasterEggs = useEasterEggs;

Object.assign(window, { HL, SITE, spawnConfetti, useRoute, useAnnotateCursor, useEasterEggs });
