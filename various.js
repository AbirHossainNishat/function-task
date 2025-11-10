//  function sum(number1,number2,number3,number4){

//   const som = number1 +number2+number3 +number4 ;
//   console.log(som)



//  }
//  sum(3,4,5,35);



function transformNumber(n) {
  if (n % 2 === 0) { // even
    return n / 2;
  } else {            // odd
    return n * 2;
  }
}
