module.exports = {
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module', // This line ensures that ESLint parses import/export statements
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    plugins: [
      'react',
      'jsx-a11y',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Custom rules if any
    },
  };
  