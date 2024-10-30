export default {
  '*.{js,cjs,mjs,jsx}': ['eslint --max-warnings 0 --fix'],
  '*.{js,cjs,mjs,jsx,css,md,json}': ['prettier --write'],
};