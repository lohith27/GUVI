const express = require('express');      //web framework

const bodyParser = require('body-parser'); //middleware to store client information

const cors = require('cors');                  // middleware to remove the gateway

const bcrypt = require('bcrypt');               //pkg to encode password

const app = express();      //app -> express object

const mongoClient = require('mongodb');

const jwt = require('jsonwebtoken');

const url = "mongodb://localhost:27017";

const saltRound = 11;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const userdData = [];

//crud operations
//get -> read
//post ->Insert
//put   -> Update
//delete -> remove


//MongoDb rules

//1.Connect database
//2. Open Database
//3. Perform action
//4. Close the connection

app.get('/', (req, res) => {

    mongoClient.connect(url, (err, client) => {         //Connect database
        if (err) throw err;
        var db = client.db("exampleDb");                //Open the database

        db.collection('users').find().toArray((err, data) => {  //action
            if (err) throw err;
            client.close();                                     //close DB
            res.json({
                message: "success",
                object: data
            })
        });


    })
    //res.send(userdData);

});

//bcrypt => password from user, password to server => encode => store in db
//genSalt => saltRound =10, == salt 1
//hash => salt+ password => encoded password 2

//bcrypt.compare => db password == user password == generate a token
//send token to client
// store jwt token in local storage

//jwt
//1.Generate token
//2.send token to client

app.post("/login", (req, res) => {
    mongoClient.connect(url, (err, client) => {
        if(err) throw err;
        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        var db = client.db('exampleDb');

        db.collection('users').findOne({email:userData.email} , (err, data) =>{
            if(err) throw err;
            bcrypt.compare(userData.password, data.password , (err, value)=>{
                if(err) throw err;
                let jwtToken = jwt.sign({email:userData.email}, "abcdefhbjkanjfnaf");   //generate the token
                client.close();
                res.json({
                    message: "Logged In",
                    token: jwtToken
                })
            } )
        })
    })
})

app.post('/users', (req, res) => {
    console.log(req.body);
    //userdData.push(req.body);

    const userValue = {
        name: req.body.name,
        email: req.body.email
    };

    bcrypt.genSalt(saltRound, (err, salt) => {
        if (err) throw err;
        console.log(salt);
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            console.log(hash);
            userValue.password = hash;

            mongoClient.connect(url, (err, client) => {         //Connect database
                if (err) throw err;
                var db = client.db("exampleDb");                //Open the database

                db.collection('users').insertOne(userValue, (err, data) => {
                    if (err) throw err;
                    client.close();

                    res.json({
                        message: 'Data Updated'
                    })
                })
            })
        })
    })




})

app.put('/users/:userName', (req, res) => {
    console.log(req.params.userName);
    /* let index = parseInt(req.params.id)-1;
    userdData[index] ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    } */

    const userValue = {
        name: req.body.name,
        email: req.body.email
    };

    bcrypt.genSalt(saltRound, (err, salt) => {
        if (err) throw err;
        console.log(salt);
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            console.log(hash);
            userValue.password = hash;


            mongoClient.connect(url, (err, client) => {         //Connect database
                if (err) throw err;
                console.log("entered db")
                var db = client.db("exampleDb");                //Open the database

                db.collection('users').updateOne({ name: req.params.userName }, { $set: { name: userValue.name, email: userValue.email, password: userValue.password } }, (err, data) => {
                    if (err) throw err;
                    client.close();

                    res.json({
                        message: "Data Updated"
                    })
                })
            })

            res.json({
                message: 'Data Updated'
            })
        })
    })



});

app.delete('/users/:userName', (req, res) => {
    console.log(req.params.userName);

    /* let index = parseInt(req.params.id) - 1;

    userdData.splice(index, 1); */

    mongoClient.connect(url, (err, client) => {         //Connect database
        if (err) throw err;
        var db = client.db("exampleDb");                //Open the database

        db.collection('users').deleteOne({ name: req.params.userName }, (err, data) => {
            if (err) throw err;
            client.close();

            res.json({
                message: 'Data Deleted'
            })
        })
    })

    /* res.json({
        message: 'Deleted'
    }) */
})

//1.jwt token validity
//2.jwt token correct
//3. if crct => next()

function authentication(req, res, next){
    let token = req.header("Authorization");
    if(token == undefined){
        res.status(500).json({
            message: "unauthorized"
        })
    }
    else{
        let decoded = jwt.verify(token, "abcdefhbjkanjfnaf");
        if(decoded == undefined){
            res.status(500).json({
                message: "unauthorized"
            })
        }
        else{
            next();
        }
    }
}

app.get('/menu', authentication, (req, res) => {
    res.json({
        message: "successfully logged in",
        imageUrl: "https://i.pinimg.com/236x/46/67/a9/4667a9bbac025c2c03171242ce7a288d.jpg"
    });
})


//awfas
app.listen(3030, () => {
    console.log("port running at 3030");
})





