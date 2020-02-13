module.exports = {
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
    }
};
