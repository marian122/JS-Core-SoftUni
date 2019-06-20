function gcd(a, b) {
    let c = a % b;
    while (b != 0) {
     c = a % b;
     a = b;
     b = c;   
    }
    console.log(a);
    
}

gcd(15, 5);