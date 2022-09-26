import { Configuration } from 'webpack-dev-server';
import { BuildOptions } from './types';

export function buildDevServer({ port }: BuildOptions): Configuration {
    return {
        port,
        open: true,
        hot: true,
    };
}
