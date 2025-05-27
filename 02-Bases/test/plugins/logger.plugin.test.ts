import winston from 'winston';
import { buildLogger } from '../../src/plugins';// Ajusta la ruta según tu estructura

// 🧪 Mocks antes de importar logger
jest.mock('winston', () => {
    const mFormat = {
        combine: jest.fn(),
        timestamp: jest.fn(),
        json: jest.fn(),
        simple: jest.fn(),
    };

    const infoMock = jest.fn();
    const errorMock = jest.fn();
    const addMock = jest.fn();

    const mLogger = {
        info: infoMock,
        error: errorMock,
        add: addMock,
    };

    return {
        format: mFormat,
        transports: {
            File: jest.fn(),
            Console: jest.fn(),
        },
        createLogger: jest.fn(() => mLogger),
        __mocks__: { mLogger }, // opcional si quieres acceder desde fuera
    };
});

describe('buildLogger', () => {
    const serviceName = 'test-service';
    const logger = buildLogger(serviceName);

    test('should call logger.info with message and service', () => {
        const message = 'Hello info';

        logger.log(message);

        const { createLogger } = jest.requireMock('winston');
        const mockLogger = createLogger();

        expect(mockLogger.info).toHaveBeenCalledWith({
            message,
            service: serviceName,
        });
    });

    test('should call logger.error with message and service', () => {
        const message = 'Something failed';

        logger.error(message);

        const { createLogger } = jest.requireMock('winston');
        const mockLogger = createLogger();

        expect(mockLogger.error).toHaveBeenCalledWith({
            message,
            service: serviceName,
        });
    });
});
