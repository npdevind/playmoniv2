module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@react-native', 'plugin:prettier/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react-native/no-inline-styles': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
    'no-unused-vars': ['error', { args: 'none', vars: 'all', ignoreRestSiblings: true }],
    'react/prop-types': ['error', { ignore: ['navigation', 'navigation.navigate'] }],
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Add these rules to detect missing imports and components
    // 'no-undef': 'error',
    // 'react-native/no-unused-styles': 'error',
  },
}
