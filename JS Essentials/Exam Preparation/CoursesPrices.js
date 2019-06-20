function solve(fundamentals, advanced, applications, form) {
    let totalPrice = 0;

    let fundamentalsPrice = 170;
    let advancedPrice = 180;
    let applicationsPrice = 190;

    if (fundamentals){
        totalPrice += fundamentalsPrice;
    } 
    if(advanced){
        totalPrice += advancedPrice;
    }
    if(applications){
        totalPrice += applicationsPrice;
    }
    
    if (advanced && fundamentals){
        totalPrice -= advancedPrice * 0.10;
    }
    if(fundamentals && advanced && applications){
        totalPrice -= totalPrice * 0.06;
    }

    if(form === 'online'){
        totalPrice -= totalPrice * 0.06;
    }
    console.log(Math.round(totalPrice));
}

solve(true, true, false, "onsite");