function sendData(){
    const userData = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        password : document.getElementById('pass').value,
        age : document.getElementById('age').value
    }

    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData) 
    }).then((data) => {
        return data.json();
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}