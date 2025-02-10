# stylelint-config-moneyforward

The Stylelint rules of Money Forward, Inc as an extensible shared config.

## Usage

### 1. Install dependencies (and peer dependencies)

```bash
npm install --save-dev stylelint stylelint-config-moneyforward
```

### 2. Configure Stylelint

Within your Stylelint config file (`stylelint.config.js` or `.stylelintrc.js`):

```js
export default {
  extends: ['stylelint-config-moneyforward/essentials'],
};
```

If you need CSS Modules support:

```diff
export default {
- extends: ['stylelint-config-moneyforward/essentials'],
+ extends: ['stylelint-config-moneyforward/essentials', 'stylelint-config-moneyforward/css-modules'],
};
```

|      Rule set | Summary                                                                   | Dependencies                                                                                                                                              |
| ------------: | :------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  `essentials` | Contains standard, and recess-order configs                               | [`standard`](https://github.com/stylelint/stylelint-config-standard) <br> [`recess-order`](https://github.com/stormwarning/stylelint-config-recess-order) |
| `css-modules` | Contains [CSS Modules](https://github.com/css-modules/css-modules) config | -                                                                                                                                                         |
|        `scss` | Contains SCSS config                                                      | [`scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss)                                                                                |

Must be added after `essentials`.

We also provide various other rule sets that you can configure to suit your project.

If the value of a rule does not suit you, specify that rule in the "rules" section with the value you want:

```diff
export default {
  extends: ['stylelint-config-moneyforward/essentials'],
+ rules: {
+   value-keyword-case': null,
+ },
};
```

## Migrate from an existing configuration

stylelint-config-moneyforward contains various plugins related to different rule sets. Therefore, users don't need to install them separately. If you have installed them in your existing configuration, we recommend uninstalling them.

```bash
npm uninstall stylelint-config-standard \
    stylelint-config-recess-order \
    stylelint-config-standard-scss \
```

## Versioning

- Increment major version: Changed **error** rules.
- Increment minor version: Changed **warn** rules.
- Increment patch version: Not changed **error** and **warn** rules.

## License

Open source [licensed as MIT](https://github.com/moneyforward/dummy).
