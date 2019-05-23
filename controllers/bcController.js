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

//Get Store client by HashCode
var getClient = async (host, hashCode) => {
  try{
    var url = `${host}/api/client/getByHash/${hashCode}`;
    var client = await axios.get(url);
    if(client.data.count === 1){
      return client.data.rows[0];
    }else{
      return false;
    }
  } catch (e)  {
    console.log(e);
    return false;
  }
};

var appOptions = {
  root: __dirname + "/../public/"
};

var options = {
  root: __dirname + "/../client/build"
};

//Authentication
var auth = async (req, res, next) =>{
  var host = `${req.headers["x-forwared-photo"]}://${req.headers.host}`;
  var client = await getClient(host, req.params.hashCode);
  if(client){
    bcSetting.clientiId = client.bcClientId;
    bcSetting.secret = client.bcClientSecret;
    bcSetting.callback = `${host}/bc/auth/${req.params.hashCode}`;
  }
  try{
    var bigCommerce = new BigCommerce(bcSetting);
    //var data = await
  }catch (e) {

  }
}
