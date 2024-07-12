import { db } from "../db.js";

export const getUsers = (_, res) => {
    const query = "SELECT * FROM bd_appjs.tarefas;";
    db.query(query, (err, data) => {
        if (err) 
            return res.json(err);
        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const query = "INSERT INTO bd_appjs.tarefas VALUES (NULL, ?);";
    const VALUES = [
        req.body.tar_resp,
        req.body.tar_tarefa,
        req.body.tar_datafinal
    ];
    db.query(query, [VALUES], (err) => {
        if(err)
            return res.json(err);
        return res.status(200).json("Tarefa criada com sucesso.");
    })
};

export const updateUser = (req, res) => {
    const query = "UPDATE bd_appjs.tarefas SET tar_resp = ?, tar_tarefa = ?, tar_datafinal = ? where tar_id = ?"
    const VALUES = [
        req.body.tar_resp,
        req.body.tar_tarefa,
        req.body.tar_datafinal,
    ];
    db.query(query, [...VALUES, req.params.tar_id], (err) => {
        if(err)
            return res.json(err);
        return res.status(200).json("Tarefa atualizada com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const query = "DELETE FROM bd_appjs.tarefas WHERE tar_id = ?;";
    db.query(query, [req.params.tar_id], (err) => {
        if(err)
            return res.json(err);
        return res.status(200).json("Tarefa deletada com sucesso.");
    });
};