module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    const newConfig = config;
    newConfig.node = {
      fs: 'empty',
    };

    return newConfig;
  },
};
