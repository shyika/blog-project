import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildSassLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        namedExport: false,
                        auto: (resourcePath: string) => resourcePath.includes('.module.'),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
}
