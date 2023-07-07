const cekPrima = (angka) => {
    if (angka <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let result = "";
  
  for (let i = 100; i > 0; i--) {
    if (cekPrima(i)) {
      continue; 
    }
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FooBar,";
    } else if (i % 3 === 0) {
      result += "Foo,";
    } else if (i % 5 === 0) {
      result += "Bar,";
    } else {
      result += i + ",";
    }
  }
  
  console.log(result);
  




