/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './styles/less/antd-custom', // optional 
  lessVarsFilePathAppendToEndOfContent: false, // optional
  cssLoaderOptions: {
    // ... 
    mode: "local",
    localIdentName: "[path][name]__[local]--[hash:base64:5]", // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    // ...
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "whatever_random_class_name";
    },
  },

  // Other Config Here...

  webpack(config) {
    return config;
  },
  future: {
    webpack5: true,
  },
});