import { ServerApp } from './server-app';
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save.file.use-case';

jest.mock('../domain/use-cases/create-table.use-case');
jest.mock('../domain/use-cases/save.file.use-case');

describe('ServerApp', () => {
  const mockExecuteTable = jest.fn();
  const mockExecuteSave = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (CreateTable as jest.Mock).mockImplementation(() => ({
      execute: mockExecuteTable
    }));

    (SaveFile as jest.Mock).mockImplementation(() => ({
      execute: mockExecuteSave
    }));

    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should create file and log table when showTable is true', () => {
    mockExecuteTable.mockReturnValue('Fake table');
    mockExecuteSave.mockReturnValue(true);

    ServerApp.run({
      base: 3,
      limit: 5,
      showTable: true,
      fileName: 'my-table',
      fileDestination: 'test-output'
    });

    expect(mockExecuteTable).toHaveBeenCalledWith({ base: 3, limit: 5 });
    expect(mockExecuteSave).toHaveBeenCalledWith({
      fileContent: 'Fake table',
      fileDestination: 'test-output',
      fileName: 'my-table'
    });
    expect(console.log).toHaveBeenCalledWith('Server running...');
    expect(console.log).toHaveBeenCalledWith('Fake table');
    expect(console.log).toHaveBeenCalledWith('File created.');
  });

  it('should log error if file was not created', () => {
    mockExecuteTable.mockReturnValue('Table...');
    mockExecuteSave.mockReturnValue(false);

    ServerApp.run({
      base: 2,
      limit: 3,
      showTable: false,
      fileName: 'fail-table',
      fileDestination: 'fail-dir'
    });

    expect(console.error).toHaveBeenCalledWith('File not created.');
    expect(console.log).not.toHaveBeenCalledWith('Table...');
  });
});
