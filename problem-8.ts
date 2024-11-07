{
    // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.


    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
        const objKeys = Object.keys(obj as object);

        for (const key of keys) {
            if (!objKeys.includes(key as string)) {
                return false;
            }
        }
        return true
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys<typeof person>(person, ["name", "age"]));
}