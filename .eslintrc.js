// .eslintrc.js
module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }]
  },
  settings: {
    react: {
      version: '16.4.2'
    }
  }
};
