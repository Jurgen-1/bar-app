export function renderMenuHeader() {
    const template = document.querySelector("#menu-header-template");
    const node = template.content.cloneNode(true);
    app.appendChild(node);
}