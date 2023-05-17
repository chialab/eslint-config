module.exports = {
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
    ],
    plugins: [
        'import',
        'jsx-a11y',
        'lit-a11y',
        'mocha',
        '@chialab',
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            generators: true,
            experimentalObjectRestSpread: true,
            experimentalDecorators: true,
            objectLiteralDuplicateProperties: false,
        },
        babelOptions: {
            presets: [
                ['@babel/preset-env', {
                    shippedProposals: true,
                }],
            ],
            plugins: [
                '@babel/plugin-syntax-import-assertions',
                '@babel/plugin-syntax-jsx',
            ],
        },
    },
    rules: {
        'no-undef': 2,
        'quotes': 0,
        'semi': 0,
        'indent': 0,
        'func-names': 0,
        'prefer-const': 1,
        'space-before-function-paren': 0,
        'no-proto': 0,
        'no-param-reassign': 0,
        'quote-props': [1, 'consistent-as-needed'],
        'radix': 0,
        'no-new-func': 0,
        'arrow-body-style': [2, 'as-needed'],
        'arrow-parens': 0,
        'arrow-spacing': 0,
        'comma-dangle': 0,
        'constructor-super': 0,
        'generator-star-spacing': 0,
        'getter-return': 1,
        'no-class-assign': 0,
        'no-confusing-arrow': 0,
        'no-const-assign': 2,
        'no-new-symbol': 2,
        'no-restricted-globals': 0,
        'no-restricted-imports': 0,
        'no-this-before-super': 0,
        'no-var': 2,
        'no-useless-constructor': 2,
        'object-shorthand': [1, 'always'],
        'prefer-arrow-callback': 2,
        'prefer-spread': 0,
        'prefer-reflect': 0,
        'prefer-rest-params': 2,
        'prefer-template': 1,
        'require-yield': 0,
        'sort-imports': 0,
        'template-curly-spacing': 0,
        'yield-star-spacing': 0,
        'max-depth': [0, 4],
        'max-params': [0, 3],
        'max-statements': [0, 10],
        'no-bitwise': 0,
        'no-plusplus': 0,
        'no-unused-vars': 1,
        'no-console': 1,
        'require-atomic-updates': 0,
        'import/no-self-import': 2,
        'import/no-absolute-path': 2,
        'import/export': 2,
        'import/first': 1,
        'import/no-duplicates': 1,
        'import/extensions': [2, 'never', {
            ignorePackages: true,
            pattern: {
                js: 'always',
                jsx: 'always',
                mjs: 'always',
                cjs: 'always',
                json: 'always',
            },
        }],
        'import/newline-after-import': 0,
        'jsx-a11y/no-autofocus': [2, {
            ignoreNonDOM: true
        }],
        'mocha/no-mocha-arrows': 0,
    },
    settings: {
        'import/extensions': [
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
    ignorePatterns: [
        'node_modules',
        'dist',
        'public'
    ],
    overrides: [
        {
            files: ['.js', '.jsx', '.mjs', '.cjs'],
            rules: {
                'import/no-unresolved': 0,
            },
        },
        {
            files: ['.ts', '.tsx', '.mts', '.cts'],
            extends: [
                'plugin:@typescript-eslint/recommended',
            ],
            plugins: [
                '@typescript-eslint',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: true,
                ecmaFeatures: {
                    jsx: true,
                },
            },
            rules: {
                'no-undef': 0,
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
        },
    ],
};
