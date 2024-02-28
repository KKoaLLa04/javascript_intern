// Tạo một hàm để loại bỏ các ký tự trùng lặp từ một chuỗi.

function removeDuplicatesCharacter(str){
    var uniqueCharacter = new Set(str);
    var uniqueString = Array.from(uniqueCharacter).join("");
    
    return uniqueString;
}

var string = "Hello world";
var result = removeDuplicatesCharacter(string);
console.log(result);