import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

var dbconnection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

dbconnection.connect(function (err) {
    if (err) throw err;
});


function query(str, param) {
    return new Promise((resolve, reject) => {
        dbconnection.query(
            str,
            param,
            (err, result) => {
                return err ? reject(err) : resolve(result.length == 1?result[0]:result);
            }
        );
    });
}

export default query;