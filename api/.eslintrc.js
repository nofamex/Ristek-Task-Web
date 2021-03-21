module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'object-curly-spacing': ['error', 'always'],
  },
};
