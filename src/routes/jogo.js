const jogo_controller = require("../controllers/jogo.js");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const code = jogo_controller.store(req.body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const elementos = jogo_controller.index();
    res.json(elementos); 
});

router.get("/:id", (req, res) => {
    const elemento = jogo_controller.show(req.params.id);
    res.json(elemento);
})

router.put("/:id", (req, res) => {
    const alterado = jogo_controller.update(req.body, req.params.id);
    res.status(alterado).json();
});

router.delete("/:id", (req, res) => {
    jogo_controller.destroy(req.params.id);
    res.json();
})

module.exports = router;