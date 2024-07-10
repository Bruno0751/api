import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9320',
    database: 'bd_appjs'
})
// connection.connect(err => {
//     if (err) {
//         console.error('Erro ao conectar ao banco de dados:', err);
//         return;
//     }
//     console.log('Conectado ao banco de dados MySQL');
// });
// export const db = connection;