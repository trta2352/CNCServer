const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
//const Joi = require('@hapi/joi');
const emailHelper = require('../utils/emailHelper.js');
const supportFunctions = require('../utils/supportFunction.js');

router.get('/', async (req, res, next) => {
    let apiUrl = 'http://api.icndb.com/jokes/random/1'
    try {
        fetch(apiUrl, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }, 
        }).then((response) =>{
            response.json().then((value) =>{
                res.status(200).json(value)
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});

router.post('/', async (req, res, next) => {console.log(req.body)
    let apiUrl = 'http://api.icndb.com/jokes/random/1';
    let modifiedArray = supportFunctions.modifiyArray(req.body)
    if(modifiedArray.length != 0){
        try {
            await fetch(apiUrl, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                }, 
            }).then((response) =>{
                response.json().then((value) =>{
                    let result = emailHelper.sendEmail(value, modifiedArray)
                    if(result){
                        res.status(200).json('SUCCESS')
                    }
                    else {
                        res.status(500).json('FAIL')
                    }
                })
            })
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }
    else {
        res.status(400).json(false);
    }
});

module.exports = router;