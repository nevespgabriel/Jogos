const estudio = require("../controllers/estudio.js");
const publicadora = require("../controllers/publicadora.js");
const genero = require("../controllers/genero.js");
let proximoId = 1;

module.exports = (body, id = proximoId) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    !isNaN(body.lancadoEm.valueOf()) &&
    estudio.show(body.idEstudio) &&
    publicadora.show(body.idPublicadora) &&
    body.idGeneros.every(idGenero => genero.show(idGenero))
  ) {
    return {
      id: id,
      nome: body.nome,
      idGeneros: body.idGeneros,
      idEstudio: body.idEstudio,
      idPublicadora: body.idPublicadora,
      lancadoEm: body.lancadoEm,
      criadoEm: body.criadoEm ? body.criadoEm : new Date(), 
      atualizadoEm: new Date()
    };
  }
};
