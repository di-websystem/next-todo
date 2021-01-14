import square from './sample';

describe('sample.ts Functions TestCases', () => {
  it('should return the squared value', () => {
    const result = square(2);
    const expected = 4;

    expect(result).toStrictEqual(expected);
  });
});
