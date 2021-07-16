// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'indent': [2, 2],
    'no-var': 2,
    'semi': [2, 'always'],
    'new-cap': 0
  }
}
