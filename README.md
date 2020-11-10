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

**.eslintrc.json**
```json
{
    "extends": [
        "plugin:@chialab/eslint-config"
    ]
}
```

## Install globally

Install ESLint globally:

```
$ npm i -g eslint
```

Install `@chialab/eslint-config`:

```
$ npm i -g @chialab/eslint-config --registry=https://npm.pkg.github.com
```

Create a `.eslintrc.json` file in your HOME path and add the configuration:

**~/.eslintrc.json**
```json
{
    "extends": [
        "plugin:@chialab/eslint-config"
    ]
}
```

Install the ESLint extension for your IDE (optional):

* [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)