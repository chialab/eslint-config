# @chialab/eslint-config

Chialab's linting rules for [ESLint](https://eslint.org/).

## Usage

Install ESLint:

```sh
$ npm i -D eslint
```

Install `@chialab/eslint-config`:

```sh
$ npm i -D @chialab/eslint-config --registry=https://npm.pkg.github.com
```

Create a `.eslintrc.json` file and add the configuration:

```json
{
    "extends": [
        "plugin:@chialab/eslint-config"
    ]
}
```

## Install globally

Install global ESLint depenendencies:

```
$ npm install -g eslint @chialab/eslint-config
```

Create a `.eslintrc.json` file in your HOME path and add the configuration:

```sh
$ echo '{\n    "extends": [\n        "plugin:@chialab/eslint-config"\n    ]\n}' > ~/.eslintrc.json
```

Install the ESLint extension for your IDE (optional):

* [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)