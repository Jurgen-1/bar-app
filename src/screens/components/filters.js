import { state } from "../../state";
import { render } from "../../render";

export function renderMenuFilters() {
    const container = document.createElement("div");
    container.classList.add("filters");

    state.filterCategories.forEach((category) => {
        const rendered = renderMenuFilter(category);
        container.appendChild(rendered)
    })

    app.appendChild(container);
}

function renderMenuFilter(category) {
    const button = document.createElement("button");
    button.classList.add("filter")
    button.innerText = category.name

    if (category.id === state.currentFilterId) {
        button.classList.add("selected")
    }

    button.addEventListener("click", () => {
        state.currentFilterId = category.id

        render();
    })

    return button
}