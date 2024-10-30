import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  pluginJs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
