/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverDependenciesToBundle: [
    /^@adobe\/react-spectrum/,
    /^@react-spectrum/,
    /^@spectrum-icons/,
  ],
  future: {
    v2_routeConvention: true,
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFromMethod: true,
  },
  postcss: true,
  tailwind: true,
  //vercel
  publicPath: "/build/", // default value, can be removed
  serverBuildPath: "api/index.js",
  serverMainFields: ["main", "module"], // default value, can be removed
  serverMinify: false, // default value, can be removed
  serverModuleFormat: "cjs", // default value, can be removed
  serverPlatform: "node", // default value, can be removed
};
