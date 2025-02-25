'use strict'

function runExperiment(sampleSize) {
    const valueCounts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < sampleSize; i++) {
        let randomNum = Math.floor(Math.random() * 6);
        valueCounts[randomNum]++;
    }

    const results = [];
    let sumCounts = valueCounts.reduce((sum, item) => sum + item, 0);
    for (let item of valueCounts) {
        let percentValue = ((item / sumCounts) * 100).toFixed(2);
        results.push(percentValue);
    }
    return results;
}

function checkPercent(result) {
    return result.reduce((sum, item) => sum + (+item), 0);
}

function main() {
    const sampleSizes = [100, 1000, 1000000];
    for (let item of sampleSizes) {
        let experimentResult = runExperiment(item);
        let sumPercentage = checkPercent(experimentResult);
        console.log(experimentResult);
        console.log(sumPercentage);
    }
}

main();
