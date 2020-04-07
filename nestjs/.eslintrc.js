module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "key-spacing": [
      "error",
      {
        align: {
          beforeColon: false,
          afterColon: true,
          on: "value"
        }
      }
    ],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        CallExpression: { arguments: "first" },
        FunctionExpression: { parameters: "first" },
        FunctionDeclaration: { parameters: "first" }
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        singleline: {
          delimiter: "semi",
          requireLast: true
        }
      }
    ],
    "@typescript-eslint/ban-ts-ignore": "off"
  }
};
