/**
 * @author PabloFLanmarion
 *
 */
class SexoEnum {
  constructor(code, name, abrev) {
    this.code = code;
    this.name = name;
    this.abrev = abrev;
  }
}

const sexoEnum = {
  MASCULINO: { code: 1, name: "MASCULINO", abrev: "M" },
  FEMININO: { code: 2, name: "FEMININO", abrev: "F" },
};

module.exports = SexoEnum;
