import path from "node:path";
import stylelint from "stylelint";

test("should match Stylelint Configuration snapshot: css-modules", async () => {
  const { rules, pluginFunctions } =
    (await stylelint.resolveConfig(
      path.resolve(import.meta.dirname, "./stylelint.config.js")
    )) ?? {};

  expect({ rules, pluginFunctions }).toMatchSnapshot();
});
