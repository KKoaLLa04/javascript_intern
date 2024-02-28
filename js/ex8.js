// 8.Viết một hàm để tính tổng các số nguyên dương nhỏ hơn hoặc bằng một số nguyên dương cho trước.

/**
 * - Tinh tu 0 -> n
 * - Tu 1 -> n 
 * - < 0 -> n
 */

function makeToTal(n){
    var total = 0;

    if(n > 0){
        for(var i = 0; i <= n; i++){
            total += i;
        }
    }else{
        total = "Khong the tinh duoc tong so nguyen am";
    }

    return total;
}

var number =10;

console.log(makeToTal(number))