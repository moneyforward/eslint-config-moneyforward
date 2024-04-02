module.exports = {
  plugins: ['@next/next'],
  extends: [
    // This config includes `plugin:@next/next/recommended`
    // https://github.com/vercel/next.js/blob/v14.1.3/packages/eslint-plugin-next/src/index.ts#L56
    'plugin:@next/next/core-web-vitals',
  ],

  overrides: [
    {
      files: [
        '**/pages/**/*.@(tsx|jsx|js)',
        '*.page.@(tsx|jsx|js)',
        '**/app/**/@(page|layout).@(tsx|jsx|js)',
      ],
      rules: {
        'import/no-default-export': ['off'],
      },
    },
  ],
};
