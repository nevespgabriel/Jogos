let proximoId = 1;

module.exports = (body, id = proximoId) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    !isNaN(body.criadoEm.valueOf()) &&
    !isNaN(body.atualizadoEm.valueOf())
  ) {
    return {
      id: id,
      nome: body.nome,
      criadoEm: body.criadoEm,
      atualizadoEm: body.atualizadoEm,
    };
  }
};
