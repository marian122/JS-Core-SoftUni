function solve() {
    let helpArr = {};

    for(let arg of arguments){
        let type = typeof arg;

        console.log(`${type}: ${arg}`);

        if (!helpArr.hasOwnProperty(type)) {
            helpArr[type] = 0;
        }
        helpArr[type]++;
    }
    Object.entries(helpArr)
        .sort((a,b) => b[1] - a[1])
        .forEach(([type, count]) => console.log(`${type} = ${count}`));

}

solve('some string', 3.333, 9.999);