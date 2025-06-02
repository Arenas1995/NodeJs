import { CreateTable } from './create-table.use-case';

describe('CreateTable', () => {
  let createTable: CreateTable;

  beforeEach(() => {
    createTable = new CreateTable();
  });

  it('should return multiplication table of 5 by default up to 10', () => {
    const result = createTable.execute({ base: 5 });

    const expected = 
`5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
`;

    expect(result).toBe(expected);
  });

  it('should return multiplication table up to custom limit', () => {
    const result = createTable.execute({ base: 3, limit: 5 });

    const expected = 
`3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
`;

    expect(result).toBe(expected);
  });

  it('should return empty string if limit is 0', () => {
    const result = createTable.execute({ base: 7, limit: 0 });

    expect(result).toBe('');
  });
});
