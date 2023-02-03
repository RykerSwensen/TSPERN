module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommend',
    ],
    parseOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {},
};