function viewDashboard(){
    fetch("http://localhost:3000/dashboard", {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem("token")
        }
    }).then((data) => {
        //console.log(data);
        return data.json();
    }).then((result) => {
        console.log(result);
        document.write(result.message);
    })
}