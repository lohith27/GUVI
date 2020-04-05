const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const mongoClient = require('mongodb');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const url = "mongodb://localhost:27017";

const app = express();

const saltRound = 10;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

function authenticate(req, res, next) {
    var token = req.header("Authorization");
    console.log(token);
    if (token == undefined) {
        res.status(401).json({
            message: 'unauthorized'
        });

    }
    else {
        var decode = jwt.verify(token, 'abcdtyrasfsczcz');
        console.log(decode);
        if (decode !== undefined) {
            next();
        }
        else {
            res.status(401).json({
                message: 'unauthorized'
            });
        }
    }
}

app.post('/register', (req, res) => {
    console.log(req.body);

    const userData = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }

    bcrypt.genSalt(saltRound, (err, salt) => {
        if (err) throw err;
        console.log(salt);
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            console.log(hash);
            userData.password = hash;

            mongoClient.connect(url, (err, client) => {
                if (err) throw err;

                var db = client.db('tokenDb');

                db.collection('users').insertOne(userData, (err, data) => {
                    if (err) throw err;
                    client.close();
                    res.json({
                        message: 'Db Added'
                    })
                })
            })
        })
    })


});

app.post('/login', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        if (err) throw err;
        var db = client.db('tokenDb');
        db.collection('users').findOne({ name: req.body.name }, (err, data) => {
            if (err) throw err;
            bcrypt.compare(req.body.password, data.password, (err, result) => {
                if (err) throw err;
                if (result) {
                    var jwtToken = jwt.sign({ id: data.id }, 'abcdtyrasfsczcz');          //generating the token
                    client.close();

                    res.json({
                        message: 'Success',
                        token: jwtToken                                                 //sending the token as response to user that will be stored in user's local storage 
                    })
                }
                else{
                    client.close();
                    res.json({
                        message: 'Invalid Password'
                    })
                }
            })
        })
    })
})

app.get('/dashboard', authenticate, (req, res) => {
    res.json({
        message: "success"
    });
})

app.listen(3000, () => {
    console.log('Port running at 3000');
});