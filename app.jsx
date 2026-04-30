// app.jsx — magazine-only

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "ginger",
  "showHints": true
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = useRoute();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEasterEggs();

  // keyboard shortcuts: g+h/p/u/c nav
  React.useEffect(() => {
    let last = "", lastT = 0;
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      const now = Date.now();
      if (last === "g" && now - lastT < 1200) {
        if (e.key === "p") setRoute("projects");
        if (e.key === "h") setRoute("home");
        if (e.key === "u") setRoute("publications");
        if (e.key === "c") setRoute("contact");
        last = ""; lastT = 0;
        return;
      }
      last = e.key; lastT = now;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setRoute]);

  return (
    <>
      <Magazine key={route} route={route} go={setRoute} accent={t.accent} />
      {t.showHints && (
        <div className="kbd-hint">
          <kbd>g</kbd>+<kbd>h/p/u/c</kbd> nav · type <kbd>boo</kbd> for confetti
        </div>
      )}
      <TweaksPanel>
        <TweakSection label="Color" />
        <TweakRadio label="Lead accent" value={t.accent}
          options={["ginger", "crimson"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Interface" />
        <TweakToggle label="Keyboard hints" value={t.showHints}
          onChange={(v) => setTweak("showHints", v)} />
        <TweakButton label="🎉 Confetti" onClick={() => spawnConfetti()} />
      </TweaksPanel>
    </>
  );
}

(function mountApp(){
  const rootEl = document.getElementById("root");
  if (!rootEl) { document.addEventListener("DOMContentLoaded", mountApp, { once: true }); return; }
  if (rootEl.__mounted) return;
  rootEl.__mounted = true;
  ReactDOM.createRoot(rootEl).render(<App />);
})();
