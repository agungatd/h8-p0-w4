function totalDigitRekursif(angka) {
  // you can only write your code here!
  var numStr = ''+angka
  // for (var i =0; i < num.length; i++) {}
  if (numStr.length  === 0) {
    return 0
  }

  return parseInt(numStr[0]) + totalDigitRekursif(numStr.slice(1))
  
  // console.log(typeof num)

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

/**
 * buat jadi string agar mudah dipisahkan tiap elemen
 * pisahkan elemen menggunakan loop/recursive
 *  tiap element diubah menjadi number again
 *  recursive the calculation 
 */