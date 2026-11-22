const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");

function syncThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
}
syncThemeButton();

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
  syncThemeButton();
});

navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  navToggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
  navLinks.classList.toggle("open", !open);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    navLinks.classList.remove("open");
  }
});

const copyButton = document.querySelector(".copy-email");
const toast = document.querySelector(".toast");
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("xthabarnabas2007@gmail.com");
  } catch {
    const input = document.createElement("textarea");
    input.value = "xthabarnabas2007@gmail.com";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  copyButton.classList.add("copied");
  copyButton.setAttribute("aria-label", "Copied");
  copyButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4 10-10"/></svg><span>Copied ✓</span>';
  toast.classList.add("show");
  setTimeout(() => {
    copyButton.classList.remove("copied");
    copyButton.setAttribute("aria-label", "Copy email address");
    copyButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg><span>Email Address</span>';
    toast.classList.remove("show");
  }, 2000);
});

document.getElementById("year").textContent = new Date().getFullYear();
