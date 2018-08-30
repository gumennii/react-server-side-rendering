# Idea
Create one and only one webpack configuration to use across multiple project.

# What should in include?
Here is a list of things and workflows we should include and cover within this repo.

### Basic
- JS/JSX and TS/TSX (primary)
- ✅ CSS Modules and Styled Components [`Emotion` Package](https://emotion.sh/docs/introduction)
- ✅ React Routes configured in one place
- ✅ ⁉️ React Helmet _(should it be stored globally? or in routes config, or in page components?! Currently in page components)_
- Redux
- ✅ Node/Express

### Optimizaion
- ✅ Development and Production versions of configs
- ✅ JS and CSS chunks
- ✅ Dynamic imports with `react-universal-component` or `loadable-components`
- ✅ Compression with gZip and `Brotli`
- ✅ Always keep server/client rendering in sync and no mismatch html elements
- ✅ ⁉️ Modern Browsers support with only selected polyfills
- ✅ RunTimeChunk

### Hot Reloading
- ✅ Hot Reloading on client and server sides
- ✅ Hot Reloading with keeping state

---

# Goal
- Standartize our workflow with proper and same bundlenig process across all projects
- Define consistency in folder structure, tech stack, linting
- Easier process in the futue for `yarn outdated` => `yarn upgrade`
- Keep eye on warnings related to React features and lifecycles deprecation

--- 

# What is nice to have?
- Support for `mya-ui`, `mya-redux-modules`, `mya-support` across all projects
- Avoid repeatable fetching of the same data on server and client sides
- Have same coding standards and syntaxis on server and client
- Include only required code JS/CSS

---

## Troubleshooting
Terminal outputs `node:23368) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.`
  - Will be updated soon [issue](https://github.com/yarnpkg/yarn/issues/5477)