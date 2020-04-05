const express = require('express');

const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');

const cors = require('cors');

const mongoClient = require('mongodb');

const app = express();

const url = "mongodb://localhost:27017/demoDb";

const saltRound = 10;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        if (err) throw err;

        var db = client.db('demoDb');

        var userData = db.collection('users').find().toArray();

        userData.then((data) => {
            client.close();
            res.json(data);
        }).catch((err) => {
            client.close();
            res.status(500).json({
                message: 'error'
            })
        })
    })
})

app.post('/users', (req, res) => {
    console.log(req.body);
    mongoClient.connect(url, (err, client) => {                               //open DB Server
        if (err) throw err;

        var db = client.db('demoDb');                                        // open DB

        const userData = {
            name: req.body.name,
            email: req.body.email
        }

        bcrypt.genSalt(saltRound, (err, salt) => {
            if (err) throw err;
            console.log(salt);
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
                console.log(hash);
                userData.password = hash;

                db.collection('users').insertOne(userData, (err, data) => {          //Perform Actions
                    if (err) throw err;
                    client.close();                                                  //CLose the Db                           
                    res.json({
                        message: "saved"
                    });

                });
            });
        });
    });


});

app.put('/modifyData/:id', (req, res) => {
    let userId = req.params.id;
    console.log(req.params.id);

    mongoClient.connect(url, (err, client) => {
        if (err) throw err;

        var db = client.db('demoDb');

        const newData = {
            name: req.body.name,
            email: req.body.email
        }

        bcrypt.genSalt(saltRound, (err, salt) => {
            if (err) throw err;
            console.log(salt);

            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
                console.log(hash);
                newData.password = hash;


                var ObjectId = require('mongodb').ObjectID;
                db.collection('users').updateOne({ _id: new ObjectId(userId) }, { $set: { name: req.body.name, email: req.body.email, password: newData.password } }, { upsert: true }, (err, data) => {
                    if (err) throw err;
                    console.log(data);
                    client.close();
                    res.json({
                        message: "Updated"
                    })
                })
            })
        })
    })

})

app.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);

    let index = req.body.userId;
    console.log(index);

    mongoClient.connect(url, (err, client) => {
        if (err) throw err;

        var db = client.db('demoDb');
        var ObjectId = require('mongodb').ObjectID;

        db.collection('users').deleteOne({ _id: ObjectId(req.params.id) }, (err, data) => {
            if (err) throw err;
            client.close();
            res.json({
                message: "Deleted"
            })
        })
    })

})

app.listen(3030, () => {
    console.log("port running at 3030");
})
