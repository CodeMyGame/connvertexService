'use strict';
import express from 'express'
import fs from 'fs'
import initialValue from './initialValues';
const app = express();
const port = 3001;

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});
app.use(express.json());

app.get('/initialValues', (req, res) => {
        res.send(initialValue)
}
);

app.post('/saveValues', (req, res) => {
        console.log(req.body)
        fs.writeFile('savedValues.json',JSON.stringify(req.body), function(err) {
                if (err) {
                        return console.error(err);
                }
        });
        return res.send('data saved');
});

app.listen(port, () => console.log( 'App listening on port ${port}!`));