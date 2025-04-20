import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({})
  .append(
    {
      rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-debugger': 'error',
        indent: ['error', 2, { SwitchCase: 1 }],
        'comma-dangle': ['error', 'never'],
        semi: ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true }],
        'quote-props': ['error', 'as-needed'],
        'space-before-function-paren': ['error', {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always'
        }],
        'vue/html-indent': ['error', 2, {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: []
        }],
        'vue/multiline-html-element-content-newline': ['error', {
          ignoreWhenEmpty: true,
          ignores: ['pre', 'textarea', 'span'],
          allowEmptyLines: false
        }],
        'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
        'vue/html-closing-bracket-newline': [
          'error',
          {
            singleline: 'never',
            multiline: 'always',
            selfClosingTag: {
              singleline: 'never',
              multiline: 'always'
            }
          }
        ],
        'vue/first-attribute-linebreak': ['error', {
          singleline: 'beside',
          multiline: 'below'
        }],
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 1
          },
          multiline: {
            max: 1
          }
        }],
        'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
        'vue/no-multiple-template-root': 'error',
        'no-undef': 'off',
        'no-unused-vars': 'error',
        'keyword-spacing': ['error', { before: true, after: true }],
        'space-in-parens': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'vue/html-closing-bracket-spacing': ['error', {
          startTag: 'never',
          endTag: 'never',
          selfClosingTag: 'never'
        }],
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
        'no-const-assign': 'error',
        'no-irregular-whitespace': 'error'
      }
    }
  );
