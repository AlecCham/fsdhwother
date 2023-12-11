let canDrive = true;
let hasDriverLicense = true;

let eligibleDriver = canDrive && hasDriverLicense;
console.log(eligibleDriver);

if (canDrive & hasDriverLicense) {
    console.log("You have a driver.")
} else {
    console.log("You screwed or look for more driver who knows how to drive and has driver license.")
}

let hour = 5;

if (hour >= 6 && hour < 12) {
    console.log("Good Morning")
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}