function solve(arg1, arg2, arg3) {
    let stepsNumber = Number(arg1);
    let stepsMetersHr = Number(arg2);
    let studentSpeed = Number(arg3);

    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMeterSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMeterSec;
    let rest = Math.floor(distanceMeters / 500);

    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - (minutes * 60));
    let hours = Math.floor(time / 3600);

    console.log((hours < 10 ? "0" : "") 
    + hours + ":" + (minutes + rest < 10 ? "0" : "") 
    + (minutes + rest) + ":" + (seconds < 10 ? "0" : "") 
    + seconds);

    
}

solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)