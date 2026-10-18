(() => {
  const root = document.documentElement;
  const storageKey = "elsa-theme";
  let saved = null;
  try {
    saved = localStorage.getItem(storageKey);
  } catch {}
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (prefersDark ? "dark" : "light");

  root.setAttribute("data-theme", initial);

  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  const syncLabel = () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", `Switch to ${next} mode`);
  };

  syncLabel();

  button.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {}
    syncLabel();
  });
})();
