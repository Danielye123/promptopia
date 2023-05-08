module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Disable any conflicting rules or set them to a less strict level
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-no-useless-fragment": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "no-console": 0,
    "no-use-before-define": 0,
    "no-nested-ternary": 0,
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "object-curly-newline": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-wrap-multilines": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
