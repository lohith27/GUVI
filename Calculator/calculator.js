/*class inputNumber{
    constructor(number1, number2){
        this.number1 = number1;
        this.number2 = number2;
    }
    add(){
        return this.number1 + this.number2;
    }
    subtract(){
        return this.number1 - this.number2;
    }
    multiply(){
        return this.number1 * this.number2;
    }
    divide(){
        return this.number1 / this.number2;
    }
}*/

function display(inputValue){
    document.getElementById("input-div").value += inputValue;
}

function calculate(){
    let output = document.getElementById("input-div");
    let result = eval(output.value);
    document.getElementById("input-div").value = result;
}

function clearAll(){
    document.getElementById("input-div").value = "";
}
