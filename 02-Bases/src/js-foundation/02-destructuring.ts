// console.log(process.env);

// Destructutacion
const { USERNAME } = process.env;
// console.log(USERNAME);

export const characters = ['Flash', 'Superman', 'Batman'];
const [, , batman] = characters;
// console.log(batman);