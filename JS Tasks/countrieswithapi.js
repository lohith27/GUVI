var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest()

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    for(var i in data){
        console.log(data[i].name + " -->" + data[i].capital);
    }

}

request.send();
