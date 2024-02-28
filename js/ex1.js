// 1.Tạo một hàm để tính tổng của một mảng số.
// Input: [1,2,3]
// Output: 6


function makeTotal(...numbers){
    var total = 0;
    numbers.forEach((value) => {
        total += value;
    })

    return total;
}

var total = makeTotal(1,2,3,4,5,556,78);
console.log(`Total: ${total}`);