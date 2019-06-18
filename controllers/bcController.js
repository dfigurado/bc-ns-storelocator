//todo add error handing and error logging

const env = process.env.NODE_ENV || "development";
const BigCommerce = require("node-bigcommerce");
const axios = require("axios");
const crypto = require("crypto");
const db = require("../models/index");
const site = db.Site;
const bcSetting = {
    logLevel: "info",
    callback: process.env.BC_CALLBACK,
    responseType: "json"
};
const api_key = process.env.GOOGLE_MAP_API;

//Get user by hash code from BigCommerce
var getClient = async (host,hashcode) => {
  try{
      var path = `${host}/api/client/get-by-hash/${hashcode}`;
      var client = await axios.get(path);
      if(client.data.count === 1){
          return client.data.rows[0];
      }else{
          return false;
      }
  }catch (err) {
      //Log error to console
      console.log(err);
  }
};

var appOptions = {
  root: __dirname + "/../public/"
};

var options = {
    root: __dirname + "/../client/build"
};

//App Installation Authentication
var auth = async (req,res,next)=>{
    var host = `${req.headers["x-forwarded-proto"]}://${req.headers.host}`;
    var client = await getClient(host, req.params.hashCode); //Get the client
    if(client){
        //Set client specific parameters.
        bcSetting.clientId = client.bcClientId;
        bcSetting.secret = client.bcClientSecret;
        bcSetting.callback = `${host}/bc/auth/${req.params.hashCode}`;
    }
    try {
        //Craete Bigcomerce object
        var bigCommerce = new BigCommerce(bcSetting);
        //Bigcommerce authorize
        var data = await bigCommerce.authorize(req.query);
        //Getting the store hash
        var storehash = data.context.split("/");

        //Find created site.
        const [clientSite, created] = await site.findOrCreate({
            where: {
                client_id: client.id,
                store_hash: storehash
            }
        });
        //Save store information as single encoded string
        //Add salt
        var salt = process.env.SECRET_KEY;
        //Convert json to a string and add salt.
        var buf = Buffer.from(JSON.stringify(data));
        //Base 64 encode
        var encoded = buf.toString("base64");
        var result = await site.update({
            site_info: encoded
        }, {
            where: {
                client_id: client.id,
                store_hash: storehash
            }
        });
        //Save store information as a encoded string - End
        var siteId = clientSite.id;

        //Set session
        req.session.access_token = data.access_token;
        req.session.site_id = siteId;

        //Injecting a javascript
        bcSetting.accessToken = data.access_token;
        bcSetting.storeHash = storehash;
        bcSetting.apiVersion = "v3";

        var bc = new BigCommerce({
            clientId: client.bcClientId,
            accessToken: da.access_token,
            storeHash: storehash,
            responseType: "json",
            apiVersion: "v3"
        });
        //GoogleMap Map Script Data
        var mapScriptData = {
            name: "NS Store Locator",
            description: "CMS Block load the content from API",
            html: `<script src="http://maps.googleapis.com/maps/api/js?key=${api_key}&callback=initMap" async defer></script>`,
            src: "",
            auto_uninstall: true,
            load_method: "default",
            loction: "footer",
            visibility: "all_pages",
            kind: "script_tag"
        };

        try{
            var response = await bc.post("/content/scripts", mapScriptData);
        }catch (e) {
            console.log(e);
        }

        //Show instalation success message.
        res.sendFile("images/success.png", appOptions);
    }catch (e) {
        console.log(error);
        //Show unsuccessfull message.
        res.sendFile("images/error.png", appOptions);
    }
};

//Load App
var load = async (req,res,next) => {
    try{
        res.sendfile("index.html", options);
    }catch (error) {
        res.sendfile("images/error.png", appOptions);
    }
};

module.exports = {
  auth,
  load
};
