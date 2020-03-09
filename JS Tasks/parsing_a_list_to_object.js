var arr = ["Guvi", "I", "am", "Geek"];

function transformFirstAndLast(arr) {

    var my_list = {};
    my_list[arr[0]] = arr[arr.length - 1];
 
    return my_list;
   }

console.log(transformFirstAndLast(arr));