// 3.Viết một hàm để loại bỏ các phần tử trùng lặp từ một mảng.

/**
 * Co the trung lap ve so*
 * Co the trung lap ve chu*
 */

var numbers = [20,10,20,20,30,50,20,60,10];

// XOA BO NHUNG PHAN TU BI TRUNG LAP (VAN GIU LAI 1 PHAN TU)

function removeDuplicatesElement(array){
    // C1: 
    var newArrayRemoveDuplicate = Array.from(new Set(array));
    
    // C2:
    // var newArray = new Set(array);
    // newArrayRemoveDuplicate = [...newArray];
    return newArrayRemoveDuplicate;
}

// XOA BO PHAN TU BI TRUNG LAP (KHONG GIU LAI PHAN TU NAO) (update...)

var arrayUnique = removeDuplicatesElement(numbers);
console.log(arrayUnique);