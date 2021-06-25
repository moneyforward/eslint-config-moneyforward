# @moneyforward/eslint-config-cloud-react-ui

This package provides @moneyforward/cloud-react-ui's .eslintrc as an extensible shared config.

## Usage

### eslint-config-cloud-react-ui

Default export contains ESLint recommended rules, including TypeScript, React.

1. `npm install --save-dev eslint @moneyforward/eslint-config-cloud-react-ui @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks`
2. add `"extends": "@moneyforward/eslint-config-cloud-react-ui"` to your .eslintrc

### eslint-config-cloud-react-ui/next

Export eslint-config-cloud-react-ui rules, including Next.js.

1. `npm install --save-dev eslint @moneyforward/eslint-config-cloud-react-ui @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-next`
2. add `"extends": "@moneyforward/eslint-config-cloud-react-ui/next"` to your .eslintrc

### eslint-config-cloud-react-ui/jest

Export Jest rules.(jest/recommended, jest-dom/recommended, testing-library/react)

1. `npm install --save-dev eslint @moneyforward/eslint-config-cloud-react-ui eslint-config-jest`
2. add `"extends": "@moneyforward/eslint-config-cloud-react-ui/jest"` to your .eslintrc
