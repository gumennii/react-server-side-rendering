# Idea
Create one and only one webpack configuration to use across multiple project.

# What should in include?
Here is a list of things and workflows we should include and cover within this repo.

### Basic
- JS/JSX and TS/TSX support
- CSS Modules and Styled Components (`Emotion` Package)
- React Routes configured in one place
- Redux
- Node/Express

### Optimizaion
- Development and Production versions of configs
- JS and CSS chunks
- Dynamic imports with `react-universal-component` or `loadable-components`
- Compression with gZip and `Brotli`

### Hot Reloading
- Hot Reloading on client and server sides
- Hot Reloading with keeping state

---

# Goal
- Standartize our workflow with proper and same bundlenig process across all projects
- Define consistency in folder structure, tech stack, linting
- Easier process in the futue for `yarn outdated` => `yarn upgrade`

--- 

# What is nice to have?
- Support for `mya-ui`, `mya-redux-modules`, `mya-support` across all projects
- Avoid repeatable fetching of the same data on server and client sides
- Have same coding standards and syntaxis on server and client
- Include only required code JS/CSS