const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');

router.get('/', async (req, res, next) => {
  /*  try {
        const data = await new dbHelper.courierOrf().fetchAll();
        res.json(data.toJSON());
    } catch (error) {
        res.status(500).json(error);
    }*/

    res.status(200).json("uspeh")
});
/*
router.get('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 1)
        res.status(400).send('Wrong ID');
    else {
        try {
            const data = await new dbHelper.courierOrf({ id }).fetch();
            res.json(data.toJSON());
        } catch (error) {
            res.status(500).json(error);
        }
    }
});

router.post('/', (req, res, next) => {
    Joi.validate(req.body, courierOrfModel, async function (err, value) {
        if (err !== null)
            res.status(400).send(err);
        try {
            await new dbHelper.courierOrf(value).save();
            res.end();
        } catch (error) {
            res.status(500).json(error);
        }
    });
});
*/


module.exports = router;