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
           where:{
               id:req.params.id
           }
       });
       res.json(result);
    }
}
