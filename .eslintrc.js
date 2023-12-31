const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // should be always last as it should override previous conflict rules because of eslint-config-prettier package
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: './',
    project: ['./tsconfig.json'],
  },
  rules: {
    'no-case-declarations': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'array-bracket-newline': [WARN, 'consistent'],
    'array-bracket-spacing': [WARN, 'never'],
    'array-callback-return': WARN,
    'array-element-newline': [WARN, 'consistent'],
    'arrow-parens': WARN,
    'arrow-spacing': WARN,
    'block-spacing': WARN,
    'comma-dangle': [
      WARN,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'comma-spacing': OFF,
    'comma-style': WARN,
    'computed-property-spacing': WARN,
    'curly': [WARN, 'multi-line'],
    'dot-location': [WARN, 'property'],
    'eol-last': WARN,
    'eqeqeq': [WARN, 'allow-null'],
    'function-call-argument-newline': [WARN, 'consistent'],
    'grouped-accessor-pairs': [WARN, 'getBeforeSet'],
    'implicit-arrow-linebreak': WARN,
    'keyword-spacing': [WARN, { after: true, before: true }],
    'max-statements-per-line': WARN,
    'new-cap': [
      ERROR,
      {
        properties: false,
        capIsNewExceptions: ['Given', 'When', 'Then', 'After', 'Before', 'BeforeAll', 'BeforeStep', 'AfterAll'],
      },
    ],
    'no-async-promise-executor': ERROR,
    'no-buffer-constructor': ERROR,
    'no-compare-neg-zero': ERROR,
    'no-cond-assign': [WARN, 'except-parens'],
    'no-confusing-arrow': WARN,
    'no-console': WARN,
    'no-constant-condition': [WARN, { checkLoops: false }],
    'no-constructor-return': ERROR,
    'no-duplicate-imports': ERROR,
    'no-eq-null': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-extra-label': ERROR,
    'no-fallthrough': OFF,
    'no-floating-decimal': WARN,
    'no-implied-eval': ERROR,
    'no-inner-declarations': [WARN, 'functions'],
    'no-labels': ERROR,
    'no-lone-blocks': WARN,
    'no-loop-func': WARN,
    'no-mixed-spaces-and-tabs': WARN,
    'no-multi-assign': WARN,
    'no-multi-spaces': WARN,
    'no-multiple-empty-lines': WARN,
    'no-negated-condition': WARN,
    'no-new': WARN,
    'no-new-func': WARN,
    'no-new-symbol': WARN,
    'no-new-wrappers': WARN,
    'no-path-concat': WARN,
    'no-proto': ERROR,
    'no-restricted-syntax': [WARN, 'WithStatement'],
    'no-return-assign': [WARN, 'except-parens'],
    'no-return-await': WARN,
    'no-self-assign': ERROR,
    'no-self-compare': ERROR,
    'no-tabs': WARN,
    'no-trailing-spaces': WARN,
    'no-underscore-dangle': WARN,
    'no-unmodified-loop-condition': WARN,
    'no-unneeded-ternary': WARN,
    'no-useless-call': WARN,
    'no-useless-computed-key': WARN,
    'no-useless-concat': WARN,
    'no-useless-escape': WARN,
    'no-useless-rename': WARN,
    'no-useless-return': WARN,
    'no-var': ERROR,
    'no-whitespace-before-property': WARN,
    'object-curly-newline': [WARN, { consistent: true }],
    'object-curly-spacing': [WARN, 'always'],
    'operator-linebreak': [
      WARN,
      'none',
      { overrides: { '?': 'before', ':': 'before', '&&': 'after', '||': 'after', '??': 'after' } },
    ],
    'padded-blocks': [WARN, 'never'],
    'padding-line-between-statements': [
      WARN,
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'any', prev: 'case', next: 'case' },
    ],
    'prefer-const': WARN,
    'prefer-object-spread': WARN,
    'prefer-regex-literals': WARN,
    'prefer-rest-params': WARN,
    'prefer-spread': WARN,
    'prefer-template': WARN,
    'quote-props': [WARN, 'consistent'],
    'rest-spread-spacing': WARN,
    'semi-spacing': WARN,
    'semi-style': WARN,
    'space-before-blocks': WARN,
    'space-in-parens': WARN,
    'space-infix-ops': WARN,
    'space-unary-ops': [WARN, { words: true, nonwords: false }],
    'spaced-comment': [WARN, 'always', { markers: ['/'] }],
    'symbol-description': WARN,
    'template-curly-spacing': WARN,
    'valid-typeof': [WARN, { requireStringLiterals: true }],
    'yoda': WARN,
    'import/no-webpack-loader-syntax': OFF,
  },
  plugins: ['@typescript-eslint'],
  root: true,
  env: {
    es2020: true, // <- activate “es2020” globals
    node: true,
  },
};
