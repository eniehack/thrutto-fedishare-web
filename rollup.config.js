import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import ts from "@rollup/plugin-typescript";
import { copy } from '@web/rollup-plugin-copy';
import terser from "@rollup/plugin-terser";

export default [
    {
        input: "lib/fediverse.ts",
        output: {
            dir: "public",
            sourcemap: true,
        },
        plugins: [
            ts({
                compilerOptions: {
                    lib: ["es2019", "dom"],
                    experimentalDecorators: true
                }
            }),
            resolve({ jsnext: true }),
            terser({
                ecma: 2019,
                module: true,
                warnings: true
            })
        ]
    }
]