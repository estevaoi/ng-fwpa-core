/**
 * @author PabloFLanmarion
 *
 */
class NipeInstrumentalEnum {
  constructor(code, name, abrev) {
    this.code = code;
    this.name = name;
    this.abrev = abrev;
  }
}

const nipeInstrumentalEnum = {
  NENHUM: { code: 1, name: "NENHUM", abrev: "NE" },
  CORDAS: { code: 2, name: "CORDAS", abrev: "CO" },
  MADEIRAS: { code: 3, name: "MADEIRAS", abrev: "MA" },
  METAIS: { code: 4, name: "METAIS", abrev: "ME" },
  PERCUSSAO: { code: 5, name: "PERCUSSAO", abrev: "PE" },
};

module.exports = nipeInstrumentalEnum;
