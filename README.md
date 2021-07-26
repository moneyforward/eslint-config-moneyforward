# eslint-config-moneyforward

This package provides moneyforward's .eslintrc as an extensible shared config.

## Usage

`npm install --save-dev eslint eslint-config-moneyforward`

Ex. Using Next.js, TypeScript, Jest in your repository,

.eslintrc.json

```json
{
  "extends": [
    "moneyforward",
    "moneyforward/rules/next",
    "moneyforward/rules/typescript",
    "moneyforward/rules/jest"
  ]
}
```

## Support rules

- `moneyforward`
  - Contains ESLint recommended rule
- `moneyforward/rules/node`
  - Contains Node.js recommended rule ( `eslint-plugin-node` )
- `moneyforward/rules/typescript`
  - Contains TypeScript recommended rule ( `@typescript-eslint/eslint-plugin` )
- `moneyforward/rules/react`
  - Contains React recommended rule ( `eslint-plugin-react`, `eslint-plugin-react-hooks` )
- `moneyforward/rules/next`
  - Contains React and Next.js recommended rule ( `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-next` )
- `moneyforward/rules/jest`
  - Contains Jest recommended rule ( `eslint-plugin-jest` )
- `moneyforward/rules/testing-library/react`
  - Contains React Testing Library recommended rule ( `eslint-plugin-testing-library`, `eslint-plugin-jest-dom` )

## Prettier support

Using prettier, extend `moneyforward/prettier`

- Using [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
  - `Turns off all rules that are unnecessary or might conflict with Prettier.`
  - `Make sure to put it last, so it gets the chance to override other configs.`

```json
{
  "extends": ["some-other-config-you-use", "moneyforward/rules/prettier"]
}
```

## Versioning

- Increment major version: Changed **error** rules.
- Increment minor version: Changed **warn** rules.
- Increment patch version: Not changed **error** and **warn** rules.
