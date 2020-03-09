var array = [[["firstName", "Vasanth"], ["lastName","Raja"], ["age", 24], ["role","JSWizard"]], [["firstName","Sri"], ["lastName","Devi"], ["age", 28], ["role","Coder"]]];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    
    

    for(var i in arr){
        var newObject = {};
        for(var j=0; j<arr[i].length;j++){
            newObject[arr[i][j][0]] = arr[i][j][1];
           
            
        }
        tranformEmployeeList.push(newObject);
        
    }
    
    return tranformEmployeeList;
   }

   console.log(transformEmployeeData(array));