module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7, // We need async/await
    sourceType: 'module',
  },
  extends: ['plugin:import/recommended', 'airbnb'],
  plugins: ['babel', 'import', 'jsx-a11y'],
  rules: {
    // Preference
    'linebreak-style': 'off',
    'no-underscore-dangle': 'off',
    'no-eval': 'off',

    // Incompatible with prettier
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    indent: 'off',
    'implicit-arrow-linebreak': 'off',
    'space-before-function-paren': 'off',
    'no-confusing-arrow': 'off',
    'no-mixed-operators': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-one-expression-per-line': 'off',

    // Override airbnb rules
    'consistent-this': ['error', 'self'],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
      },
    ],
    'no-console': 'error',
    'prefer-destructuring': 'off',
    'no-alert': 'error',
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'operator-linebreak': 'off',
    'import/namespace': ['error', { allowComputed: true }],
    'import/order': [
      'error',
      {
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin']],
        'newlines-between': 'never',
      },
    ],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: '_',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-curly-brace-presence': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'off',
    'react/sort-prop-types': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
  },
};
