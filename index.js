// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// returnLastTwoDrivers function
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier higher-order function
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// fareDoubler function
const fareDoubler = createFareMultiplier(2);

// fareTripler function
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers function
function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
}

// Test drivers array
const drivers = ['John', 'Jane', 'Doe', 'Smith'];

// Testing the functions
console.log(returnFirstTwoDrivers(drivers)); // Output: ['John', 'Jane']
console.log(returnLastTwoDrivers(drivers));  // Output: ['Doe', 'Smith']
console.log(createFareMultiplier(4)(10));    // Output: 40 (4 times 10)
console.log(fareDoubler(20));                // Output: 40 (2 times 20)
console.log(fareTripler(15));                // Output: 45 (3 times 15)
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['John', 'Jane']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  // Output: ['Doe', 'Smith']

