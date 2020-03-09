var array = [1,2,3,4,5];
var arr = function(array) {
    sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    alert(sum);
}
arr(array);