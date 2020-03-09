var array = [3,4,6,8,13,17];
var arr = function(array) {
    for (var i = 0; i < array.length; i++) {
        if (arr[i] == 2) {
            console.log(2);
        }
        for (var k = 2; k < array[i]; k++) {
            if (k == array[i] - 1) {
                console.log(array[i]);
            } else if (array[i] % k == 0) {
                break;
            }
        }
    }
}
arr(array);