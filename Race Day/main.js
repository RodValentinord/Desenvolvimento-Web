let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegistration = true;
let runnerAge = 19;

if (runnerAge > 18 && runnerRegistration === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && runnerRegistration === true) {
  console.log(`${raceNumber} will race at 9:30 am`);
} else if (runnerAge > 18 && runnerRegistration === false) {
  console.log(`${raceNumber} will race at 11:00 am`);
}

if (runnerAge < 18) {
  console.log(`${raceNumber} will race at 12:30 pm`);
}
else if(runnerAge === 18){
    console.log('see the registration desk')
}