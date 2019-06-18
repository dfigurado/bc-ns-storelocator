const crypto = require("crypto");
const db = require("../models/index");
const client = db.Client;

module.exports = {
    findAll: async (req, res, next) => {
        client.findAll().then(result => res.json(result));
    },
    findById: async (req, res, next) => {
        var result = await client.findAndCountAll({
            where: {
                id: req.params.id
            },
            limit: 1
        });
        res.json(result);
    },
    findByHash: async (req,res,next) =>{
        var result = await client.findAndCountAll({
           where:{
               id: req.params.id
           },
            limit: 1
        });
        res.json(result);
    },
    create: async (req,res,next) => {
        req.body.hashCode = crypto.randomBytes(32).toString("hex");
        client.create((req.body).then(result => res.json(result)));
    },
    update: async (req,res,next) =>{
        client.update(req.body, {
           where:{
               id: req.params.id
           }
        }).then(result => res.json(result));
    },
    delete: async (req, res, next) => {
        var result = await client.destroy({
           where:{
               id: req.body.id
           }
        });
        res.json(result);
    }
};
