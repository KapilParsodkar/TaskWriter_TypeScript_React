# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
- it shows all tasks which are active and which are completed
  ![all tasks](https://github.com/KapilParsodkar/TaskWriter_TypeScript_React/assets/95988187/bf8b5370-d5d3-4a33-8395-b153d50f9255)
![completed tasks](https://github.com/KapilParsodkar/TaskWriter_TypeScript_React/assets/95988187/b5d2d8ce-9ca5-4fcc-9635-7d0f063693a0)
![active tasks](https://github.com/KapilParsodkar/TaskWriter_TypeScript_React/assets/95988187/3df81e41-69ee-4533-8329-005b4429832b)

