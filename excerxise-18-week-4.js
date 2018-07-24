function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var numStr = ''+angka
  var isOneDigit=0

  if (numStr.length === 1) {
    return parseInt(numStr)
  }

  isOneDigit =  parseInt(numStr[0]) * kaliTerusRekursif(numStr.slice(1))
  // return isOneDigit
  
  return kaliTerusRekursif(isOneDigit)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6