const CracoAlias = require("craco-alias");

module.exports = {
    plugins: [
        {
           plugin: CracoAlias,
           options: {
              source: "tsconfig",
              baseUrl: "./src",
              tsConfigPath: "./tsconfig.paths.json"
           }
        }
    ],
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            if ( env === 'development' ) return { ...webpackConfig };
            return {
                ...webpackConfig,
                entry: {
                    main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
                    content: './src/chrome/content.ts',
                    background: './src/chrome/background.ts'
                },
                output: {
                    ...webpackConfig.output,
                    filename: 'static/js/[name].js',
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                },
            }
        },
    }
}