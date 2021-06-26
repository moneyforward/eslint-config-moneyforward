# @moneyforward/eslint-config-cloud-react-ui

This package provides @moneyforward/cloud-react-ui's .eslintrc as an extensible shared config.

## Usage

`npm install --save-dev eslint @moneyforward/eslint-config-cloud-react-ui`

Ex. Using Next.js, TypeScript, Jest in your repository,

.eslintrc.json

```json
{
  "extends": [
    "@moneyforward/eslint-config-cloud-react-ui",
    "@moneyforward/eslint-config-cloud-react-ui/rules/next",
    "@moneyforward/eslint-config-cloud-react-ui/rules/typescript",
    "@moneyforward/eslint-config-cloud-react-ui/rules/jest",
  ]
}
```

## Support rules

- `@moneyforward/eslint-config-cloud-react-ui`
  - Contains ESLint recommended rule
- `@moneyforward/eslint-config-cloud-react-ui/rules/node`
  - Contains Node.js recommended rule ( `eslint-plugin-node` )
- `@moneyforward/eslint-config-cloud-react-ui/rules/typescript`
  - Contains TypeScript recommended rule ( `@typescript-eslint/eslint-plugin` )
- `@moneyforward/eslint-config-cloud-react-ui/rules/react`
  - Contains React recommended rule ( `eslint-plugin-react`, `eslint-plugin-react-hooks` )
- `@moneyforward/eslint-config-cloud-react-ui/rules/next`
  - Contains React and Next.js recommended rule ( `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-next` )
- `@moneyforward/eslint-config-cloud-react-ui/rules/jest`
  - Contains Jest recommended rule ( `eslint-plugin-jest` )
