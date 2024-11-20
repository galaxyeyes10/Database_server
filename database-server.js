const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.port || 3001;
const pg = require('pg');

const client = new pg.Pool({
    user: "database_wvl1_user",
    host: "dpg-csu2uct6l47c73djpak0-a.oregon-postgres.render.com",
    password: "4RR5vnL2EreOdJkbzVEyiTvhvr1eLsXE",
    port: 5432,
    database: "database_wvl1",
    ssl: true,
});

app.use(cors())

app.get('*', async(req, res)=> {
    
    await client.connect();
    const result = await client.query(
        'select fruit_id, fruit_img from public."Database_DB"'
    );
    res.send(result.rows[1].fruit_img);
});

app.listen(3001, ()=> {
    console.log("connected on server port" + port);    
});

module.exports = app;