// const { getUuid } = require('../plugins/get-uuid.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const {getAge, getUuid} = require('../plugins')

// const obj = {name: 'jhon', birthdate: '1995-10-30'}

interface BuildMakePersonOptions {
    getAge: (birthdate: string) => number;
    getUuid: () => string;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getAge, getUuid }: BuildMakePersonOptions) => {
    return ({ name, birthdate }: PersonOptions) => {
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