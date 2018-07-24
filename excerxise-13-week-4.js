function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  var obj1= {product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 }, obj2= {product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 }, obj3= {product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
  var cust='', itemTaken1=0, itemTaken2=0, itemTaken3=0 , profit = 0 
  var res =[]
  // you can only write your code here!
  if (shoppers == '') {
    res = []
    
  } else { //the main code for value variation
    for (var i = 0; i < shoppers.length; i++) {
      if ( shoppers[i].product === 'Sepatu Stacattu' && shoppers[i].amount <= obj1.leftOver) {
        cust = shoppers[i].name; 
          obj1.shoppers.push(cust)
        itemTaken1 += shoppers[i].amount; 
          obj1.leftOver = 10 - itemTaken1
        profit = itemTaken1 * 150000; 
          obj1.totalProfit = profit

      } else if (shoppers[i].product === 'Baju Zoro' && shoppers[i].amount <= obj2.leftOver) { 
        cust = shoppers[i].name; 
          obj2.shoppers.push(cust)
        itemTaken2 += shoppers[i].amount; 
          obj2.leftOver = 2 - itemTaken2
        profit = itemTaken2 * 500000; 
          obj2.totalProfit = profit

      } else if (shoppers[i].product === 'Sweater Uniklooh' && shoppers[i].amount <= obj3.leftOver) {
        cust = shoppers[i].name; 
          obj3.shoppers.push(cust)
        itemTaken3 += shoppers[i].amount; 
          obj3.leftOver = 1 - itemTaken3
        profit = itemTaken3 * 175000; 
          obj3.totalProfit = profit
      } 
        
      // untuk produk 2

    }
  // console.log (shoppers[i].name)
  //cara masukin nama ke obj --- obj1.shoppers = shoppers[0].name

  res.push(obj1, obj2, obj3)
  }
  return res
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]