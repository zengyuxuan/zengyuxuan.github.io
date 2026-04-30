// tweaks-panel.jsx — production stub
// The original tweaks panel was a design-time editor for Claude Design.
// In production we don't want it visible, but app.jsx still calls
// useTweaks(...) and <TweaksPanel>...</TweaksPanel>, so we provide
// minimal stubs that keep the defaults and render nothing.

function useTweaks(defaults) {
  // Always return the defaults; setTweak is a no-op in production.
  const [t] = React.useState(defaults || {});
  const setTweak = () => {};
  return [t, setTweak];
}

// All visual components return null so nothing renders.
function TweaksPanel() { return null; }
function TweakSection() { return null; }
function TweakRadio() { return null; }
function TweakToggle() { return null; }
function TweakButton() { return null; }
function TweakSlider() { return null; }
function TweakStepper() { return null; }
function TweakColor() { return null; }
function TweakSelect() { return null; }

Object.assign(window, {
  useTweaks, TweaksPanel,
  TweakSection, TweakRadio, TweakToggle, TweakButton,
  TweakSlider, TweakStepper, TweakColor, TweakSelect,
});
