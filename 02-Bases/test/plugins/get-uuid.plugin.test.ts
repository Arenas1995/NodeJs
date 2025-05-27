import { getUuid } from "../../src/plugins";

describe('plugins/get-uuid.plugins', () => {
    test('should return a UUID', () => {

        const uuid = getUuid();

        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36)
    });
});