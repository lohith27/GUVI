var arr = [["make","Ford"],["model","mustang"],["year",1964]];

function fromListToObject(arr) {
    var newObject = {};

    arr.forEach(function(i){newObject[i[0]] = i[1]});
    
    return JSON.stringify(newObject);
   }

   console.log(fromListToObject(arr));