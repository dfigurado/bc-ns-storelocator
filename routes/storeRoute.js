const router = require("express-promise-router");
const StoreController = require("../controllers/storeController");

router.use("/", function (req,res,next) {
    //Check the authentication
    next();
});
router.get("/", StoreController.findAll);
router.get("/:id", StoreController.findById);
router.post("/", StoreController.create);
router.put("/:id", StoreController.update);
router.delete("/", StoreController.delete);

module.exports = router;
