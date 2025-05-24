// const { getUuid } = require('../plugins/get-uuid.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const {getAge, getUuid} = require('../plugins')

// const obj = {name: 'jhon', birthdate: '1995-10-30'}

const buildMakePerson = ({ getAge, getUuid }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUuid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}

// const person = buildPerson(obj);
// console.log(person);

module.exports = {
    buildMakePerson
}