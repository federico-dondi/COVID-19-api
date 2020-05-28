module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: [
    'ts', 
    'tsx', 
    'js', 
    'jsx', 
    'json'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$'
}