# Changelog

## 1.1.0 (2025-11-06)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/adisrc/stainless_sdk/compare/v1.0.0...v1.1.0)

### Features

* **mcp:** add docs search tool ([cffb4c5](https://github.com/adisrc/stainless_sdk/commit/cffb4c5fc816e67f8e2447956640256623864f7b))
* **mcp:** add option for including docs tools ([f30ab42](https://github.com/adisrc/stainless_sdk/commit/f30ab427fdab25b27cace62e18fbb2142f206ed0))
* **mcp:** enable optional code execution tool on http mcp servers ([bb43ac2](https://github.com/adisrc/stainless_sdk/commit/bb43ac299959442314342a4f6e66c86258897e3c))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([12453fd](https://github.com/adisrc/stainless_sdk/commit/12453fdb79b6cf00e51ac90fe509d06655bb3d35))
* coerce nullable values to undefined ([1f92ac8](https://github.com/adisrc/stainless_sdk/commit/1f92ac83568decd5bc9ab230b1d3f936b71f71ea))
* **mcpb:** pin @anthropic-ai/mcpb version ([2f52709](https://github.com/adisrc/stainless_sdk/commit/2f52709f35b117d0ffc3f16a4ce83e628f7ba1cd))
* **mcp:** fix cli argument parsing logic ([6f13bb0](https://github.com/adisrc/stainless_sdk/commit/6f13bb0bbe82c347b478aa5a7d1324554678e831))
* **mcp:** fix uploading dxt release assets ([09c1c12](https://github.com/adisrc/stainless_sdk/commit/09c1c12ca95d8df38706a512de03630f9a70e99c))
* **mcp:** resolve a linting issue in server code ([1d25225](https://github.com/adisrc/stainless_sdk/commit/1d25225c349a484c6ceda66d8097852683467d1f))


### Performance Improvements

* faster formatting ([4811855](https://github.com/adisrc/stainless_sdk/commit/48118556ea5f4809a5fc65696b06b43f97266ab6))


### Chores

* **codegen:** internal codegen update ([f49ca6d](https://github.com/adisrc/stainless_sdk/commit/f49ca6d4f94b91dcf35221aa5c584f26174236b1))
* do not install brew dependencies in ./scripts/bootstrap by default ([65d75cc](https://github.com/adisrc/stainless_sdk/commit/65d75cc75813d7a5a56730a464f7e2989291fe79))
* extract some types in mcp docs ([5cf733d](https://github.com/adisrc/stainless_sdk/commit/5cf733d521344074881048d6067c6c2e063710a8))
* **internal:** codegen related update ([89cf9ef](https://github.com/adisrc/stainless_sdk/commit/89cf9ef316744b9be716168e5d7c13db5a712b0b))
* **internal:** codegen related update ([d695918](https://github.com/adisrc/stainless_sdk/commit/d6959184b7c9a30d6fd1d882a0d73b02bd0d28ad))
* **internal:** fix incremental formatting in some cases ([dcb7860](https://github.com/adisrc/stainless_sdk/commit/dcb7860c4dd3723a2b30541cebeb2279182de19f))
* **internal:** gitignore .mcpb files ([6c382a2](https://github.com/adisrc/stainless_sdk/commit/6c382a2bc66c97a77b6a0512ec2bd3f8915496ff))
* **internal:** grammar fix (it's -&gt; its) ([3faba60](https://github.com/adisrc/stainless_sdk/commit/3faba60792baddc96dad4a17096b60f4ca5e1abb))
* **internal:** ignore .eslintcache ([1656a6d](https://github.com/adisrc/stainless_sdk/commit/1656a6dcb60bd46d59a1772c8f4ec7378e48e9e6))
* **internal:** remove .eslintcache ([306be49](https://github.com/adisrc/stainless_sdk/commit/306be4965eedf127c9d40bee4e89d4f5181b30ad))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([ba62e22](https://github.com/adisrc/stainless_sdk/commit/ba62e224939f00761d6b51e31186eee12c67ce16))
* **internal:** use npm pack for build uploads ([0a548b4](https://github.com/adisrc/stainless_sdk/commit/0a548b4ae285c9103669aaa7ee53f48517e51cd1))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([165ffb0](https://github.com/adisrc/stainless_sdk/commit/165ffb08ad7e70fb0be37f8cc8c6a0bd7324ebdb))
* mcp code tool explicit error message when missing a run function ([feb7d64](https://github.com/adisrc/stainless_sdk/commit/feb7d64cb118e798aaf2d0c3014840aad099bc20))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([c22487a](https://github.com/adisrc/stainless_sdk/commit/c22487af51186cc385fe9ba17e37b3e8f90e4e3f))
* **mcp:** add line numbers to code tool errors ([a65d7ea](https://github.com/adisrc/stainless_sdk/commit/a65d7ea3b8d1aaba065c443ee4f7092880c112f6))
* **mcp:** rename dxt to mcpb ([725b88b](https://github.com/adisrc/stainless_sdk/commit/725b88b1ef1a97b03bb1b239b876ba715fefcbfb))
* **mcp:** upload dxt as release asset ([ece9c4f](https://github.com/adisrc/stainless_sdk/commit/ece9c4f69a400f3670eeb06b198c213f6e37d691))
* update lockfile ([19fcfc2](https://github.com/adisrc/stainless_sdk/commit/19fcfc2fcc367a61e3dad2bdfac765855d3b7297))
* use structured error when code execution tool errors ([b0bd0e1](https://github.com/adisrc/stainless_sdk/commit/b0bd0e1bbe3ea849b5198b4ec2e778374950977f))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([d0ee31d](https://github.com/adisrc/stainless_sdk/commit/d0ee31d3ee55da04697cb976946e7128af6f232e))

## 1.0.0 (2025-09-06)

Full Changelog: [v0.0.1...v1.0.0](https://github.com/adisrc/stainless_sdk/compare/v0.0.1...v1.0.0)

### Chores

* update SDK settings ([e109c12](https://github.com/adisrc/stainless_sdk/commit/e109c126afb66ef240a6894c26d38f7b8badf29b))
* update SDK settings ([3ad1a58](https://github.com/adisrc/stainless_sdk/commit/3ad1a586266852950643c56b3625c7774046c3d5))
