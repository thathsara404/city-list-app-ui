
const Parcel = require('@parcel/core').default;
const Config = require('./public/config');

const UI_VERSION = Config.UI_VERSION;
console.log(`Starting Parcel Build for UI-V:${UI_VERSION} ...`);
const options = {
    entries: ['./public/index.html'],
    defaultConfig: require.resolve('@parcel/config-default'),
    additionalReporters: [
        { packageName: '@parcel/reporter-cli', resolveFrom: __filename },
        { packageName: '@parcel/reporter-dev-server', resolveFrom: __filename }
    ],
    defaultTargetOptions: {
        /*
         * Since we have mentioned the dist folder as the static,
         * template location in the app.js, here it gives absolute path to generate 
         * file relationship
         */
        publicUrl: `/`,
        sourceMaps: true,
        distDir: `./dist`,
        engines: {
            browsers: ['> 0.5%', 'last 2 versions', 'not dead']
        }
    },
    mode: 'development',
    env: { 
        NODE_ENV: 'development'
    },
    shouldAutoInstall: true
};

new Parcel(options).run().then(({ bundleGraph, buildTime }) => {
    let bundles = bundleGraph.getBundles();
    console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
}).catch(err => {
    console.error('Parcel Bundler Error: ', err.diagnostics);
});
