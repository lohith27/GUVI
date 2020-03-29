const express = require('express');

const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors());

const userData = [];

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.post('/users', (req, res) => {
    console.log(req.body);
    userData.push(req.body);
    res.json({
        message : 'received'
    });
    
})

app.get('/', (req, res) => {
    //res.send("Message Received");
    /* res.json({
        Data: userData
    });
 */
    res.sendFile('D:/GUVI/NODE/CRUD without Db/Client' + '/index.html');
})

app.get('/data', (req, res) => {
    res.send(userData);
})

app.get('/data/:id', (req, res) => {
    console.log(req.body.readid);
    res.send(userData[parseInt(req.body.readid)-1]);
})

app.put('/modifyData/:id',(req, res) => {
    console.log(req.body.userId);
    userData[parseInt(req.body.userId)-1] = {
        name : req.body.name,
        email : req.body.email
    }
    res.send(req.body);

})

app.delete('/delete/:id', (req, res) => {
    console.log(req.body.userId);
    let index=parseInt(req.body.userId);

    userData.splice(index-1, 1);
})


app.listen(8000, () => {
    console.log('Port is running at 8000');
});