var request = new XMLHttpRequest()

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    var updatedData = data.map(function(country){
        return country.name.toUpperCase();
    });

    console.log(updatedData);

}

request.send();
