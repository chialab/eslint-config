module.exports = {
    overrides: [
        {
            files: [
                '*.js',
                '*.jsx',
                '*.mjs',
                '*.cjs',
            ],
        },
    ],
    env: {
        'es6': true,
        'es2017': true,
        'es2020': true,
        'es2021': true,
        'shared-node-browser': true,
        'mocha': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:lit-a11y/recommended',
        'plugin:mocha/recommended',
        '../base',
    ],
    rules: {
        'import/no-unresolved': 2,
    },
};
