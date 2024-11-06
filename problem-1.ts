{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    function sumArray(numbers: number[]): number {
        return numbers.reduce((sum, num) => sum + num)
    }

    console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}