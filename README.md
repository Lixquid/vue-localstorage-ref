# `vue-localstorage-ref`

A ref that stores / retrieves from localStorage.

## Installation

```
npm install vue-localstorage-ref
```

or

```
yarn add vue-localstorage-ref
```

## Example

``` js
import useLocalStorageRef from "vue-localstorage-ref";

// ...
setup() {
    const stretchWidth = useLocalStorageRef("stretchWidth", 5);

    return {stretchWidth}
}
```

## API

### `useLocalStorageRef(key, initialValue)`

- **`key`**: `string`

  The key to save the ref to in `localStorage`.
- **`initialValue`**: `any`

  The value the ref should be if no value exists in `localStorage`.
- **Returns**: `Ref`

  A ref that will have an initial value from `localStorage`, and will save
  changes to `localStorage` on change.

## License

MIT