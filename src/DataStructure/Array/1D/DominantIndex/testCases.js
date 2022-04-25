export const cases = [
  {
    input: [3, 6, 1, 0],
    expected: 1,
  },
  {
    input: [1, 2, 3, 4],
    expected: -1,
  },
  {
    input: [1],
    expected: 0,
  },
];

const runTestCase = (dominantIndex, { input }) => dominantIndex(input);

export default runTestCase;
