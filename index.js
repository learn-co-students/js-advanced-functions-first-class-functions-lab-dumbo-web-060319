function returnFirstTwoDrivers(arrayOfDrivers) {
    let firstTwoDrivers = [];
    for (let i = 0; i < 2; i++) {
        firstTwoDrivers.push(arrayOfDrivers[i])
    }

    return firstTwoDrivers
}

function returnLastTwoDrivers(arrayOfDrivers) {
    let lastTwoDrivers = [];
    for (let i = arrayOfDrivers.length - 2; i < arrayOfDrivers.length; i++) {
        lastTwoDrivers.push(arrayOfDrivers[i]);
    }
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function (num) {
        return num * num
    }
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}