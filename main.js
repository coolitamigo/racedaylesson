let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnersAge = 12;

if (runnersAge >= 18 && registeredEarly === true) {
    raceNumber += 1000;
}

if (runnersAge >= 18 && registeredEarly === true) {
    console.log(`Your race number is ${raceNumber} and you will race at 9:30AM.`);
} else if (runnersAge >= 18 && registeredEarly === false) {
    console.log(`Your race number is ${raceNumber} and you will race at 11AM.`);
} else {
    console.log(`Your race number is ${raceNumber} and you will race at 12:30PM.`);
}
