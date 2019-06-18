const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser"); //to process data in html body

const cors = require("cors");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

const bcRoutes = require("./routes/bcRoute");
const clientRoute = require("./routes/clientRoute");
const storeRoute = require("./routes/storeRoute");
const locationRoute = require("./routes/storeLocationRoute");

//Intialize the express application server
const app = express();

//Middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

//Session
app.use(cookieParser());
app.set("trust-proxy", 1);

app.use(
    cookieSession({
        name: "session",
        keys: ["key1","key2"]
    })
);

//Routes
app.use("/api/client", clientRoute);
app.use("/api/storemap", storeRoute);
app.use("/api/storelocation", locationRoute);
app.use("/bc", bcRoutes);

if(true){
    app.use(express.static("client/build"));
}

//Catch 404 Errors and forwards them to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//Error handler
app.use((err, req, res, next) => {
    const error = app.get("env") === "development" ? err : {};
    const status = err.status;

    //Respond to client
    res.status(status).json({
        error: {
            message: error.message
        }
    });

    //Respond to server
    console.error(err);
});

//Port
const PORT = process.env.PORT || 3000;

//Start the server
app.listen(PORT, console.log(`Application is running on port ${PORT}`));
