// 2.Tạo một hàm để tìm số lớn nhất trong một mảng số.

/**
 * tim so lon nhat? (khong yeu cau vi tri) => 2 so = nhau cung ko van de gi
 */
function findMaxNumberOfArray(...numbers){
    var max = numbers[0]; 
    numbers.forEach((value) => {
        if(max < value){
            max = value;
        }
    })

    return max;
}

var maxNumber = findMaxNumberOfArray(1,2552,3025,4,5,556,78);
console.log(`The number's max is: ${maxNumber}`);