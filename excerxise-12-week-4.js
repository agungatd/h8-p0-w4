function shoppingTime(memberId, money) {
  var res=''
  var barang=[['Sepatu Stacattu',1500000],['Baju Zoro',500000],['Baju H&N',250000],['Sweater Uniklooh',175000],['Casing Handphone',50000]]
  var listPurchased=[]
  var uangSisa=0
  var barangBeli=''
  var obj = {}
  // you can only write your code here!
  if (memberId === '' || memberId === undefined ) {
    res = 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if (money < 50000) {
    res = 'Mohon maaf, uang tidak cukup'
  } else {
    obj.memberId = memberId
    obj.money = money
    //for list purchased
     obj.listPurchased = []
    //money change
      if ( money >= barang[0][1]) {
        money -= barang[0][1]
        obj.listPurchased.push(barang[0][0])
      }
      if (money >= barang[1][1]) {
        money -= barang[1][1]
        obj.listPurchased.push(barang[1][0])
      } 
      if (money >= barang[2][1]) {
        money -= barang[2][1]
        obj.listPurchased.push(barang[2][0])
      }  
      if (money >= barang[3][1]) {
          money  -= barang[3][1]
          obj.listPurchased.push(barang[3][0])
      }  
      if (money >= barang[4][1]) {
          money  -= barang[4][1]
          obj.listPurchased.push(barang[4][0])
      }  
      obj.changeMoney = money
      res = obj
    }
  return res
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja