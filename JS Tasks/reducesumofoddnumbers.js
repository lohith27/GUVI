var numbers = [1,2,3,4,5,6,7,8,9];
var sum_of_numbers = numbers.reduce(function(a, b){
    if(a% 2 != 0 && b%2 != 0){
        return a+b;
}},0);

console.log(sum_of_numbers);
