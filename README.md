# @saintleroyalle/core

> **Переиспользуемые core-конфиги для JS/TS-проектов** 🙂

## Что есть 📦

- `eslint`
- `prettier`
- `commitlint`
- `lint-staged`
- `tsconfig`

## Установка 🚀

```bash
npm i -D @saintleroyalle/core
```

## Подключение 🔧

`eslint.config.cjs`

```js
const baseConfig = require('@saintleroyalle/core/eslint');

module.exports = [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
];
```

`prettier.config.cjs`

```js
module.exports = require('@saintleroyalle/core/prettier');
```

`commitlint.config.cjs`

```js
module.exports = require('@saintleroyalle/core/commitlint');
```

`lint-staged.config.cjs`

```js
module.exports = require('@saintleroyalle/core/lint-staged');
```

`tsconfig.json`

```json
{
  "extends": "@saintleroyalle/core/tsconfig/nest",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "paths": {
      "src/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"]
}
```
