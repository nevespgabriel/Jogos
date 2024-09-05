const publicadora_controller = require("../controllers/publicadora.js");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const code = publicadora_controller.store(req.body);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const elementos = publicadora_controller.index();
  res.json(elementos);
});

router.get("/:id", (req, res) => {
  const elemento = publicadora_controller.show(req.params.id);
  res.json(elemento);
});

router.put("/:id", (req, res) => {
  const alterado = publicadora_controller.update(req.body, req.params.id);
  res.status(alterado).json();
});

router.delete("/:id", (req, res) => {
  publicadora_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
