"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
var people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
var arr1 = inventors.filter(function (investor) { return investor.year >= 1500 && investor.year <= 1599; });
console.table(arr1);
// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
var arr2 = inventors.map(function (investor) { return [investor.first, investor.last]; });
console.table(arr2);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
var copyInventorsArray = __spreadArray([], inventors, true);
var arr3 = copyInventorsArray.sort(function (a, b) { return a.year - b.year; });
console.table(arr3);
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
var arr4 = inventors.reduce(function (acc, elem) { return acc + (elem.passed - elem.year); }, 0);
console.log(arr4);
// 5. Sort the inventors by years lived
var copyInventors = [].concat(inventors);
var arr5 = copyInventors.sort(function (a, b) { return (b.passed - b.year) - (a.passed - a.year); });
console.table(arr5);
// 7. sort Exercise
// Sort the people alphabetically by last name
var copyPeople = __spreadArray([], people, true);
var arr7 = copyPeople.sort(function (a, b) { return a.split(', ')[1].toLowerCase() > b.split(', ')[1].toLowerCase() ? 1 : -1; });
console.table(arr7);
// 8. Reduce Exercise
// Sum up the instances of each of these
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
var arr8 = data.reduce(function (acc, elem) {
    if (acc[elem]) {
        acc[elem] += 1;
    }
    else {
        acc[elem] = 1;
    }
    return acc;
}, {});
console.table(arr8);
