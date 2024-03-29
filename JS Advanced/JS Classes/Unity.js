class Rat {
    constructor(name){
        this.name = name;
        this.rats = [];
    }

    unite (newRat){
        if (newRat instanceof Rat){
            this.rats.push(newRat);
        }
    }

    getRats(){
        return this.rats;
    }

    toString () {
        let result = `${this.name}`;

        for (let rat of this.rats){
            result += `\n##${rat.name}`;
        }

        return result;
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
