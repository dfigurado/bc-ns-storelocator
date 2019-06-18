//todo add error handing and error logging

const router = require("express-promise-router")();
const BcController = require("../controllers/bcController");
const axios = require("axios");
const BigCommerce = require("node-bigcommerce");
const db = require("../models/index");
const site = db.Site;

router.get("/auth/:hashCode", BcController.auth);
router.get("/load/:clientId", async (req, res, next) => {
    try {
        //Middleware
        var clientId = req.params.clientId;
        var host = `${req.headers["x-forwarded-proto"]}://${req.headers.host}`;
        //Get the client by id
        var client = await axios.get(`${host}/api/client/${clientId}`);
        //Set client specific parameters
        client = client.data.rows[0];
        //Fill settings object
        const bcSettings = {
            logLevel: "info",
            responseType: "json",
            clientId: client.bcClientId,
            secret: client.bcClientSecret
        };
        //Create BigCommerce Object
        const bigCommerce = new BigCommerce(bcSettings);
        //Verify
        const data = bigCommerce.verify(req.query["signed_payload"]);
        //Get storeHash
        var storeHash = data.store_hash; //Store hash
        //Get the site id by store hash
        var clientSie = await site.findOne({
            where: {
                client_id: req.params.clientId,
                store_hash: storeHash
            }
        });

        req.session.site_id = clientSite.id;
        req.session.store_hash = storeHash;
    }catch (e) {
        console.log(error);
        next(error);
    }
    next();
},
    BcController.load
);

module.exports = router;
