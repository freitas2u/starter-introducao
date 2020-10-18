function pares(x, y) {

  for (var index = x; index <= y; index++) {
    
    if (index % 2 === 0) {
      console.log("O número: " + index + " é par");
    }        
  }
  
}

pares(32, 321);