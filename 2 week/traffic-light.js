"use strict";


function getCurrentState(trafficLight) {
	return trafficLight.possibleStates[trafficLight.stateIndex];
}

function getNextStateIndex(trafficLight) {

	switch (trafficLight.stateIndex) {
		case 0:
			trafficLight.stateIndex++;
			break;
		case 1:
			trafficLight.stateIndex++;
			break;
		case 2:
			trafficLight.stateIndex = 0;
			break;
	}
	return trafficLight.stateIndex;
}


function waitSync(secs) {
	const start = Date.now();
	while (Date.now() - start < secs * 1000) {
		// nothing do to here
	}
}

function main() {
	const trafficLight = {
		possibleStates: ["green", "orange", "red"],
		stateIndex: 0,
	};

	for (let cycle = 0; cycle < 6; cycle++) {
		const currentState = getCurrentState(trafficLight);
		console.log(cycle, "The traffic light is now", currentState);

		waitSync(1); // Wait a second before going to the next state
		trafficLight.stateIndex = getNextStateIndex(trafficLight);
	}
}

main();
/**
 * The output should be:

0 The traffic light is now green
1 The traffic light is now orange
2 The traffic light is now red
3 The traffic light is now green
4 The traffic light is now orange
5 The traffic light is now red

*/
