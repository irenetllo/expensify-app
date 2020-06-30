/*const person = {
    name : 'Irene',
    age : 28,
    location : {
        city : 'London',
        tem : 20
    }
};

const { name: firstName = 'Anonymous', age, location } = person;

console.log(`${firstName} is ${age}`);
console.log(`Its ${location.tem} in ${location.city}`);

const book = {
    title : 'Ego is the Enemy',
    aithor: 'Ryan holiday',
    plublisher : {
        name : 'Penguin'
    }
};

const { name : plublisherName = 'Self-Publisher' } = book.plublisher;
console.log(plublisherName);
*/
const address = ['1299 S Juniper Street', 'london', 'UK', '123123'];

const [, city, state] = address;

console.log(`you are in ${city} ${state}`);