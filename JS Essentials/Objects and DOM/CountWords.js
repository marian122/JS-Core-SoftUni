function solve(input) {
    
    let pattern = /\w+/g;
    let words = input[0].match(pattern);
    let wordStat = {};

    for (let word of words){
        if (!wordStat.hasOwnProperty(word)) {
            wordStat[word] = 0;
        }

        wordStat[word]++;
    }

    let result = JSON.stringify(wordStat);
    console.log(result);
    
}