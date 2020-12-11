module.exports = {
    overrides: [
        {
            files: [
                '*.ts',
                '*.tsx',
            ],
        },
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        './base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [1, {
            varsIgnorePattern: 'JSX',
        }],
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/member-delimiter-style': 1,
        '@typescript-eslint/no-namespace': [1, {
            allowDeclarations: true,
        }],
        '@typescript-eslint/no-explicit-any': [1, {
            ignoreRestArgs: true,
        }],
    },
};