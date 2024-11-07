{
    // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerCaseSentenceArray = sentence.toLowerCase().split(" ");
        const lowerCaseWord = word.toLowerCase();
        let num = 0;
        lowerCaseSentenceArray.forEach(item => {
            if (item === lowerCaseWord) {
                num++;
            }
        })

        return num

    }

    console.log(countWordOccurrences("I love typescript", "typescript"));

}