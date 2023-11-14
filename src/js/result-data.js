export function prepareScoreData () {
    import('../assets/data.json')
        .then(({ default: scoreData }) => {
            let scoreResult = 0;
            scoreData.forEach(entry => {
                createResultEl(entry['category'], entry['score'], entry['icon']);
                scoreResult += entry['score'];
            });
            populateResultScore(scoreResult);
        })
        .catch(err => {
            console.error('There was a problem fetching the data:', err);
        });
}

function createResultEl(category, score, icon) {
    const summarizedResultsContainerEl = document.querySelector('.summarized-results-container');

    const resultEl = document.createElement('div');
    const lowerCaseCat = category.toLowerCase();
    resultEl.classList.add('result', `${lowerCaseCat}-result`);

    resultEl.innerHTML = `
        <div>
            <img src="${icon}" alt="An icon representing ${lowerCaseCat} category.">
            ${category}
        </div>
        <div class="result-score">${score}<span>/ 100</span></div>
    `;

    summarizedResultsContainerEl.insertBefore(resultEl, summarizedResultsContainerEl.querySelector('.summary-btn'));
}

function populateResultScore(score) {
    const finalScore = Math.round(score / 4).toString();
    const scoreNumberEl = document.querySelector('.score-number');
    scoreNumberEl.innerHTML = finalScore;
}
