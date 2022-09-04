const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (value) {
    return function(fare) {return value * fare}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (drivers, driversFunction) {
    if (driversFunction === returnFirstTwoDrivers) { return drivers.slice(0,2)}
    else if (driversFunction === returnLastTwoDrivers) { return drivers.slice(-2)}
}
