import { ref, watch } from "@vue/composition-api";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
/**
 * Returns a `ref` with an initial value from `localStorage`. Changes to the ref will automatically be saved to `localStorage`.
 *
 * @export
 * @template T The type of the ref.
 * @param {string} key The key to save changes to in `localStorage`.
 * @param {T} initialValue The value to set the ref to if no key exists in
 * `localStorage`.
 * @returns A `ref` that reads and saves to `localStorage`.
 */
export default function useLocalStorageRef<T>(key: string, initialValue: T) {
    const initialJSON = localStorage.getItem(key);
    const output = ref(
        initialJSON !== null ? (JSON.parse(initialJSON) as T) : initialValue
    );

    watch(output, value => localStorage.setItem(key, JSON.stringify(value)), {
        deep: true,
        lazy: true
    });

    return output;
}
