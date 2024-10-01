import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildSassLoader } from '../loaders/buildSassLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: Partial<BuildPaths> = {
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // For absolute imports
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    // Css modules
    config.module.rules.push(buildSassLoader(true));

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
};