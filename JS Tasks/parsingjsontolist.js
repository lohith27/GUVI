var person = {"name": "Rajini", "age": 33, "hasPet": false};

function convertListToObject(obj){
    var my_list = JSON.parse(JSON.stringify(obj));
    var new_list =[];
    for(var i in my_list){
        var temp_list =[];
        temp_list.push(i);
        temp_list.push(my_list[i]);
        new_list.push(temp_list);
    }
    console.log(new_list);
}
convertListToObject(person);
