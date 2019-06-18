const router = require("express-promise-router");
const StoreLocationController = require("../controllers/storeLocationController");

router.use("/", function (req,res,next) {
    next();
});

router.get("/", StoreLocationController.findAll());
router.get("/:id", StoreLocationController.findById);
router.post("/", StoreLocationController.create);
router.put("/:id", StoreLocationController.update);
router.delete("/", StoreLocationController.delete);

module.exports = router;
