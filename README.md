# @moneyforward/eslint-config-cloud-react-ui

This package provides @moneyforward/cloud-react-ui's .eslintrc as an extensible shared config.

## Usage

### eslint-config-cloud-react-ui

Default export contains ESLint recommended rules.

1. `npm install --save-dev eslint @moneyforward/eslint-config-cloud-react-ui`
2. add `"extends": "@moneyforward/eslint-config-cloud-react-ui"` to your .eslintrc

### eslint-config-cloud-react-ui/node

Export Node.js rules.

1. `npm install --save-dev eslint @moneyforward/eslint-config-cloud-react-ui eslint-plugin-node`
2. add `"extends": "@moneyforward/eslint-config-cloud-react-ui"` to your .eslintrc

### eslint-config-cloud-react-ui/typescript

Export TypeScript rules.

1. `npm install --save-dev eslint @moneyforward/eslint-config-cloud-react-ui @typescript-eslint/parser @typescript-eslint/eslint-plugin`
2. add `"extends": "@moneyforward/eslint-config-cloud-react-ui/typescript"` to your .eslintrc

### eslint-config-cloud-react-ui/react

Export React rules.

1. `npm install --save-dev eslint @moneyforward/eslint-config-cloud-react-ui eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testing-library eslint-plugin-jest-dom`
2. add `"extends": "@moneyforward/eslint-config-cloud-react-ui/react"` to your .eslintrc

### eslint-config-cloud-react-ui/next

Export Next.js rules, including React.

1. `npm install --save-dev eslint @moneyforward/eslint-config-cloud-react-ui eslint-config-next eslint-plugin-react eslint-plugin-react-hooks`
2. add `"extends": "@moneyforward/eslint-config-cloud-react-ui/next"` to your .eslintrc

### eslint-config-cloud-react-ui/jest

Export Jest rules.

1. `npm install --save-dev eslint @moneyforward/eslint-config-cloud-react-ui eslint-config-jest`
2. add `"extends": "@moneyforward/eslint-config-cloud-react-ui/jest"` to your .eslintrc

## Plaggable config

ex. Using Next.js, TypeScript, Jest, .eslintrc is

```json
{
  "extends": [
    "@moneyforward/eslint-config-cloud-react-ui",
    "@moneyforward/eslint-config-cloud-react-ui/next",
    "@moneyforward/eslint-config-cloud-react-ui/typescript",
    "@moneyforward/eslint-config-cloud-react-ui/jest",
  ]
}
```
