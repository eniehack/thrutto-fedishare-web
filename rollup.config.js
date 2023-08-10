import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import ts from "@rollup/plugin-typescript";
import { copy } from '@web/rollup-plugin-copy';
import terser from "@rollup/plugin-terser";

export default [
    {
        input: "lib/fediverse.ts",
        output: [
            {
                file: "public/thrutto-fedishare.js",
                format: "module",
                sourcemap: true,
            },
            {
                file: "public/thrutto-fedishare.min.js",
                format: "module",
                plugins: [
                    terser({
                        ecma: 2019,
                        module: true,
                        warnings: true
                    })
                ]
            }
        ],
        plugins: [
            ts({
                compilerOptions: {
                    lib: ["es2019", "dom"],
                    experimentalDecorators: true,
                    useDefineForClassFields: false,
                }
            }),
            resolve(),
        ]
    }
]