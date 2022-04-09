/**
 * @author PabloFLanmarion
 *
 */
class NipeVocalEnum {
  constructor(code, name, abrev) {
    this.code = code;
    this.name = name;
    this.abrev = abrev;
  }
}

const nipeVocalEnum = {
  NENHUM: { code: 1, name: "NENHUM", abrev: "N" },
  ATIVO: { code: 2, name: "TENOR", abrev: "T" },
  BAIXO: { code: 3, name: "BAIXO", abrev: "B" },
  SOPRANO: { code: 4, name: "SOPRANO", abrev: "S" },
  CONTRALTO: { code: 5, name: "CONTRALTO", abrev: "C" },
};

module.exports = nipeVocalEnum;
