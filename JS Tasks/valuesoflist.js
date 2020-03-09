var object1 = {name: "Rajini",age: 33, hasPets : false};
function printAllValues(obj) {
    var my_list = []
    my_list.push(obj.age);
    my_list.push(obj.hasPets);
    return my_list;
   }

console.log(printAllValues(object1));