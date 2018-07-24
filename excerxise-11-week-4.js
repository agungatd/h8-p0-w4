function changeMe(arr) {
  // you can only write your code here!
  var listName=''
  var arrhasil = []
  var obj = {
      firstName: '',
      lastName: '',
      gender: '',
      age: 0
    }
  var res=''

  if ( arr.length === 0) 
  {
    console.log ('""')
  } else {
    for (var i=0; i<arr.length; i++)
    {
      arrhasil.push()
      obj = {}
      
        obj.firstName = arr[i][0]
        obj.lastName = arr[i][1]
        obj.gender = arr[i][2]

        if ( arr[i][3] === undefined || arr[i][3] > 2018 ) {
          obj.age = 'Invalid Birth Year'
        } else {
          obj.age = 2018 - arr[i][3]
        }
        
        listName = ''+(i+1)+'. '+arr[i][0]+' '+arr[i][1]+':'

        arrhasil.push(listName)
        arrhasil.push(obj)
        
      
    } 
    for (var j=0; j<arrhasil.length; j++)
    {
      console.log(arrhasil[j]);
    }

  }   
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // 
/*
declare penampung dgn tipe data object 'person'
=. looping untuk akses tiap element dr array parameter
  =. looping tiap element dlm array index i
  =. tiap element dalam arraya index ke i jadikan properti dari object person
*/  