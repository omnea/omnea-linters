module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es2015": true,
    "jest": true
  },
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-unused-vars": 0,
    "curly": 2,
    "@typescript-eslint/ban-ts-ignore": 2,
    "@typescript-eslint/no-unused-vars": 2
  },
  "settings": {}
};
