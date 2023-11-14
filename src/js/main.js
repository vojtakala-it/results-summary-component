import "../scss/main.scss";
import { documentReady } from "./documentReady";
import { prepareScoreData } from "./result-data";

documentReady(() => {
    window.addEventListener("load", () => { prepareScoreData() });
    // window.addEventListener("resize", () => updateIconSizes());
});

function updateIconSizes() {
    const icons = document.querySelectorAll('.result div img');

    icons.forEach(icon => {
        const parentWidth = icon.parentElement.clientWidth;
        const width = parentWidth * 0.25;

        icon.setAttribute('width', width);
        icon.setAttribute('height', 'auto');
    });
}

