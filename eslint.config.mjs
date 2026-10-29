import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const next = require("eslint-config-next");

const eslintConfig = [
  ...next,
  {
    ignores: ["docs/**"],
  },
];

export default eslintConfig;
