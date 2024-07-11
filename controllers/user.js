import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM bd_appjs.tarefas;";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = "INSERT INTO bd_appjs.tarefas VALUES (NULL, ?, NOW());";

    const VALUES = [
        req.body.tar_resp,
        req.body.tar_tarefa,
        // req.body.tar_datafinal,
    ];

    db.query(q, [VALUES], (err) => {
        if(err) return res.json(err);
        return res.status(200).json("Tarefa criada com sucesso.");
    })
};

export const updateUser = (req, res) => {
    const q = "UPDATE bd_appjs.tarefas SET tar_resp = ?, tar_tarefa = ?, tar_datafinal = ? where tar_id = ?"
    const VALUES = [
        req.body.tar_resp,
        req.body.tar_tarefa,
        req.body.tar_datafinal,
    ];

    db.query(q, [...VALUES, req.params.tar_id], (err) => {
        if(err) return res.json(err);
        
        return res.status(200).json("Tarefa atualizada com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM bd_appjs.tarefas WHERE tar_id = ?;";

    db.query(q, [req.params.tar_id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Tarefa deletada com sucesso.");
    });
};