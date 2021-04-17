function switchTheme() {
  const currentTheme = getCurrentTheme();
  if (currentTheme == "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function setTheme(style) {
  document.querySelectorAll(".isInitialToggle").forEach((elem) => {
    elem.classList.remove("isInitialToggle");
  });
  document.documentElement.setAttribute("data-color-mode", style);
  localStorage.setItem("data-color-mode", style);
}

function getCurrentTheme() {
  const localStyle = localStorage.getItem("data-color-mode");
  const systemStyle =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  return localStyle || systemStyle;
}

function detectTheme() {
  if (window.matchMedia) {
    setTheme(getCurrentTheme());
    // listen for theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener((e) => {
      if (e.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });
  }
}

(() => {
  detectTheme();
})();
