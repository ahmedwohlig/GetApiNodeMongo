const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/myapp",
    { useNewUrlParser: true },
    (err) => {
        if (!err) {
            console.log("MongoDB Connection Succeeded");
        } else {
            console.log("err in DB connection: " + err);
        }
    }
);
