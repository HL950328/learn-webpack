/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    // extends: ['plugin:prettier/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        quotes: [2, 'single'],
        'n/no-callback-literal': 0,
        'no-trailing-spaces': [2],
        // 'prettier/prettier': [
        //     'error',
        //     {
        //         tabWidth: 4,
        //         singleQuote: true,
        //     },
        // ],
    },
};
