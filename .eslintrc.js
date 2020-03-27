module.exports = {
<<<<<<< Updated upstream
    root: true,
    extends: [`plugin:vue/recommended`, `@avalanche/eslint-config`],
    rules: {
        "no-console": process.env.NODE_ENV === `production` ? `error` : `warn`,
        "no-debugger": process.env.NODE_ENV === `production` ? `error` : `warn`,
        "comma-dangle": `off`,
        "max-len": `off`,
        "quote-props": `off`,
        "space-before-function-paren": `off`,
        "global-require": `off`,
        "import/no-unresolved": `off`,
        "func-names": `off`,
        quotes: `off`,
        indent: `off`,
        "vue/max-attributes-per-line": `off`,
        "vue/html-closing-bracket-newline": `off`,
        "vue/html-indent": `off`,
        "vue/component-name-in-template-casing": [`error`, `PascalCase`],
        "vue/no-v-html": `off`,

        "vue/html-closing-bracket-spacing": [
            `error`,
            {
                startTag: `never`,
                endTag: `never`,
                selfClosingTag: `never`
            }
        ]
    },
    parserOptions: {
        parser: `babel-eslint`
=======
    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['plugin:vue/essential', 'plugin:prettier/recommended', '@vue/airbnb'],
    plugins: ['vue', 'prettier'],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: {
                    resolve: {
                        extensions: ['.vue']
                    }
                }
            }
        }
    },
    rules: {
        'prettier/prettier': 'error',
        'generator-star-spacing': 'off',
        // don't require .vue extension when importing
        'import/extensions': [
            'off',
            'always',
            {
                js: 'never',
                vue: 'never'
            }
        ],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'state', // for vuex state
                    'acc', // for reduce accumulators
                    'e' // for e.returnvalue
                ]
            }
        ],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        indent: ['error', 'tab'],
        'max-len': [
            2,
            250,
            4,
            {
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignorePattern: '(d=)([^>]*)'
            }
        ],
        'no-trailing-spaces': 0,
        'arrow-body-style': 0,
        'no-undef': 0,
        'class-methods-use-this': 0,
        'no-useless-escape': 0,
        'no-tabs': 0,
        'eol-last': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
>>>>>>> Stashed changes
    }
};
