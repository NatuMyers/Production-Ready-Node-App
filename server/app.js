// import path from 'path' // use this to test if babel and es feats are working

import express from 'express'

import db from 'sequelize-connect'

async function connect () {
    await db.connect('rt_schema', 'root', 'strongpassword')
}

// after your promise comes back, you do this
(async function () {
    try {
        
        await connect()

    } catch (err) {

	console.log(`An error occured when connecting: ${err} `)

    }
    await connect()
    const app = express()

    const port = 3000
    app.listen(port, () => console.log(`Running on ${port}`) )

})()
