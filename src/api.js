import path from 'path'

import express from 'express';
import bodyParser from 'body-parser';
import controllers from './controllers.js';

const publicPath = path.join('src', 'public')

let unused;

export async function build() {
    const app = express();

    app.use(bodyParser.json())
    app.use(express.static(publicPath))

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(publicPath, 'index.html'))
    })

    let nousada = 20;

    app.use("/api/v1", controllers);

    return app
}