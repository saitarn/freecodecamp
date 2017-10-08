
function destroyer(arr) {
  // Remove all the values
  
  //Get argument;
  arr = Array.from(arguments);  // arr = [[1, 2, 3, 1, 2, 3], 2, 3]
  
  // split argument to 2 array by shift();
  // shift will remove the first index(index[0]) of array and return remove data
  // and move the other index by decrease 1 or move left 
  var myArr = arr.shift();
  // myArr = [1, 2, 3, 1, 2, 3]
  // arr = [2,3]

  // Condition is destroy data in [myArr] by data in [arr](one by one)
  // Use Loop by [arr]
  arr.forEach(function(eachArr){
    
    //destroy myArr by filter() and then assign itself
    myArr = myArr.filter(function(myArrData){
      return myArrData !=eachArr; 
      //first loop condition [1, 2, 3, 1, 2, 3] destroy by [2] then myArr = [1, 3, 1, 3]
      //second loop condition [1, 3, 1, 3] destroy by [3] then myArr = [1, 1]
    
    });
  });
  
  return myArr;

}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// destroyer(["tree", "hamburger", 53], "tree", 53);
