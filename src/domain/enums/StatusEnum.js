/**
 * @author PabloFLanmarion
 *
 */
class StatusEnum {
  constructor(code, name, abrev) {
    this.code = code;
    this.name = name;
    this.abrev = abrev;
  }
}

const statusEnum = {
  ATIVO: { code: 1, name: "ATIVO", abrev: "A" },
  INATIVO: { code: 2, name: "INATIVO", abrev: "I" },
};

module.exports = StatusEnum;
