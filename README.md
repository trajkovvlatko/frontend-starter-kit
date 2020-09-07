## React starter kit (typescript)

Based on `create-react-app` with `typescript` template. It includes these
additional libraries:

- React
- React Router DOM
- Redux
- React Hook Form
- Jest
- Testing Library
- Enzyme
- Redux Mock Store
- SASS

### Usage

Install dependencies: 

```
yarn
```

Run dev server:

```
yarn start
```

Run tests

```
yarn test
```

### Rules

- Redux files (stores, actions, reducers) will be placed in `redux` folder on the src root
- Components go in the `components` folder, not next to the page
- Components used by only one page, can be nested in `components/PAGE_NAME/Component`
- Globally used interfaces will be placed on the src root, in the `interfaces` folder
- Interfaces used for one component only, can be created inside the same component
- Hooks and contexts are global, place them in the src root under `hooks` folder.
- Local styles go next to the component, global and shared styles in the src root under `styles` folder
- Specs are placed next to the component
