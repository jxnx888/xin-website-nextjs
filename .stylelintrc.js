/**
 * .stylelintrc.js
 * ===============
 * A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
 *
 * Rule configuration:
 * - null (to turn the rule off)
 * - a single value (the primary option)
 * - an array with two values ([primary option, secondary options])
 *
 * @see {@link https://stylelint.io/user-guide/get-started}
 * @see {@link https://stylelint.io/user-guide/configure}
 */

const camelCase = '[a-z][a-z0-9]+(?:[A-Z][a-z0-9]+)*';
const kebabCase = '[a-z][a-z0-9]+(?:-[a-z0-9]+)*';
const pascalCase = '[A-Z][a-z0-9]+(?:[A-Z][a-z0-9]+)*';

const cssModules = `${camelCase}(?:__${camelCase})?`;
const mantine = `mantine-${pascalCase}-${camelCase}`;

module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  ignoreFiles: ['**/vendors/**', '.vscode/**'],
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-order',
  ],
  rules: {
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
    'font-family-no-duplicate-names': null,
    // config-standard overrides
    'at-rule-no-unknown': [true, {ignoreAtRules: ['import-glob']}], // support postcss-import-ext-glob import-glob at-rule
    'custom-property-empty-line-before': null,
    'function-no-unknown': [true, {ignoreFunctions: ['fluid']}], // support postcss-fluid-length fluid function
    'import-notation': 'string',
    'selector-class-pattern': `^((${cssModules})|(${kebabCase})|(${mantine}))$`,
    'selector-pseudo-class-no-unknown': [true, {ignorePseudoClasses: ['global']}], // support CSS modules :global scope

    // order config
    'order/order': ['custom-properties', 'declarations', 'at-rules', 'rules'],
    'order/properties-alphabetical-order': true,

    // no-unsupported-browser-features config
    'plugin/no-unsupported-browser-features': [true, {
      browsers: [
        'last 2 Chrome version',
        'last 2 ChromeAndroid version',
        'last 2 Edge version',
        'last 2 Firefox version',
        'last 2 iOS version',
        'last 2 Safari version',
      ],
      ignore: ['css-resize'],
      ignorePartialSupport: true,
      severity: 'warning',
    }],
  },
};
