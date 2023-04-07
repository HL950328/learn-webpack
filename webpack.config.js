const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[contenthash].[name].js',
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: { chunks: 'all' },
        runtimeChunk: { name: 'runtime' },
        moduleIds: 'deterministic',
    },
};
