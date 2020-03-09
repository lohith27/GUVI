var request = new XMLHttpRequest()

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    var updatedData = data.filter(function(country){
        return country.capital.length < 5;
    });

    console.log(updatedData);

}

request.send();
