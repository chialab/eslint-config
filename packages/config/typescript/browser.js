module.exports = {
    env: {
        'es6': true,
        'es2017': true,
        'es2020': true,
        'es2021': true,
        'browser': true,
        'node': false,
        'mocha': true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        lib: ['ESNext', 'DOM'],
        project: 'tsconfig.json',
    },
    extends: [
        './index',
    ],
};
