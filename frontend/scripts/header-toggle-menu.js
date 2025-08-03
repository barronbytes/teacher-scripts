document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector("component-loader");

  if (!loader) return;

  loader.addEventListener("component-loaded", () => {
    const mobileMenu = document.querySelector("#mobile-section");
    const openBtn = document.querySelector('button[aria-controls="mobile-section"] img[alt="Open mobile menu"]')?.closest("button");
    const closeBtn = document.querySelector('button[aria-controls="mobile-section"] img[alt="Close mobile menu"]')?.closest("button");

    if (!mobileMenu || !openBtn || !closeBtn) {
      console.error("Toggle elements not found after component load.");
      return;
    }

    openBtn.addEventListener("click", () => {
      mobileMenu.style.display = "flex";
      mobileMenu.setAttribute("aria-expanded", "true");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.style.display = "none";
      mobileMenu.setAttribute("aria-expanded", "false");
    });
  });
});
