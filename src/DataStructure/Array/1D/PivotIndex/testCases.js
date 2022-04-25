export const cases = [
  {
    input: [1, 7, 3, 6, 5, 6],
    expected: 3,
  },
  {
    input: [1, 2, 3],
    expected: -1,
  },
  {
    input: [2, 1, -1],
    expected: 0,
  },
];

const runTestCase = (findPivot, { input }) => findPivot(input);

export default runTestCase;
