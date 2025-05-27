import { getAge } from "../../src/plugins";

describe('plugins/get-age.plugins', () => {
    beforeAll(() => {
        // Fijamos la fecha actual a 2024-01-01
        jest.useFakeTimers().setSystemTime(new Date('2024-01-01'));
    });

    afterAll(() => {
        jest.useRealTimers(); // Restauramos las fechas reales después del test
    });

    test('should calculate correct age based on year difference', () => {
        expect(getAge('2000-06-15')).toBe(23);
        expect(getAge('1990-12-31')).toBe(33);
    });

    test('should return 0 if birth year is the current year', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        expect(getAge('2024-05-10')).toBe(0);
    });
});