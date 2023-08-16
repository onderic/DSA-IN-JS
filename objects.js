// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function(){
//         return this.firstName + '' + this.lastName;
//     },
//     greet: function(name){
//         console.log('Hello, ' + name + '! My name is ' + this.fullName());
//     }
// }

// console.log(person.fullName())
// person.greet('Onderi');

const user = {
    username: 'Onderi',
    birthYear: 1999,
    birthMonth: 12, // Assuming Alice was born in April (month index starts from 0)
    birthDay: 16,
    calculateAge: function(currentYear,currentMonth,currentDay){
        const years = currentYear - this.birthYear;
        const months = currentMonth - this.birthMonth;
        const days = currentDay - this.birthDay;

        // Adjust the age if the birth month hasn't occurred yet this year
        if(months < 0 || (months ===0 && days < 0)){
            return years -1
        }
        return years
    }
};

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth(); // Month index starts from 0
console.log("Months: ",currentMonth)
const currentDay = currentDate.getDate();
console.log("Days: ",currentDay)

console.log("Years: ",user.calculateAge(currentYear, currentMonth, currentDay));