// build-make-person.test.ts
import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory', () => {
    test('should return a person object with id, name, birthdate and age', () => {
        // Mocks
        const mockGetUuid = jest.fn().mockReturnValue('uuid-1234');
        const mockGetAge = jest.fn().mockReturnValue(30);

        // Fábrica
        const makePerson = buildMakePerson({
            getAge: mockGetAge,
            getUuid: mockGetUuid,
        });

        // Datos de entrada
        const input = {
            name: 'John',
            birthdate: '1993-05-20',
        };

        const result = makePerson(input);

        // Verificaciones
        expect(mockGetUuid).toHaveBeenCalled();
        expect(mockGetAge).toHaveBeenCalledWith(input.birthdate);

        expect(result).toEqual({
            id: 'uuid-1234',
            name: 'John',
            birthdate: '1993-05-20',
            age: 30,
        });
    });
});
