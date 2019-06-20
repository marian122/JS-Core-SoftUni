function solve(num) {
    
    let numb = Number(num);

    for (let i = 0; i < numb; i++) {
        
        for (let j = 0; j < numb - 1; j++) {
            process.stdout.write('*' + ' ');
            
            
        }
        console.log('*');
    }

}


solve(5);