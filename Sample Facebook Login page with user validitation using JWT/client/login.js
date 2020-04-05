function sendData(){
    const userData = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        password : document.getElementById('pass').value,
    }

    fetch('http://localhost:3000/login', {
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
        localStorage.setItem("token", result.token);
    }).catch((err) => {
        console.log(err);
    });
}