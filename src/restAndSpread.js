//The rest parameter ...players takes all arguments passed at that point and 
//after and puts them in an array
const printTeam = (teamName, coach, ...players) => {
    console.log('Team: ' + teamName)
    console.log('Coach: ' + coach)
    console.log('Players: ' + players.join(', '))
}

const team = {
    name: 'Liberty',
    coach: 'Dick Rochards',
    players: ['lip', 'lop', 'lip', 'lop']
}

printTeam(team.name, team.coach, ...team.players)
//the spread syntaX - passes each item in the set as an individual argument in the function call

const cities = ['Seattle', 'Los Angeles', 'New York']
const citiesCopy = [...cities] //makes a clone of the cities array. 
//The two arrays are identical but reference seperate places in memory.

let house = { // the spread operator can also be used on objects
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

let newHouse = { // we use the spread operator to do an object clone like this:
    basement: true,
    ...house,
    bedrooms: 3 // we can also override values by defining a property in the original after we declare the spread
}

// Create a person object with name and age.
// Craete a second object location, with city and country.
// then we are going to create an overview object and use the spread operator to add all four properties.

const person = {
    name: 'Neal',
    age: 28
}

const location = {
    city: 'Wellington',
    country: 'New Zealand'
}

const overview = {
    ...person,
    ...location
}

console.log(overview)