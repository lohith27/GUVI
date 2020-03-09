var obj = {age: 35, role: 55};
function convertListToObject(obj) {
    var parsedObject = JSON.parse(obj);
    return parsedObject;
 }

 console.log(convertListToObject(obj));