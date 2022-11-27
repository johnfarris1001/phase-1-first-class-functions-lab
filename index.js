// Code your solution in this file!

const returnFirstTwoDrivers = drivers => {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = drivers => {
    let numberOfDrivers = drivers.length;
    return [drivers[numberOfDrivers - 2], drivers[numberOfDrivers - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
    return function (fare) {
        return multiplier * fare;
    };
}

const fareDoubler = fare => {
    return createFareMultiplier(2)(fare);
}

const fareTripler = fare => {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, fn) {
    if (fn == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else {
        return returnLastTwoDrivers(drivers);
    }
}