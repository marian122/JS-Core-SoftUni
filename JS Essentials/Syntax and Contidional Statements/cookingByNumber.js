function solve(args) {
    function chop(number) {
        return number / 2;
    }
    
    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet(number) {
        return number * 0.8;
    }

    let number = +args[0];
    let operation = args.slice(1);

    for(let command of operation){

        switch (command) {
            case 'chop':
                number = chop(number);
                break;
        
                case 'dice':
                number = dice(number);
                break;
        
                case 'spice':
                number = spice(number);
                break;
        
                case 'bake':
                number = bake(number);
                break;
        
                case 'fillet':
                number = fillet(number);
                break;

        }
        console.log(number);
    }

    
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);