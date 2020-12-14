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
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:lit-a11y/recommended',
        'plugin:mocha/recommended',
        './base',
    ],
};