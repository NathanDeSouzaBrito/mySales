const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: ['node_modules/**', 'build/**', 'eslint.config.cjs'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: Object.assign(
      {},
      // include plugin recommended rules if available
      (tsPlugin.configs && tsPlugin.configs.recommended && tsPlugin.configs.recommended.rules) || {},
      { 'no-console': 'warn' }
    ),
  },
];
