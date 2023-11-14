import "../scss/main.scss";
import { documentReady } from "./documentReady";
import { prepareScoreData } from "./result-data";

documentReady(() => {
    window.addEventListener("load", () => {
        prepareScoreData();
        updateResultText();
    });
    window.addEventListener("resize", () => updateResultText());
});

function updateResultText() {
    const resultTextEl = document.querySelector('.result-text');

    if (window.innerWidth <= 650) {
        resultTextEl.innerHTML = `
            You scored higher than 65% of the<br>
            people who have taken these tests.
        `;
    } else {
        resultTextEl.innerHTML = `
            You scored higher than 65% of<br>
            the people who have taken<br>
            these tests.
        `;
    }
}
