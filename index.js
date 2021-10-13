//Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    const newArray = [array[0], array[1]]
    return newArray
}
const returnLastTwoDrivers = function(lastArray) {
    const lastNewArray = [lastArray[lastArray.length -2], lastArray[lastArray.length -1]]
    return lastNewArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return multiplier * fare
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, secondthang = '') {
    if (secondthang === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}
