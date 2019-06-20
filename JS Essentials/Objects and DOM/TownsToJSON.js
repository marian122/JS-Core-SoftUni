function solve(input) {
    let town = [];

    for (let i = 1; i < input.length; i++) {
        let currentTown = {};
        let towns = input[i].split(/\s*\|\s*/).filter(x => x);
        
        currentTown["Town"] = towns[0];
        currentTown["Latitude"] = Number(towns[1]);
        currentTown["Longitude"] = Number(towns[2]);

        town.push(currentTown);
    }

    let result = JSON.stringify(town);
    console.log(result);
    
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);