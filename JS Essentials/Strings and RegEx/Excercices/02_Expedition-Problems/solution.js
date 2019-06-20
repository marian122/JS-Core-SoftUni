function solve() {
    let wordInput = document.getElementById('string').value;
    let textInput = document.getElementById('text').value;
    let result = document.getElementById('result');

    let messageRegex = new RegExp(`${wordInput}(.*)${wordInput}`);
    let messageMatch = messageRegex.exec(textInput)[1];
    let locationRegex = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;

    let eastMatch;
    let northMatch;
    // let eastMatch = textInput.match(/[Ee][Aa][Ss][Tt] [0-9]{2},\d{6}/);
    // let northMatch = textInput.match(/[Nn][Oo][Rr][Tt][Hh] [0-9]{2},\d{6}$/);

    let match = locationRegex.exec(textInput);
    console.log(match[0]);
    // while(match !== null){
    //
    // }
    console.log(messageMatch);

}