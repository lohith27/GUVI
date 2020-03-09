function getLastElement(arr){
    l=arr.length;
    if(l==0)
    {
    return
    }
    else
    {
    return arr.pop();
    }
    }
    console.log(getLastElement([1, 3, 5]));