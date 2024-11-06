{
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const array1: number[] = [];
    function removeDuplicates(numbers: number[]): number[] {
        numbers.filter(num => {
            if (!array1.includes(num)) {
                array1.push(num)
            }
        })
        return array1;
    }

    console.log(removeDuplicates([1, 2, 2, 22, 22, 3, 4, 4, 5]));
}