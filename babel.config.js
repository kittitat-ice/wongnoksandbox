module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          "@components": './src/components',
          "@redux": './src/redux',
          "@navigation": './src/navigation',
          "@screens": './src/screens',
        },
      },
    ],
  ],
};
