import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import swc from "@rollup/plugin-swc";
import terser from "@rollup/plugin-terser";

var config = {
  input: "./src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      interop: "auto",
    },
    {
      file: "dist/index.mjs",
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: [".mjs", ".js", ".json", ".node", ".ts", ".tsx"] }),
    commonjs(),
    swc({
      swc: {
        jsc: {
          target: "es2015",
          parser: { syntax: "typescript", tsx: true },
          transform: { react: { runtime: "classic" } },
        },
      },
    }),
    postcss({
      extensions: [".css"],
    }),
    terser(),
  ],
};
export default config;
