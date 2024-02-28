// 7. Viết một hàm để tìm số lần xuất hiện của mỗi phần tử trong một mảng.

var numberArr = [10,20,10,14,15,18,60, 65, 14, 60, 20,10,10];


// C1: dung object
// function checkTimesIndex(array){

//     var checkTimesIndex = {};
//     array.forEach((item) => {
//         checkTimesIndex[item] = (checkTimesIndex[item] || 0) + 1
//     })

//     return checkTimesIndex;
// }

// C2: dung reduce

function checkTimesIndex(array) {
    return array.reduce((acc, currentValue) => {
        acc[currentValue] = (acc[currentValue] || 0) + 1;
        return acc;
    }, {});
}

var result = checkTimesIndex(numberArr);

console.log(result);