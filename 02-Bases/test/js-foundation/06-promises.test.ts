// get-pokemon.test.ts
import { getPokemonNameById } from '../../src/js-foundation/06-promises';
import { httpClient } from '../../src/plugins';

// 👇 Mock explícito del módulo
jest.mock('../../src/plugins', () => ({
    httpClient: {
        get: jest.fn(),
    },
}));

describe('js-foundation/06-promises', () => {
    test('should return the name of the pokemon from the API response', async () => {
        // Configurar el mock
        (httpClient.get as jest.Mock).mockResolvedValue({ name: 'pikachu' });

        const name = await getPokemonNameById(25);

        expect(httpClient.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/25');
        expect(name).toBe('pikachu');
    });

    test('should throw an error if the API fails', async () => {
        (httpClient.get as jest.Mock).mockRejectedValue(new Error('Network error'));

        await expect(getPokemonNameById(100)).rejects.toThrow('Network error');
    });
});
