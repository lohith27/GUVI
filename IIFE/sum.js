var array = [1,2,3,4,5];
sum = 0;
(function() {
    sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    alert(sum);
})();