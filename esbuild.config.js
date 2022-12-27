import { build } from 'esbuild';

build({
    entryPoints: ['./src/index.js'], /* entry archive */
    outdir: './dist', /* folder where the archives will be packaging */
    bundle: true, /* package the archives */
    minify: true, /* minify the archives */
    format: 'esm', /* format of the archives */
})
