// 4.Tạo một hàm để sắp xếp một mảng số theo thứ tự tăng dần.

function sortByNumber(array){
    return array.sort((a,b) => {
        return a - b;
    })
}

var numberArr = [58,80,52,69,41,25,986];
var sortNumber = sortByNumber(numberArr);
console.log(sortNumber);