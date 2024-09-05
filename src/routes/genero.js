const genero_controller = require("../controllers/genero.js");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const code = genero_controller.store(req.body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const elementos = genero_controller.index();
    res.json(elementos); 
});

router.get("/:id", (req, res) => {
    const elemento = genero_controller.show(req.params.id);
    res.json(elemento);
})

router.put("/:id", (req, res) => {
    const alterado = genero_controller.update(req.body, req.params.id);
    res.status(alterado).json();
});

router.delete("/:id", (req, res) => {
    genero_controller.destroy(req.params.id);
    res.json();
})

module.exports = router;