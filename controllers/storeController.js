const db = require("../models/index");
const store = db.store;

module.exports = {
   findAll: async (req,res,next) => {
      var result = await store.findAll();
      res.json(result);
   },
    //The parameter id corresponds to HashCode
   findById: async (req,res,next) =>{
       var result = await store.findById({
          where:{
              id: req.params.id
          }
       });
       res.json(result);
   },
   create: async (req,res,next) => {
        var result = await store.create(req.body);
        res.json(result);
   },
   update: async (req,res,next) => {
        var result = await store.update(req.body, {
           where: {
               id: req.params.id
           }
        });
        res.json(result);
   },
   delete: async (req,res,next) => {
       var result = await store.destroy({
          where:{
              id: req.body.id
          }
       });
       res.json(result);
   }
};
