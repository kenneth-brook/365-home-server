const express = require("express");
const db = require("./database")

const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`We can not containt the beast that is breaking out of port ${PORT}`));

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.use(function(req, res){
    res.status(404);
});


/* start of api */

app.get("/api/users", (req, res, next) => {
    let sql = "select * from user"
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});