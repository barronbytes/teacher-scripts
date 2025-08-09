document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector("component-loader");

  if (!loader) return;

  loader.addEventListener("component-loaded", () => {
    const mobileMenu = document.querySelector("#mobile-section");
    const openBtn = document.querySelector('.toggle-menu.open');
    const closeBtn = document.querySelector('.toggle-menu.close');

    if (!mobileMenu || !openBtn || !closeBtn) {
      console.error("Toggle elements not found after component load.");
      return;
    }

    openBtn.addEventListener("click", () => {
      mobileMenu.setAttribute("data-visible", "true");
      openBtn.setAttribute("aria-expanded", "true");
      closeBtn.setAttribute("aria-expanded", "true");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.setAttribute("data-visible", "false");
      openBtn.setAttribute("aria-expanded", "false");
      closeBtn.setAttribute("aria-expanded", "false");
      openBtn.focus(); // return focus to the trigger button for keyboard users
    });
  });
});
