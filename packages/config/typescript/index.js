module.exports = {
    overrides: [
        {
            files: [
                '*.js',
                '*.jsx',
                '*.mjs',
                '*.cjs',
                '*.ts',
                '*.tsx',
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
        'plugin:@typescript-eslint/recommended',
        '../base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        lib: ['ESNext'],
        project: 'tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'no-unused-vars': 0,
        'jsx-a11y/no-autofocus': [2, {
            ignoreNonDOM: true
        }],
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
        '@typescript-eslint/consistent-type-imports': [1, {
            prefer: 'type-imports',
        }],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.js',
                '.jsx',
                '.mjs',
                '.cjs',
                '.ts',
                '.tsx',
                '.mts',
                '.cts',
            ],
        },
        'import/resolver': {
            'typescript': {
                'alwaysTryTypes': true,
                'project': [
                    'tsconfig.json',
                    'packages/*/tsconfig.json',
                ],
            },
        },
    },
};
