var request = new XMLHttpRequest()

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    var foundData = data.find(function(country){
        return country.name.toLowerCase() == "india";
    });

    console.log(foundData);

}

request.send();
