# eslint-config-moneyforward-fukuoka

This package provides moneyforward fukuoka's .eslintrc as an extensible shared config.

## Usage

`npm install --save-dev eslint eslint-config-moneyforward-fukuoka`

Ex. Using Next.js, TypeScript, Jest in your repository,

.eslintrc.json

```json
{
  "extends": [
    "moneyforward-fukuoka",
    "moneyforward-fukuoka/rules/next",
    "moneyforward-fukuoka/rules/typescript",
    "moneyforward-fukuoka/rules/jest"
  ]
}
```

## Support rules

- `moneyforward-fukuoka`
  - Contains ESLint recommended rule
- `moneyforward-fukuoka/rules/node`
  - Contains Node.js recommended rule ( `eslint-plugin-node` )
- `moneyforward-fukuoka/rules/typescript`
  - Contains TypeScript recommended rule ( `@typescript-eslint/eslint-plugin` )
- `moneyforward-fukuoka/rules/react`
  - Contains React recommended rule ( `eslint-plugin-react`, `eslint-plugin-react-hooks` )
- `moneyforward-fukuoka/rules/next`
  - Contains React and Next.js recommended rule ( `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-next` )
- `moneyforward-fukuoka/rules/jest`
  - Contains Jest recommended rule ( `eslint-plugin-jest` )
- `moneyforward-fukuoka/rules/testing-library/react`
  - Contains React Testing Library recommended rule ( `eslint-plugin-testing-library`, `eslint-plugin-jest-dom` )

## Prettier support

Using prettier, extend `moneyforward-fukuoka/prettier`

- Using [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
  - `Turns off all rules that are unnecessary or might conflict with Prettier.`
  - `Make sure to put it last, so it gets the chance to override other configs.`

```json
{
  "extends": ["some-other-config-you-use", "moneyforward-fukuoka/prettier"]
}
```
