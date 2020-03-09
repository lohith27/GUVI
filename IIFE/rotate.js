var arr = [1,2,3,4,5,6,7,7,8];
k =3;
(function() {
    out = arr.slice(k + 1, arr.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
        out[count] = arr[i];
        count += 1;
    }
    console.log(out);
})();