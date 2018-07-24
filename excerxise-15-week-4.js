//Sergei Dragunov
function changeVocals (str) {
  //code di sini -- Sfrgfj Drb
  var res=''
  var obj = {
    a:'b', 
    i:'j', 
    u:'v', 
    e:'f', 
    o:'p', 
    A:'B', 
    I:'J', 
    U:'V', 
    E:'F', 
    O:'P'
    }
  // var consonantGroup='bjvfpBJVFP'
  // console.log(str.length)
    for (var i =0; i < str.length; i++) { 
      // console.log(str[i]+'==='+obj[str[i]])
      if (typeof obj[str[i]] !== 'undefined') {
        res += obj[str[i]]
      } else {
        res += str[i]
      }
      // console.log(str[i])
    } 
    
  // console.log(res,'---vocal')
  // console.log(res)
  return res
} 

function reverseWord (str) {
  //code di sini
  
  if (str.length-1 === 0) {
    return str[0]
  }
   return str[str.length-1]+reverseWord(str.slice(0,str.length-1))
} 

function setLowerUpperCase (str) {
  //code di sini
  var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz -1234567890'
  var caseAbjad = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -1234567890'
  var res = ''

  for (var i = 0; i < str.length; i++ ){
    for (var j = 0; j < abjad.length; j++ ) {
      if (abjad[j] === str[i]) {
        res += caseAbjad[j] 
      }
    }
  } 
  // console.log(res,'--ini yg up low case')
  return res
} 

function removeSpaces (str) {
  //code di sini
  var res=''
  var arr=[]
  arr = str.split(' ')
  // console.log(arr,'--removeSpaces')
  for (var i = 0; i < arr.length; i++) {
    res += arr[i]
  }
  return res
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
  var noVocal = changeVocals(name)
  var reversed = reverseWord(noVocal)
  var changeCase = setLowerUpperCase(reversed)
  var password = removeSpaces(changeCase)

  return password
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'