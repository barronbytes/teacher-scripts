class ComponentLoader extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute('src');
    if (!src) return;

    fetch(src)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then(html => {
        this.innerHTML = html;
      })
      .catch(err => {
        console.error(`ComponentLoader error (${src}):`, err);
        window.location.href = 'frontend/pages/404.html';
      });
  }
}

customElements.define('component-loader', ComponentLoader);
