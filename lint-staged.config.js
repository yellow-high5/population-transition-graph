module.exports = {
  './**/!(.)*.{js,jsx,ts,tsx}': () => {
    return [`yarn lint:fix`, `yarn test`];
  },
  './**/!(.)*.{js,jsx,ts,tsx,json,css,scss,md}': () => {
    return `yarn format`;
  },
};
