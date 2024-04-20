/** @typedef {import('prettier').Config PrettierConfig} */

/** @type { PrettierConfig } */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  rangeStart: 0,
  rangeEnd: Infinity,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "auto",
  embeddedLanguageFormatting: "auto",
};

export default config;
