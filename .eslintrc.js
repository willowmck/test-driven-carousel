// .eslintrc.js
module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
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
