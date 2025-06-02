import fs from 'fs';
import { SaveFile } from './save.file.use-case';

jest.mock('fs');

describe('SaveFile', () => {
  const mockMkdirSync = fs.mkdirSync as jest.Mock;
  const mockWriteFileSync = fs.writeFileSync as jest.Mock;

  let saveFile: SaveFile;

  beforeEach(() => {
    jest.clearAllMocks();
    saveFile = new SaveFile();
  });

  it('should create directory and write file successfully', () => {
    mockMkdirSync.mockImplementation(() => { });
    mockWriteFileSync.mockImplementation(() => { });

    const result = saveFile.execute({
      fileContent: 'Hello world',
      fileDestination: 'test-folder',
      fileName: 'test-file',
    });

    expect(mockMkdirSync).toHaveBeenCalledWith('test-folder', { recursive: true });
    expect(mockWriteFileSync).toHaveBeenCalledWith('test-folder/test-file.txt', 'Hello world');
    expect(result).toBe(true);
  });

  it('should use default values when no destination or filename provided', () => {
    mockMkdirSync.mockImplementation(() => { });
    mockWriteFileSync.mockImplementation(() => { });

    const result = saveFile.execute({
      fileContent: 'default test'
    });

    expect(mockMkdirSync).toHaveBeenCalledWith('outputs', { recursive: true });
    expect(mockWriteFileSync).toHaveBeenCalledWith('outputs/table.txt', 'default test');
    expect(result).toBe(true);
  });

  it('should return false when an error is thrown', () => {
    mockMkdirSync.mockImplementation(() => { throw new Error('Failed to create dir'); });

    const result = saveFile.execute({
      fileContent: 'content'
    });

    expect(result).toBe(false);
  });
});
