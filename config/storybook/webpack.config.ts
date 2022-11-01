import webpack, {DefinePlugin, RuleSetRule} from "webpack";
import {BuildPaths} from "../build/types";
import {buildCssLoader} from "../build/loaders/buildCssLoader";
import path from "path";

export default ({config}: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '../../src'),
    }

    config.resolve.modules = [paths.src, "node_modules"]
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i};
        }
        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoader(true));
    config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
            name: 'fonts/[name].[ext]',
        },
        include: path.resolve(__dirname, '../../src/shared/assets/fonts'),
    });

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true
    }));

    return config
}

