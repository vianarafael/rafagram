module.exports = {
  env: {
    browser: true,
    es2021: true,
    "cypress/global": true,
  },
  extends: [
    "plugin:cypress/recommender",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
  },
};
