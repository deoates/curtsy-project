require('dotenv').config()

const express = require('express'),
    Parse = require('parse/node').Parse,
    fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

Parse.initialize(process.env.PARSE_APP_ID, "", process.env.PARSE_MASTER_KEY);
Parse.serverURL = process.env.PARSE_SERVER_URL || "https://prod.curtsyapp.com/parse"
Parse.Cloud.useMasterKey();

const Image = Parse.Object.extend("TestImage");

/* 

Parse Documentation: https://docs.parseplatform.org/js/guide/

TestImage schema

- String id
- Date createdAt

- ParseFile file
- ParseFile backup

*/

// get images
app.get("/images", async (req, res) => {

    let query = new Parse.Query("TestImage"),
        images = await query.find(); // array of ParseObjects, defaults to limit=100

    // let image = images[0];
    // let url = image.get("file").url();
    // image.get("file")._url


    console.log(images);

});

// upload images
app.post("/upload", async (req, res) => {

    // let file = req.files[0],
    //     data = file.data,
    //     name = file.name;

    // let newFile = new Parse.File(name, {
    //     base64: data.toString('base64')
    // });

    // await newFile.save();

    // let image = new Image();

    // image.set("file", newFile)
    // await image.save();

    // return res.status(201).send("Good");

});