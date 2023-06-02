'use strict';
// Include our "db"
var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = {getAll, save, getOne, update, delCar};

//GET /car operationId
function getAll(req, res, next) {
    res.json({cars: db.find()});
}

//POST /car operationId
function save(req, res, next) {
    res.json({success: db.save(req.body), description: "Car added to the list!"});
}

//GET /car/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var car = db.find(id);
    if (car) {
        res.json(car);
    } else {
        res.status(204).send();
    }
}

//PUT /car/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var car = req.body;
    if (db.update(id, car)) {
        res.json({success: 1, description: "Car updated!"});
    } else {
        res.status(204).send();
    }

}

//DELETE /car/{id} operationId
function delCar(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if (db.remove(id)) {
        res.json({success: 1, description: "Car deleted!"});
    } else {
        res.status(204).send();
    }

}
