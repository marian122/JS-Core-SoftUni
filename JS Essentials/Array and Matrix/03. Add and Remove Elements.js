function solve(arr) {
    let output = 1;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 'add') {
            newArr.push(output);
            output++;
        }else{
            newArr.pop();
            output++;
        }

    }

    if (newArr.length <= 0){
        console.log('Empty');
    }else{
        for (let num of newArr) {
            console.log(num);
        }
    }

}
solve(['add', 'add', 'remove', 'add', 'add']);