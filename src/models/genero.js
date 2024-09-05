let proximoId = 1;

module.exports = (body, id = proximoId) => {
  if (
    body.nome != undefined &&
    body.nome != "" 
  ) {
    return {
      id: id,
      nome: body.nome,
      criadoEm: body.criadoEm ? body.criadoEm : new Date(), 
      atualizadoEm: new Date()
    };
  }
};
