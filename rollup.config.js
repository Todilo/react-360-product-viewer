import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import ts from "rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    ts({}),
    postcss({
      extensions: [".css"],
    }),
    terser(),
  ],
};
