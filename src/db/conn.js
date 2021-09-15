const mongoose = require("mongoose");

module.exports = function () {
    mongoose.connect(
        "Http://localhost:12707/MyDB",
        { useNewUrlParser: true, useCreateIndex: true },
        (err) => {
            if (err) {
                console.log("MongoDB Connection Succeeded");
            } else {
                console.log("err in DB connection: " + err);
            }
        }
    );
};
