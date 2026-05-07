// // https://docs.expo.dev/guides/using-eslint/
// const { defineConfig,globalIgnores } = require('eslint/config');
// const expoConfig = require('eslint-config-expo/flat');

// module.exports = defineConfig([
//   globalIgnores(['dist/*']),
//   expoConfig,
//   {
//     files: ['babel.config.js'],
//     languageOptions: {
//       globals: globals.node,
//     },
//   },
// ]);

const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
]);
