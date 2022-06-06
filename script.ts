type AgeInventors = {
  first: string, last: string, year: number, passed: number
}

type NamesInvestor = [string, string][]

const inventors: AgeInventors[] = [
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

const people: string[] = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const arr1: AgeInventors[] = inventors.filter(investor => investor.year >= 1500 && investor.year <= 1599)
console.table(arr1)

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names

const arr2: NamesInvestor = inventors.map(investor => [investor.first, investor.last])
console.table(arr2)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const copyInventorsArray: AgeInventors[] = [...inventors]

const arr3: AgeInventors[] = copyInventorsArray.sort((a, b) => a.year - b.year)
console.table(arr3)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const arr4: number = inventors.reduce((acc, elem) => acc + (elem.passed - elem.year), 0)
console.log(arr4)

// 5. Sort the inventors by years lived

const copyInventors: AgeInventors[] = [].concat(inventors)

const arr5 = copyInventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year))
console.table(arr5)

// 7. sort Exercise
// Sort the people alphabetically by last name

const copyPeople: string[] = [...people]

const arr7: string[] = copyPeople.sort((a, b) => a.split(', ')[1].toLowerCase() > b.split(', ')[1].toLowerCase() ? 1 : -1)
console.table(arr7)


// 8. Reduce Exercise
// Sum up the instances of each of these

const data: string[] = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const arr8 = data.reduce((acc, elem) => {
  if (acc[elem]) {
    acc[elem] += 1
  } else {
    acc[elem] = 1
  }
  return acc
}, {})

console.table(arr8)

export { }


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const items: Array<any> = Array.from(document.querySelectorAll('.mw-content-ltr li'))

// const arr6: Array<any> = items.filter(elem => elem.innerText.includes(' de '))
// console.table(arr6)