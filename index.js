// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > hq) {
        return pickupLocation - hq;
    }
    else if (pickupLocation < hq) {
        return hq - pickupLocation;
    }
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else if (start < destination) {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if ((distanceTravelledInFeet(start, destination) > 400) && (distanceTravelledInFeet(start, destination) <= 2000)) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if ((distanceTravelledInFeet(start, destination) > 2000) && (distanceTravelledInFeet(start, destination) <= 2500)) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return `cannot travel that far`;
    }
}