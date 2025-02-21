'use strict'

function runExperiment(sampleSize) {

	const valueCounts = [0, 0, 0, 0, 0, 0];
	for (let i=0; i<sampleSize;i++){
		let randomNum = Math.floor(Math.random()*6) + 1;
valueCounts[randomNum-1]++;
	}
const results = [];
let sumCounts = valueCounts.reduce((sum, item) => sum + item,0);
for (let item of valueCounts){
let perсentValue = ((item/sumCounts)*100).toFixed(2);
results.push(perсentValue);
}
return results;
}




function checkPerсent(result){
return result.reduce((sum, item) => sum + (+item),0);
}




function main() {
	const sampleSizes = [100, 1000, 1000000];
	for(let item of sampleSizes){
		let experimentResult = runExperiment(item);
      let sumPercentage = checkPerсent(experimentResult);
		console.log(experimentResult);
		console.log(sumPercentage);
	}

 }
 
 main();