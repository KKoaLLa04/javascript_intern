// Viết một hàm để loại bỏ các phần tử giống nhau từ hai mảng.

var Arr1 = [1,20,25,'b','a'];
var Arr2 = ['a', 'b', 'c', 20, 86];

function removeDuplicate(array1, array2){
    var newArr = [...array1, ...array2];
    newArr = new Set(newArr);
    newArr = Array.from(newArr);
  
    return newArr;
}

var result = removeDuplicate(Arr1, Arr2);

console.log(result);