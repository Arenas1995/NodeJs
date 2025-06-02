import { jest } from '@jest/globals';

// Simula yarg con valores fijos
jest.mock('./config/plugins/args.plugin', () => ({
  yarg: {
    b: 5,
    l: 10,
    s: true,
    n: 'myfile',
    d: 'myfolder',
  },
}));

// Simula ServerApp
const mockRun = jest.fn();
jest.mock('./presentacion/server-app', () => ({
  ServerApp: {
    run: mockRun,
  },
}));

// Importa el archivo a testear (esto ejecuta main)
import './app';

describe('app.ts', () => {
  it('should call ServerApp.run with correct args from yarg', () => {
    expect(mockRun).toHaveBeenCalledWith({
      base: 5,
      limit: 10,
      showTable: true,
      fileName: 'myfile',
      fileDestination: 'myfolder',
    });
  });
});
