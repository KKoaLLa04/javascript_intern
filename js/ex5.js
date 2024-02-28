// 5.Tạo một hàm để tìm giá trị lớn thứ hai trong một mảng số.

function sortByNumber(array){
    return array.sort((a,b) => {
        return a - b;
    })
}

function numberGreaterTopTwo(array){
    var numberArrSort = sortByNumber(array);
    if(numberArrSort.length > 1){
        return numberArrSort[numberArrSort.length-2];
    }else{
        return "Trong mang ko co nhieu hon 2 phan tu nen se khong co phan tu lon nhat thu 2"
    }

}

// var numberArr = [58,80,52,989,1580,69,41,25,986,1000];
var numberArr = [];
var numberTopTwo = numberGreaterTopTwo(numberArr)
console.log(numberTopTwo);