/**
 * @design-system/stylelint-config
 *
 * Shared Stylelint configuration for the design system monorepo
 * Supports CSS, SCSS, and CSS-in-JS with proper property ordering
 */

/**
 * Base Stylelint configuration for CSS files
 */
export const base = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order', // Property ordering
  ],

  rules: {
    // Color rules
    'color-named': 'never',
    'color-no-hex': null, // Allow hex colors

    // Font rules
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'numeric',

    // Function rules
    'function-url-quotes': 'always',

    // Number rules
    'number-max-precision': 3,

    // String rules
    'string-quotes': 'single',

    // Unit rules
    'unit-allowed-list': [
      // Length units
      'px',
      'em',
      'rem',
      'vh',
      'vw',
      'vmin',
      'vmax',
      'ch',
      'ex',
      // Percentage
      '%',
      // Time
      's',
      'ms',
      // Angle
      'deg',
      'rad',
      'grad',
      'turn',
      // Resolution
      'dpi',
      'dpcm',
      'dppx',
      // Frequency
      'hz',
      'khz',
    ],

    // Property rules
    'property-no-vendor-prefix': true,
    'property-case': 'lower',

    // Declaration rules
    'declaration-no-important': true,
    'declaration-property-unit-allowed-list': {
      // Font size
      '/^font-size/': ['rem', 'em', 'px'],
      // Line height should be unitless
      'line-height': [],
      // Border radius
      '/^border.*radius/': ['px', 'rem', '%'],
      // Shadows
      '/shadow/': ['px', 'rem'],
      // Transitions and animations
      '/^(transition|animation).*duration/': ['s', 'ms'],
    },

    // Selector rules
    'selector-class-pattern': [
      '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
      {
        message: 'Expected class selector to be BEM format',
      },
    ],
    'selector-id-pattern': [
      '^[a-z]([a-z0-9-]+)?$',
      {
        message: 'Expected id selector to be lowercase and kebab-case',
      },
    ],
    'selector-max-id': 0, // Discourage ID selectors
    'selector-max-universal': 1,
    'selector-max-type': 2,
    'selector-max-class': 4,
    'selector-max-attribute': 3,
    'selector-max-combinators': 3,
    'selector-max-compound-selectors': 4,
    'selector-max-specificity': '0,4,0',
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute', 'class'],
      },
    ],

    // At-rule rules
    'at-rule-no-vendor-prefix': true,

    // Comment rules
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],

    // Custom property rules
    'custom-property-pattern': [
      '^[a-z]([a-z0-9-]+)?$',
      {
        message: 'Expected custom property to be lowercase and kebab-case',
      },
    ],

    // Media query rules
    'media-feature-name-no-vendor-prefix': true,

    // Value rules
    'value-no-vendor-prefix': true,
  },
};

/**
 * SCSS-specific configuration
 */
export const scss = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],

  rules: {
    // Inherit base rules
    ...base.rules,

    // SCSS specific rules
    'scss/dollar-variable-pattern': [
      '^[a-z]([a-z0-9-]+)?$',
      {
        message: 'Expected SCSS variable to be lowercase and kebab-case',
      },
    ],
    'scss/percent-placeholder-pattern': [
      '^[a-z]([a-z0-9-]+)?$',
      {
        message: 'Expected SCSS placeholder to be lowercase and kebab-case',
      },
    ],
    'scss/at-function-pattern': [
      '^[a-z]([a-z0-9-]+)?$',
      {
        message: 'Expected SCSS function to be lowercase and kebab-case',
      },
    ],
    'scss/at-mixin-pattern': [
      '^[a-z]([a-z0-9-]+)?$',
      {
        message: 'Expected SCSS mixin to be lowercase and kebab-case',
      },
    ],

    // SCSS-specific customizations
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
      },
    ],
    'scss/declaration-nested-properties': 'never',
    'scss/operator-no-unspaced': true,
    'scss/no-duplicate-dollar-variables': true,
  },
};

/**
 * Configuration for CSS-in-JS and styled-components
 */
export const cssInJs = {
  extends: ['stylelint-config-standard'],

  rules: {
    // Relax some rules for CSS-in-JS
    'value-keyword-case': null, // JavaScript variables may be camelCase
    'property-case': null, // CSS-in-JS might use camelCase properties
    'declaration-no-important': null, // Sometimes needed in CSS-in-JS
    'selector-class-pattern': null, // CSS-in-JS generates class names
    'selector-id-pattern': null, // CSS-in-JS generates ids
    'custom-property-pattern': null, // CSS-in-JS might generate custom properties
    'selector-max-id': null, // CSS-in-JS might generate IDs

    // Keep important rules
    'color-named': 'never',
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'string-quotes': 'single',
    'unit-allowed-list': base.rules['unit-allowed-list'],
  },
};

/**
 * Default configuration (uses base)
 */
export default {
  base,
  scss,
  cssInJs,
};
