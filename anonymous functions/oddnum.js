var array = [1,2,3,4,5,6,7,8,9]
var arr = function(array) {
	var oddarr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
			oddarr.push(array[i]);
            
        }
    }
	alert(oddarr);
}
arr(array);