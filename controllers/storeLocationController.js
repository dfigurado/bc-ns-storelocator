const db = require("../models/index");
const storeLocations = db.storelocations;

module.exports = {
    findAll : async (req,res,next) => {
        var result = await storeLocations.findAll();
        res.json(result);
    },
    //Id corresponds to HashCode identifer
    findById : async (req,res,next) => {
        var result = await storeLocations.findById({
            where: {
                id: req.params.id
            }
        });
        res.json(result);
    },
    //Create location
    create: async (req,res,next) => {
        var result = await storeLocations.create(req.body);
        return res.json(result);
    },
    //Update location
    update: async (req,res,next) => {
        var result = await storeLocations.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.json(result);
    },
    delete: async (req,res,next) => {
        var result = await storeLocations.delete({
            where:{
                id: req.params.id
            }
        });
        return res.json(result);
    }
}
