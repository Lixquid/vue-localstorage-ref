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

### `debounce(func, wait)`

- **`func`**: `(newValue, oldValue) => returnValue`

  The function that will execute once the wait time is up. It will always be
  executed with the *last* value of `newValue` in the wait period, and the
  *first* value of `oldValue` in the wait period. `returnValue` can be a `Promise`!
- **`wait`**: `number`

  The number of milliseconds to wait.
- **Returns**: `(newValue, oldValue) => Promise<typeof returnValue>`

  A dualbounced `func`. The `Promise` will resolve `wait` milliseconds after the last invocation.

## License

MIT