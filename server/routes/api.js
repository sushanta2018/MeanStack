const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Event = require('../model/event');

const mongoose = require('mongoose');
const db = "mongodb://admin:password123@ds241121.mlab.com:41121/auth_db";
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser: true }, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to mongoose');
    }
})

router.get('/', (req, res) => {
    res.send('Data From API');
})

// registration Api
router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);

    user.save((error, registerUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registerUser);
        }
    })
});

// Login api

router.post('/login', (req, res) => {
    let userDate = req.body;

    User.findOne({ email: userDate.email }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (!user) {
            res.status(401).send('Invalid userName');
        } else if (user.password != userDate.password) {
            res.status(401).send('Invalid password');
        } else {
            res.status(200).send(user);
        }
    })
});

// Events API
router.get('/event', (req, res) => {
    Event.find({})
        .exec(function(err, event) {
            if (err) {
                console.log('Error' + err);
            } else {
                res.json(event);
                console.log('Event Fetched');
            }
        })
});

router.get('/event/:id', (req, res) => {
    Event.findById(req.params.id, (err, getData) => {
        if (err) {
            console.log("Error in Fetching Data");
        } else {
            res.json(getData);
            console.log("Data fetched Successfully");
        }
    })
});

router.post('/event', (req, res) => {
    let newEvent = new Event();
    newEvent.title = req.body.title;
    newEvent.description = req.body.description;
    newEvent.type = req.body.type;

    newEvent.save(function(err, insertedEvent) {
        if (err) {
            console.log('Error in saving Data');
        } else {
            res.json(insertedEvent);
            console.log('Event Entered');
        }
    })
});

router.put('/event/:id', function(req, res) {
    Event.findByIdAndUpdate(req.params.id, {
            $set: { title: req.body.title, description: req.body.description, type: req.body.type }
        }, {
            new: true
        },
        function(err, updated) {
            if (err) {
                console.log(err);
            } else {
                res.json(updated);
                console.log('Items Updated successfully');
            }
        }
    );
});

router.delete('/event/:id', (req, res) => {
    Event.findByIdAndRemove(req.params.id, (err, deleted) => {
        if (err) {
            console.log("Error in Deleting");
        } else {
            res.json(deleted);
            console.log("Data Deleted Successfully");
        }
    })
});

module.exports = router;