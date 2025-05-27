import { httpClient } from "../../src/plugins";
import axios from 'axios'

// 👇 Mock de axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('httpClient', () => {

    describe('get', () => {
        test('should return the data from axios.get', async () => {
            const fakeData = { name: 'bulbasaur' };

            mockedAxios.get.mockResolvedValue({ data: fakeData });

            const result = await httpClient.get('https://pokeapi.co/api/v2/pokemon/1');

            expect(mockedAxios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1');
            expect(result).toEqual(fakeData);
        });
    });

    describe('post, put and delete', () => {
        test('should throw "Not implemented" on post', async () => {
            await expect(httpClient.post('url', 'body')).rejects.toThrow('Not implemented');
        });

        test('should throw "Not implemented" on put', async () => {
            await expect(httpClient.put('url', 'body')).rejects.toThrow('Not implemented');
        });

        test('should throw "Not implemented" on delete', async () => {
            await expect(httpClient.delete('url', 'body')).rejects.toThrow('Not implemented');
        });
    });

});