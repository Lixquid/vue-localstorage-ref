import { ref, watch } from "@vue/composition-api";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
