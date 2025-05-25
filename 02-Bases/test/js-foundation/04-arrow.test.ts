import { getUserById, users } from "../../src/js-foundation/04-arrow";

describe('js-foundation/04-arrow', () => {
    test('should return an error when the user is not found', (done) => {

        // Arrange
        const id = 3;

        // Act
        getUserById(id, (error, user) => {
            // Assert
            expect(error).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined;
            done();
        });
    });

    test('should return a user when the id exists', done => {
        // Arrange
        const id = 1;

        // Act
        getUserById(id, (error, user) => {
            // Assert
            expect(error).toBeUndefined();
            expect(user).toEqual(users[0]);
            done();
        });
  });
});