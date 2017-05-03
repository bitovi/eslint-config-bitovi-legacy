module.exports = {
  extends: [
    './es5',
    '../rules/eslint/es6/on'
  ],
  parser: "babel-eslint", 
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  env: {
    es6: true
  },
  globals: {},
  rules: {}
};