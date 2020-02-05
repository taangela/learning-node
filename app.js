const fs = require('fs');
const genders = ['M', 'F'];
const malesNames = ['Piotr', 'Paweł', 'Michał', 'Wojtek'];
const femaleNames = ['Aga', 'Iwona', 'Maria', 'Olga'];
const lastNames = ['Kulak', 'Mucha', 'Miodek', 'Kakala'];
const people =[]


const randChoice = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
  };

for (let i = 0; i<20; i++) {
    const chosenGender = randChoice(genders);
    let name;
    if (chosenGender === 'M'){
        name = randChoice(malesNames);
    }else{
       name = randChoice(femaleNames);
    }
    const person ={
        gender: chosenGender,
        firstName: name,
        lastName: randChoice(lastNames),
        age: Math.floor(Math.random() * 61 ) + 18,
    };
    people.push(person);
};

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw ('Something went wrong: ', err);
    console.log('The file has been saved. Check people.json');
});