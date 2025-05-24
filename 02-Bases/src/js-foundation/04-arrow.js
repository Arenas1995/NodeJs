const users = [
    {
        id: 1,
        name: 'Pedro'
    },
    {
        id: 2,
        name: 'Pepe'
    }
];

const getUserById = (id, callback) => {
    const user = users.find(user => {
        return user.id == id;
    });

    if (!user) {
        return callback(`User not found with id ${id}`);
    }

    return callback(null, user);
}

module.exports = {
    getUserById
}