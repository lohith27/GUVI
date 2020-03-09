var array = ["rahul","antony"];
var namearr = [];
var arr = function(array) {
    for (var i = 0; i < array.length; i++) {
        namearr.push(array[i][0].toUpperCase()+array[i].slice(1));
    }
	alert(namearr);
}
arr(array);
