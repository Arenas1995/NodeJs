import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring', () => {
    test('characters should contain a Flash, Superman, Batman', () => {

        // Arrange
        const heroes = ['Flash', 'Superman', 'Batman'];

        // Act
        const result = characters;

        // Assert
        expect(result).toContain('Flash');
        expect(result).toContain('Superman');
        expect(result).toContain('Batman');
    });
});
