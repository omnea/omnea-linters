# Eslint/prettier rules from Omnea style

This package includes eslint and prettier rules for any new project in Omnea using eslint.

## Installation

```
npm install @omnea/eslint-config
```

1) Create a file called `.eslintrc.json` and add inside:

```json
{
	"extends": "@omnea/eslint-config"
}
```

2) Create a file called `.prettierrc.js` and add inside:  

```js
module.exports = {
	... require('@omnea/eslint-config/prettier'),
}
```
