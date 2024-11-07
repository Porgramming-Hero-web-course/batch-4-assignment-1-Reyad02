{
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    function removeDuplicates(numbers: number[]): number[] {
        const array1: number[] = [];
        numbers.filter(num => {
            if (!array1.includes(num)) {
                array1.push(num)
            }
        })
        return array1;
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}