# @chialab/eslint-config

Chialab's linting rules for [ESLint](https://eslint.org/).

It includes:
* recommended default ESLint rules
* [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) for JSX templates accessibility check
* [`eslint-plugin-babel`](https://www.npmjs.com/package/eslint-plugin-babel) for unsupported JavaScript features
* [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) for TypeScript language

## Usage

Install ESLint:

```
npm i -D eslint
```

```
yarn add -D eslint
```

Install `@chialab/eslint-config`:

```
npm i -D @chialab/eslint-config
```

```
yarn add -D @chialab/eslint-config
```

Create a `.eslintrc.json` file and add the configuration:

**.eslintrc.json**

```jsonc
{
    "extends": [
        "@chialab/eslint-config"
    ]
}
```

## IDE

Install the ESLint extension for your IDE (optional):

* [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)