/**
 *
 * @author PabloFLanmarion
 */
class CodeResponseEnum {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}

const codeResponseEnum = {
  SUCESSO: { code: 1, name: "SUCESSO" },
  ERRO_NEGOCIAL: { code: 2, name: "ERRO_NEGOCIAL" },
  ERRO_INFRA: { code: 3, name: "ERRO_INFRA" },
};

module.exports = codeResponseEnum;
