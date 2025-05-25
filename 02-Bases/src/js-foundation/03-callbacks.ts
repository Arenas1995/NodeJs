interface User {
    id: number,
    name: string
}

const users: User[] = [
    {
        id: 1,
        name: 'Pedro'
    },
    {
        id: 2,
        name: 'Pepe'
    }
];

export function getUserById(id: number, callback: (error?: string, user?: User) => void) {
    const user = users.find(function (user) {
        return user.id == id;
    });

    if (!user) {
        return callback(`User not found with id ${id}`);
    }

    return callback(undefined, user);
}