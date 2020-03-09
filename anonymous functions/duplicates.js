var arr = [1,1,2,2,3,3,4,4,5,5,6,7,8];
var ano = function(arro) {
    var out = [];
    count = 0;
    for (var i = arr.length - 1; i >= 1; i--) {
        for (var k = i - 1; k >= 0; k--) {
            if (arr[i] == arr[k]) {
                break;
            } else if (k == 0) {
                out[count] = arr[i];
                count += 1;
            }
        }
        out[count] = arr[0];
    }
    for (i = out.length - 1; i >= 0; i--) {
        console.log(out[i]);
    }
}
ano(arr);