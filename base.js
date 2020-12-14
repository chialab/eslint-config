module.exports = {
    globals: {
        globalThis: true,
        assert: true,
        expect: true,
        should: true,
    },
    env: {
        es6: true,
        browser: true,
        node: true,
        mocha: true,
    },
    plugins: [
        'babel',
        'jsx-a11y',
        'lit-a11y',
        'mocha',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            generators: false,
            objectLiteralDuplicateProperties: false,
        },
    },
    rules: {
        'quotes': [1, 'single'],
        'semi': [1, 'always'],
        'indent': [1, 4, {
            SwitchCase: 1,
        }],
        'func-names': 0,
        'prefer-const': 0,
        'space-before-function-paren': [1, {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        'no-proto': 0,
        'no-param-reassign': 0,
        'quote-props': [1, 'consistent-as-needed'],
        'radix': 0,
        'no-new-func': 0,
        'arrow-body-style': [2, 'as-needed'],
        'arrow-parens': 0,
        'arrow-spacing': [2, {
            before: true,
            after: true,
        }],
        'comma-dangle': [1, 'always-multiline'],
        'constructor-super': 0,
        'generator-star-spacing': 0,
        'getter-return': 1,
        'no-class-assign': 0,
        'no-confusing-arrow': [2, {
            allowParens: true,
        }],
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
        'template-curly-spacing': 2,
        'yield-star-spacing': [2, 'after'],
        'max-depth': [0, 4],
        'max-params': [0, 3],
        'max-statements': [0, 10],
        'no-bitwise': 0,
        'no-plusplus': 0,
        'no-unused-vars': 1,
        'no-console': 1,
        'require-atomic-updates': 0,
        'mocha/no-mocha-arrows': 0,
    },
    ignorePatterns: [
        'node_modules',
        'dist',
        'public'
    ],
};
