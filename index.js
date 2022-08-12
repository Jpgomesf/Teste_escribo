function teste(num) {

    var a = 0;

    for (var i = 1; i < num; i++){
        if(i % 3 == 0) {  
          a += i;
        } else if(i % 5 == 0 ) {
            a += i; 
        } 
    }

    return a;

}

console.log(teste(10));
console.log(teste(11));

