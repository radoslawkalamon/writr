module.exports = {
  plugins: [
    'cypress'
  ],
  env: {
    mocha: true,
    'cypress/globals': true
  },
  rules: {
    strict: 'off',
  },
  overrides: [
    {
      files: [
        '**/utils/handyValidator3/**/*.{j,t}s?(x)',
      ],
      rules: {
        'no-console': 'off',
      },
    },
  ]
}
