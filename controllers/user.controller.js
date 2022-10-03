import { response, request } from "express";

const getAll = (req = request, res = response) => {

  const {nombre, page=1, limit=10, apikey } = req.query;

  res.json({
    msg: "get API",
    nombre,
    page,
    limit,
    apikey
  });
};

const puttUser = (req, res) => {

  const id = req.params.id;

  res.json({
    msg: "put API",
    id
  });
};

const saveUser = (req, res) => {

  const body = req.body;

  res.status(201).json({
    msg: "post API",
    body
  });
};

const deleteUser = (req, res) => {
  res.json({
    msg: "DELETE API",
  });
};

const patchUser = (req, res) => {
  res.json({
    msg: "Patch API",
  });
};

export { getAll, puttUser, saveUser, deleteUser, patchUser };
