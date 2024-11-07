{
    // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerCaseSentenceArray = sentence.toLowerCase().split(" ");
        const lowerCaseWord = word.toLowerCase();
        let num = 0;
        lowerCaseSentenceArray.forEach(item => {
            if (item.includes(lowerCaseWord)) {
                num++;
            }
        })

        return num

    }

    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));

}