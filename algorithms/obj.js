const Person = {
   person1: {
    firstName: 'onderi',
    lastName: 'pke',
    age: 30
   },
   person2: {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 25
    },
    person3: {
        firstName: 'Bob',
        lastName: 'Johnson',
        age: 40
    }
}

// takes linear time O(n)
function searchPersonByName(firstName){
    for (const personKey in Person){
        const person = Person[personKey];
        if(person.firstName === firstName)
        return person;
    }
    return null
}

// Searching for a person by first name
const searchFirstName = 'Bob';
const foundPerson = searchPersonByName(searchFirstName);

if(foundPerson){
    console.log("Found person:", foundPerson);
}else{
    console.log("Person not found.");
}

console.log(Person)

// takes linear time O(n)
const personKeys = Object.keys(Person)

for (const personKey of personKeys ){
    const person = Person[personKey]
    console.log(person.firstName, person.lastName,person.age)
}