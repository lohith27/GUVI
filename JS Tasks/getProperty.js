function getProperty(obj, key){
    if(obj.hasOwnProperty(key))
    {;
    return obj[key];
    }
    else
    {
    return;
    }
    }
    obj={name:"David"}
    console.log(getProperty(obj,"name"));